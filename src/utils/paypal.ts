// PayPal SDK utilities

interface PayPalWindow extends Window {
  paypal?: {
    HostedButtons?: new (config: { hostedButtonId: string }) => { render: (selector: string) => void };
    Buttons?: new (config: object) => { render: (selector: string) => void };
  };
}

declare const window: PayPalWindow;

export function loadPayPalHostedButton(
  buttonId: string,
  containerId: string,
  clientId: string
): void {
  const loadScript = () => {
    const existingScript = document.getElementById(`paypal-script-${buttonId}`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = `paypal-script-${buttonId}`;
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=hosted-buttons&disable-funding=venmo&currency=USD`;
      script.async = true;
      script.onload = () => {
        const paypal = window.paypal;
        if (paypal?.HostedButtons) {
          const ButtonClass = paypal.HostedButtons;
          const button = new ButtonClass({ hostedButtonId: buttonId });
          button.render(`#${containerId}`);
        }
      };
      document.body.appendChild(script);
    } else {
      const paypal = window.paypal;
      if (paypal?.HostedButtons) {
        const ButtonClass = paypal.HostedButtons;
        const button = new ButtonClass({ hostedButtonId: buttonId });
        button.render(`#${containerId}`);
      }
    }
  };

  setTimeout(loadScript, 100);
}

export function loadPayPalSubscriptionButton(
  planId: string,
  containerId: string,
  clientId: string,
  onSuccess?: (subscriptionId: string) => void
): void {
  const loadScript = () => {
    const existingScript = document.getElementById(`paypal-script-sub-${planId}`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = `paypal-script-sub-${planId}`;
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&vault=true&intent=subscription`;
      script.async = true;
      script.setAttribute('data-sdk-integration-source', 'button-factory');
      script.onload = () => {
        const paypal = window.paypal;
        if (paypal?.Buttons) {
          const ButtonsClass = paypal.Buttons;
          const buttons = new ButtonsClass({
            style: {
              shape: 'pill',
              color: 'gold',
              layout: 'vertical',
              label: 'paypal'
            },
            createSubscription: function(_data: unknown, actions: { subscription: { create: (config: { plan_id: string }) => Promise<{ id: string }> } }) {
              return actions.subscription.create({
                plan_id: planId
              });
            },
            onApprove: function(data: { subscriptionID: string }) {
              if (onSuccess) {
                onSuccess(data.subscriptionID);
              }
            }
          });
          buttons.render(`#${containerId}`);
        }
      };
      document.body.appendChild(script);
    } else {
      const paypal = window.paypal;
      if (paypal?.Buttons) {
        const ButtonsClass = paypal.Buttons;
        const buttons = new ButtonsClass({
          style: {
            shape: 'pill',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal'
          },
          createSubscription: function(_data: unknown, actions: { subscription: { create: (config: { plan_id: string }) => Promise<{ id: string }> } }) {
            return actions.subscription.create({
              plan_id: planId
            });
          },
          onApprove: function(data: { subscriptionID: string }) {
            if (onSuccess) {
              onSuccess(data.subscriptionID);
            }
          }
        });
        buttons.render(`#${containerId}`);
      }
    }
  };

  setTimeout(loadScript, 200);
}