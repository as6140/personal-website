"use client";

import { Column, Flex, Text, Icon } from "@once-ui-system/core";
import { useEffect, useState } from "react";

export const CurrentLocation = () => {
  const queretaroCoords = "20.5888,-100.3899";
  const googleMapsUrl = `https://www.google.com/maps?q=${queretaroCoords}`;
  // Replace YOUR_API_KEY_HERE with your actual Google Maps API key
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${queretaroCoords}&zoom=12`;
  
  return (
    <Column gap="m">
      <Flex 
        gap="8" 
        vertical="center"
        style={{
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid var(--neutral-alpha-medium)',
          backgroundColor: 'var(--surface-primary)',
          transition: 'all 0.2s ease',
        }}
        onClick={() => window.open(googleMapsUrl, '_blank')}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--neutral-alpha-weak)';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--surface-primary)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Icon name="mapPin" onBackground="accent-weak" />
        <Column gap="2">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Where is Alex Currently Working From?
          </Text>
          <Text variant="body-strong-s">
            Querétaro, Mexico 🇲🇽
          </Text>
        </Column>
      </Flex>
      
      {/* Map Preview */}
      <div
        style={{
          width: '100%',
          height: '120px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid var(--neutral-alpha-medium)',
        }}
      >
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Querétaro, Mexico"
        />
      </div>
    </Column>
  );
};

// Component that combines location and timezone
export const LocationAndTimezone = () => {
  const [currentTime, setCurrentTime] = useState("");
  const queretaroCoords = "20.5888,-100.3899";
  const googleMapsUrl = `https://www.google.com/maps?q=${queretaroCoords}`;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Column gap="m">
      <Flex 
        gap="8" 
        vertical="center"
        style={{
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid var(--neutral-alpha-medium)',
          backgroundColor: 'var(--surface-primary)',
          transition: 'all 0.2s ease',
        }}
        onClick={() => window.open(googleMapsUrl, '_blank')}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--neutral-alpha-weak)';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--surface-primary)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Icon name="mapPin" onBackground="accent-weak" />
        <Column gap="2">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Temporarily Working From
          </Text>
          <Text variant="body-strong-s">
            Querétaro, Mexico 🇲🇽
          </Text>
        </Column>
      </Flex>
      
      {/* Timezone Information */}
      <Flex 
        gap="8" 
        vertical="center"
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid var(--neutral-alpha-medium)',
          backgroundColor: 'var(--surface-primary)',
        }}
      >
        <Icon name="clock" onBackground="accent-weak" />
        <Column gap="2">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Working on Time Zone: America/New_York (Eastern Standard)
          </Text>
          <Text variant="body-strong-s">
            {currentTime}
          </Text>
        </Column>
      </Flex>
    </Column>
  );
};

// Home page version with side-by-side layout
export const LocationAndTimezoneHome = () => {
  const [currentTime, setCurrentTime] = useState("");
  const queretaroCoords = "20.5888,-100.3899";
  const googleMapsUrl = `https://www.google.com/maps?q=${queretaroCoords}`;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Column gap="m">
      {/* Side by side layout */}
      <Flex gap="m" mobileDirection="column">
        {/* Location Component */}
        <Flex 
          flex={1}
          gap="8" 
          vertical="center"
          style={{
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--neutral-alpha-medium)',
            backgroundColor: 'var(--surface-primary)',
            transition: 'all 0.2s ease',
          }}
          onClick={() => window.open(googleMapsUrl, '_blank')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--neutral-alpha-weak)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--surface-primary)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Icon name="mapPin" onBackground="accent-weak" />
          <Column gap="2">
            <Text variant="body-default-xs" onBackground="neutral-weak">
              Temporarily Working From
            </Text>
            <Text variant="body-strong-s">
              Querétaro, Mexico 🇲🇽
            </Text>
          </Column>
        </Flex>
        
        {/* Timezone Component */}
        <Flex 
          flex={1}
          gap="8" 
          vertical="center"
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--neutral-alpha-medium)',
            backgroundColor: 'var(--surface-primary)',
          }}
        >
          <Icon name="clock" onBackground="accent-weak" />
          <Column gap="2">
            <Text variant="body-default-xs" onBackground="neutral-weak">
              Working on Time Zone: America/New_York (Eastern Standard)
            </Text>
            <Text variant="body-strong-s">
              {currentTime}
            </Text>
          </Column>
        </Flex>
      </Flex>
    </Column>
  );
};

// Compact version for header
export const CurrentLocationCompact = () => {
  const queretaroCoords = "20.5888,-100.3899";
  const googleMapsUrl = `https://www.google.com/maps?q=${queretaroCoords}`;
  
  return (
    <Flex 
      gap="xs" 
      vertical="center"
      style={{
        cursor: 'pointer',
        padding: '6px 10px',
        borderRadius: '6px',
        border: '1px solid var(--neutral-alpha-medium)',
        backgroundColor: 'var(--surface-primary)',
        transition: 'all 0.2s ease',
      }}
      onClick={() => window.open(googleMapsUrl, '_blank')}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--neutral-alpha-weak)';
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--surface-primary)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Icon name="mapPin" onBackground="accent-weak" size="s" />
      <Text variant="body-strong-xs">
        Querétaro 🇲🇽
      </Text>
    </Flex>
  );
}; 