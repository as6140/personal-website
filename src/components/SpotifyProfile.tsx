import { Flex, Text, Button, Icon } from "@once-ui-system/core";

interface SpotifyProfileProps {
  profile: {
    username: string;
    displayName: string;
    profileUrl: string;
    description: string;
    showCurrentListening: boolean;
    showRecentlyPlayed: boolean;
  };
}

export const SpotifyProfile = ({ profile }: SpotifyProfileProps) => {
  return (
    <Flex
      background="surface"
      border="neutral-alpha-weak"
      radius="m-4"
      shadow="m"
      padding="l"
      gap="m"
      direction="column"
    >
      {/* Profile Header */}
      <Flex gap="m" vertical="center">
        <Icon name="music" size="l" onBackground="accent-weak" />
        <Flex fillWidth direction="column" gap="s">
          <Text variant="body-strong-l">{profile.displayName}</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            @{profile.username}
          </Text>
        </Flex>
        <a
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 16px",
            backgroundColor: "var(--accent-weak)",
            color: "var(--accent-strong)",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Follow on Spotify
        </a>
      </Flex>

      {/* Description */}
      <Text variant="body-default-s" onBackground="neutral-weak">
        {profile.description}
      </Text>

      {/* Current Listening Activity */}
      {profile.showCurrentListening && (
        <Flex
          background="neutral-alpha-weak"
          border="neutral-alpha-weak"
          radius="s"
          padding="m"
          gap="s"
          direction="column"
        >
          <Text variant="body-strong-s">My Music Taste</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            🎵 Check out my eclectic music collection on Spotify!
          </Text>
          <iframe
            style={{ borderRadius: "8px", marginTop: "8px" }}
            src={`https://open.spotify.com/embed/user/${profile.username}`}
            width="100%"
            height="80"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="My Music Taste"
          />
        </Flex>
      )}

      {/* Recently Played */}
      {profile.showRecentlyPlayed && (
        <Flex
          background="neutral-alpha-weak"
          border="neutral-alpha-weak"
          radius="s"
          padding="m"
          gap="s"
          direction="column"
        >
          <Text variant="body-strong-s">Follow My Journey</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            🎧 Follow me on Spotify to see what I'm discovering and listening to!
          </Text>
          <iframe
            style={{ borderRadius: "8px", marginTop: "8px" }}
            src={`https://open.spotify.com/embed/user/${profile.username}`}
            width="100%"
            height="80"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Follow My Journey"
          />
        </Flex>
      )}

      {/* Quick Stats */}
      <Flex gap="m" horizontal="center">
        <Flex direction="column" horizontal="center" gap="xs">
          <Text variant="body-strong-s">Playlists</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Curated
          </Text>
        </Flex>
        <Flex direction="column" horizontal="center" gap="xs">
          <Text variant="body-strong-s">Following</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {profile.username}
          </Text>
        </Flex>
        <Flex direction="column" horizontal="center" gap="xs">
          <Text variant="body-strong-s">Taste</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Eclectic
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}; 