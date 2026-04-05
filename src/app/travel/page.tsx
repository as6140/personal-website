import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { WorldTravelMap } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: `Travel – ${person.name}`,
    description: "An interactive map of 31 countries and territories Alex has visited.",
    baseURL: baseURL,
    image: `/api/og/generate?title=Travel`,
    path: "/travel",
  });
}

export default function Travel() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/travel"
        title={`Travel – ${person.name}`}
        description="An interactive map of 31 countries and territories Alex has visited."
        image={`/api/og/generate?title=Travel`}
        author={{
          name: person.name,
          url: `${baseURL}/travel`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="l" paddingY="l" paddingX="l">
        <Column gap="s">
          <Heading variant="display-strong-l">Where I've Been</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            31 countries and territories — and a long list still to go. Hover a highlighted country to see where.
            The red dot is where I'm based right now.
          </Text>
        </Column>
        <WorldTravelMap />
      </Column>
    </Column>
  );
}
