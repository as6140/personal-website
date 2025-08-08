"use client";

import { Button, Flex, Heading, Input, Text, Background, Column } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState, useCallback, useMemo } from "react";

type ContactBookProps = {
  display: boolean;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

export const ContactBook = ({ newsletter }: { newsletter: ContactBookProps }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);
  const [connectionNote, setConnectionNote] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [nameTouched, setNameTouched] = useState<boolean>(false);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateEmail = useCallback((email: string): boolean => {
    if (email === "") {
      return true;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }, []);

  const validateName = useCallback((name: string): boolean => {
    return name.trim().length > 0;
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }, [validateEmail]);

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (!validateName(value)) {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  }, [validateName]);

  const handleInterestChange = useCallback((interest: string) => {
    setInterests(prevInterests => {
      const isCurrentlySelected = prevInterests.includes(interest);
      return isCurrentlySelected 
        ? prevInterests.filter(i => i !== interest)
        : [...prevInterests, interest];
    });
  }, []);

  const handleEmailBlur = useCallback(() => {
    setEmailTouched(true);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }
  }, [email, validateEmail]);

  const handleNameBlur = useCallback(() => {
    setNameTouched(true);
    if (!validateName(name)) {
      setNameError("Please enter your name.");
    }
  }, [name, validateName]);

  // Memoize checkbox data to prevent unnecessary re-renders
  const checkboxData = useMemo(() => ({
    firstColumn: [
      { id: "catchup", label: "📞 Catch-up calls & life updates" },
      { id: "events", label: "🎉 Event invites" },
      { id: "professional", label: "💼 Professional updates" },
      { id: "public_investing", label: "📈 Systematic Trading Opportunities" },
      { id: "small_business_investing", label: "🏢 Small Business Investment Opportunities" },
      { id: "real_estate_investing", label: "🏠 Real Estate Investment Opportunities" },
      { id: "mentorship", label: "🤝 Mentorship & Advice From You" }
    ],
    secondColumn: [
      { id: "datascience", label: "🤖 Data Science / Machine Learning / AI" },
      { id: "investing", label: "💰 Investing & Trading" },
      { id: "entrepreneurship", label: "🚀 Small Business Entrepreneurship" },
      { id: "worldtravel", label: "✈️ World Travel & Language Exchange" },
      { id: "mountainsports", label: "🏔️ Mountain Adventures" },
      { id: "oceansports", label: "🌊 Ocean Adventures" },
      { id: "yoga", label: "🧘 Yoga" },
      { id: "soccer", label: "⚽ Soccer" },
      { id: "music_film_art", label: "🎵 Music, Film, and Art" }
    ]
  }), []);

  // Memoize the checkbox change handler to prevent re-renders
  const handleCheckboxChange = useCallback((interestId: string) => {
    handleInterestChange(interestId);
  }, [handleInterestChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateName(name)) {
      setNameError("Please enter your name.");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Separate professional and personal interests
      const professionalInterests = interests.filter(interest => 
        ['catchup', 'events', 'professional', 'public_investing', 'small_business_investing', 'real_estate_investing', 'mentorship'].includes(interest)
      );
      
      const personalInterests = interests.filter(interest => 
        ['datascience', 'investing', 'entrepreneurship', 'worldtravel', 'mountainsports', 'oceansports', 'yoga', 'soccer', 'music_film_art'].includes(interest)
      );

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          professional_interests: professionalInterests,
          personal_interests: personalInterests,
          connection_note: connectionNote || null
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for joining my contact book! I'll be in touch as soon as I have something relevant to ask or share on the topics you selected. Feel free to reach out directly via Email or socials in the meantime! I'm excited to connect!");
        
        // Reset form
        setName("");
        setEmail("");
        setInterests([]);
        setConnectionNote("");
        setNameError("");
        setEmailError("");
        setNameTouched(false);
        setEmailTouched(false);
      } else {
        alert("There was an error submitting your information. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was an error submitting your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate3d(0, 0, 1, 0deg); }
          100% { transform: rotate3d(0, 0, 1, 360deg); }
        }
      `}</style>
      <Column
        id="contact-book"
        overflow="hidden"
        fillWidth
        padding="xl"
        radius="l"
        marginBottom="m"
        horizontal="center"
        align="center"
        background="surface"
        border="neutral-alpha-medium"
        className="contact-book-module"
        style={{
          backgroundColor: 'var(--neutral-alpha-weak)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text
          style={{
            position: "relative",
            maxWidth: "var(--responsive-width-xs)",
          }}
          wrap="balance"
          marginBottom="l"
          onBackground="neutral-medium"
        >
          {newsletter.description}
        </Text>
        <form
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <Column fillWidth maxWidth={48} gap="m">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name *"
              required
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              errorMessage={nameTouched ? nameError : ""}
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email *"
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              errorMessage={emailTouched ? emailError : ""}
            />
            
            <Flex gap="xl" mobileDirection="column">
              <Column gap="s" flex={1} style={{ minWidth: '280px' }}>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  I can hit you up for: (select all that apply)
                </Text>
                <Column gap="xs">
                  {checkboxData.firstColumn.map((item) => (
                    <label key={item.id} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      cursor: 'pointer', 
                      minHeight: '24px',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}>
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={interests.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        style={{ transform: 'translateZ(0)' }}
                      />
                      <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>
                    </label>
                  ))}
                </Column>
              </Column>
              
              <Column gap="s" flex={1} style={{ minWidth: '280px' }}>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  We both love: (select all that apply)
                </Text>
                <Column gap="xs">
                  {checkboxData.secondColumn.map((item) => (
                    <label key={item.id} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      cursor: 'pointer', 
                      minHeight: '24px',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}>
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={interests.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        style={{ transform: 'translateZ(0)' }}
                      />
                      <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>
                    </label>
                  ))}
                </Column>
              </Column>
            </Flex>
            
            <Column gap="s">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Want to connect about something else? Anything else you want to message?
              </Text>
              <textarea
                value={connectionNote}
                onChange={(e) => setConnectionNote(e.target.value)}
                placeholder="Optional: Share what you'd like to connect about..."
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '12px',
                  border: '1px solid var(--neutral-alpha-medium)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--page-background)',
                  color: 'var(--text-neutral-strong)',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </Column>
            
            <Button 
              type="submit" 
              size="m" 
              fillWidth
              disabled={!name.trim() || !email.trim() || isSubmitting}
              style={{
                position: 'relative',
                minHeight: '44px'
              }}
            >
              {isSubmitting ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid transparent',
                    borderTop: '2px solid currentColor',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}></div>
                  Joining...
                </div>
              ) : (
                "Join Contact Book"
              )}
            </Button>
          </Column>
        </form>
      </Column>
    </>
  );
}; 