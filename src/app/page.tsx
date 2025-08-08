import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, home, person, social, newsletter } from "@/resources";
import { ContactBook, LocationAndTimezoneHome } from "@/components";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(home.title)}`,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={home.title}
        description={home.description}
        path={home.path}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${home.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column fillWidth horizontal="center" gap="l" paddingY="l">
        {/* Avatar */}
        <Avatar src={person.avatar} size="xl" />
        
        {/* Name */}
        <Heading style={{ textAlign: 'center' }} variant="display-strong-xl">
          {person.name}
        </Heading>
        
        {/* Role */}
        <Text style={{ textAlign: 'center' }} variant="display-default-xs" onBackground="neutral-weak">
          {person.role}
        </Text>
        
        {/* Description */}
        <Text 
          style={{ textAlign: 'center', maxWidth: '800px', color: 'var(--text-primary)' }} 
          variant="body-default-l" 
          wrap="balance"
        >
          {home.subline}
        </Text>
        
        {/* Social Links and Buttons */}
        <Flex gap="l" wrap horizontal="center" vertical="center">
          {social.map(
            (item) =>
              item.link && (
                <React.Fragment key={item.name}>
                  <Button
                    className="s-flex-hide"
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="l"
                    weight="strong"
                    variant="secondary"
                    style={{
                      borderWidth: '3px',
                      borderStyle: 'solid',
                      borderColor: 'var(--accent-primary)',
                      color: 'var(--accent-primary)',
                      backgroundColor: 'var(--surface-primary)',
                      fontWeight: '700',
                      fontSize: '16px',
                      padding: '12px 20px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.2s ease',
                      transform: 'scale(1.05)'
                    }}
                  />
                  <IconButton
                    className="s-flex-show"
                    size="l"
                    key={`${item.name}-icon`}
                    href={item.link}
                    icon={item.icon}
                    variant="secondary"
                    style={{
                      borderWidth: '3px',
                      borderStyle: 'solid',
                      borderColor: 'var(--accent-primary)',
                      color: 'var(--accent-primary)',
                      backgroundColor: 'var(--surface-primary)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      transform: 'scale(1.1)'
                    }}
                  />
                </React.Fragment>
              ),
          )}
          
          {/* Request a Video Call Button */}
          <Button
            href="https://cal.com/alexandershropshire"
            prefixIcon="calendar"
            label="Request a Video Call"
            size="l"
            weight="strong"
            variant="secondary"
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)',
              backgroundColor: 'var(--surface-primary)',
              fontWeight: '700',
              fontSize: '16px',
              padding: '12px 20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.2s ease',
              transform: 'scale(1.05)'
            }}
          />
          
          {/* Join My Contact Book Button */}
          <Button
            href="#contact-book"
            label="Join My Contact Book!"
            size="l"
            weight="strong"
            variant="secondary"
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)',
              backgroundColor: 'var(--surface-primary)',
              fontWeight: '700',
              fontSize: '16px',
              padding: '12px 20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.2s ease',
              transform: 'scale(1.05)'
            }}
          />
        </Flex>
        
        {/* Language Tags */}
        {person.languages.length > 0 && (
          <Flex wrap gap="8" horizontal="center">
            {person.languages.map((language, index) => (
              <Tag key={language} size="l">
                {language}
              </Tag>
            ))}
          </Flex>
        )}
        
      </Column>
      
      {/* Contact Book Module */}
      {newsletter.display && (
        <ContactBook newsletter={newsletter} />
      )}
    </Column>
  );
}
