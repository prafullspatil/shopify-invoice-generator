import { TitleBar } from "@shopify/app-bridge-react";
import { Button, Grid, Icon, LegacyCard, Page, Text } from "@shopify/polaris";
import { PlayIcon, SettingsIcon } from "@shopify/polaris-icons";

export default function AdditionalPage() {
  const integrationsJson = [
    {
      id: 1,
      videoLink: "https://youtube.com",
      title: "Collect Customer Tax No",
      description:
        "By adding fields to the cart page to collect your customers TAX numbers, you can use them in your documents seamlessly.",
      buttonLabel: "Configure App Block",
      buttonLink: "https://google.com",
    },
    {
      id: 2,
      videoLink: "https://youtube.com",
      title: "My Account Download",
      description:
        "Allow customers to download invoices directly from their account page. Simplifies document access for your customers.",
      buttonLabel: "Configure App Block",
      buttonLink: "https://google.com",
    },
    {
      id: 3,
      videoLink: "https://youtube.com",
      title: "Thank You Page Download",
      description:
        "Enable invoice downloads directly from the thank you page after checkout. Provides immediate document access.",
      buttonLabel: "Configure App Block",
      buttonLink: "https://google.com",
    },
  ];

  return (
    <Page>
      <TitleBar title="Integrations" />
      <Page fullWidth>
        <div className="grid grid-cols-12 gap-4">
          {integrationsJson.map((integration) => {
            return (
              <div className="col-span-4 p-4 bg-white rounded-md h-[400px]">
                <h4 className="text-lg font-semibold">{integration.title}</h4>
                <div
                  style={{ background: "#EEEEEE" }}
                  className="my-4 cursor-pointer flex rounded-md hover:opacity-80 justify-center items-center py-20"
                >
                  <Icon size="large" source={PlayIcon} />
                </div>
                <p className="text-sm my-4 text-gray-500">
                  {integration.description}
                </p>
                <Button
                  onClick={() => {
                    window.open(integration.buttonLink, "_blank");
                  }}
                  fullWidth
                  size="large"
                  variant="secondary"
                  icon={SettingsIcon}
                >
                  {integration.buttonLabel}
                </Button>
              </div>
            );
          })}
        </div>
      </Page>
    </Page>
  );
}
