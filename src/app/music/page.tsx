import { Flex, Text, Meta, Schema, Tag } from "@once-ui-system/core";
import { music, baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: music.title,
    description: music.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(music.title)}`,
    path: music.path,
  });
}

const SpotifyEmbed = ({ embedUrl, title }: { embedUrl: string; title: string }) => (
  <iframe
    style={{ borderRadius: "12px" }}
    src={embedUrl}
    width="100%"
    height="352"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title={title}
  />
);

const MusicCard = ({ 
  title, 
  description, 
  embedUrl, 
  category, 
  featured = false,
  artist 
}: { 
  title: string; 
  description: string; 
  embedUrl: string; 
  category?: string;
  featured?: boolean;
  artist?: string;
}) => (
  <Flex
    background="surface"
    border="neutral-alpha-weak"
    radius="m-4"
    shadow="m"
    padding="m"
    gap="m"
    direction="column"
  >
    <Flex gap="m" vertical="start">
      <Flex fillWidth vertical="start" gap="s">
        <Flex gap="s" vertical="center">
          <Text variant="body-strong-l">{title}</Text>
          {featured && (
            <Tag color="accent">
              Featured
            </Tag>
          )}
        </Flex>
        {artist && (
          <Text variant="body-default-s" onBackground="neutral-weak">
            by {artist}
          </Text>
        )}
        {category && (
          <Tag color="neutral">
            {category}
          </Tag>
        )}
        <Text variant="body-default-s" onBackground="neutral-weak">
          {description}
        </Text>
      </Flex>
    </Flex>
    <SpotifyEmbed embedUrl={embedUrl} title={title} />
  </Flex>
);

export default function MusicPage() {
  const allPlaylists = music.playlists;
  const allAlbums = music.albums;

  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={music.title}
        description={music.description}
        path={music.path}
        image={`/api/og/generate?title=${encodeURIComponent(music.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${music.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Flex direction="column" gap="xl" padding="xl">
        {/* Header */}
        <Flex direction="column" gap="m">
          <Text variant="display-strong-xl">Music</Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Welcome to my Music page! As a music obsessive, I constantly feel compelled to listen to music, discover new music, or talk with friends about our reactions to new releases and artists. My taste is volatile, spanning many genres and moods, but I hope you'll find something that you connect with through my recommendations. Below I share what's been playing on my headphones and speakers recently - a curated selection of my recent or favorite playlists, albums, or music discoveries. Enjoy!
          </Text>
        </Flex>

        {/* Featured Playlists */}
        {allPlaylists.length > 0 && (
          <Flex direction="column" gap="l">
            <Text variant="display-strong-s">Featured Playlists</Text>
            <Flex direction="column" gap="l">
              {allPlaylists.map((playlist: any, index: number) => (
                <MusicCard
                  key={index}
                  title={playlist.title}
                  description={playlist.description}
                  embedUrl={playlist.embedUrl}
                  category={playlist.category}
                  featured={playlist.featured}
                />
              ))}
            </Flex>
          </Flex>
        )}

        {/* Featured Albums */}
        {allAlbums.length > 0 && (
          <Flex direction="column" gap="l">
            <Text variant="display-strong-s">Featured Albums</Text>
            <Flex direction="column" gap="l">
              {allAlbums.map((album: any, index: number) => (
                <MusicCard
                  key={index}
                  title={album.title}
                  description={album.description}
                  embedUrl={album.embedUrl}
                  artist={album.artist}
                  featured={album.featured}
                />
              ))}
            </Flex>
          </Flex>
        )}


      </Flex>
    </Flex>
  );
} 