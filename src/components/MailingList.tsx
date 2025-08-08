"use client";

import { Button, Flex, Heading, Input, Text, Background, Column } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

type ContactBookProps = {
  display: boolean;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

export const ContactBook = ({ newsletter }: { newsletter: ContactBookProps }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [nameTouched, setNameTouched] = useState<boolean>(false);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateName = (name: string): boolean => {
    return name.trim().length > 0;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (!validateName(value)) {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const handleInterestChange = (interest: string) => {
    console.log('handleInterestChange called with:', interest);
    console.log('Current interests before update:', interests);
    
    setInterests(prevInterests => {
      const isCurrentlySelected = prevInterests.includes(interest);
      const newInterests = isCurrentlySelected 
        ? prevInterests.filter(i => i !== interest)
        : [...prevInterests, interest];
      
      console.log('Previous interests:', prevInterests);
      console.log('Is currently selected:', isCurrentlySelected);
      console.log('Updated interests:', newInterests);
      
      return newInterests;
    });
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleNameBlur = () => {
    setNameTouched(true);
    if (!validateName(name)) {
      setNameError("Please enter your name.");
    }
  };

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
      // Debug logging before preparing form data
      console.log('Current interests state:', interests);
      console.log('Interests type:', typeof interests);
      console.log('Interests length:', interests ? interests.length : 'undefined');
      
      // Prepare form data as URL-encoded parameters (Google Apps Script expects this format)
      const interestsText = interests && interests.length > 0 ? interests.join(', ') : 'None selected';
      
      const formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('interests', interestsText);

      // Debug logging
      console.log('Sending interests:', interests);
      console.log('Interests text:', interestsText);
      console.log('Form data:', formData.toString());

      // Submit to Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbzHWRoHUjuN4yfqVznGFmeX4N2ECul-X1ySDLEWjGgIftr9Ar2aN3norfU6FK1G3IfE/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for joining my contact book! I'll be in touch as soon as I have something relevant to ask or share on the topics you selected. Feel free to reach out directly via Email or socials in the meantime! I'm excited to connect!");
        
        // Reset form
        setName("");
        setEmail("");
        setInterests([]);
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
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="catchup"
                      checked={interests.includes("catchup")}
                      onChange={(e) => {
                        console.log('Checkbox catchup changed:', e.target.checked);
                        handleInterestChange("catchup");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>📞 Catch-up calls & life updates</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="events"
                      checked={interests.includes("events")}
                      onChange={(e) => {
                        console.log('Checkbox events changed:', e.target.checked);
                        handleInterestChange("events");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🎉 Event invites</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="professional"
                      checked={interests.includes("professional")}
                      onChange={(e) => {
                        console.log('Checkbox professional changed:', e.target.checked);
                        handleInterestChange("professional");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>💼 Professional updates</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="public_investing"
                      checked={interests.includes("public_investing")}
                      onChange={(e) => {
                        console.log('Checkbox public_investing changed:', e.target.checked);
                        handleInterestChange("public_investing");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>📈 Systematic Trading Opportunities</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="small_business_investing"
                      checked={interests.includes("small_business_investing")}
                      onChange={(e) => {
                        console.log('Checkbox small_business_investing changed:', e.target.checked);
                        handleInterestChange("small_business_investing");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🏢 Small Business Investment Opportunities</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="real_estate_investing"
                      checked={interests.includes("real_estate_investing")}
                      onChange={(e) => {
                        console.log('Checkbox real_estate_investing changed:', e.target.checked);
                        handleInterestChange("real_estate_investing");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🏠 Real Estate Investment Opportunities</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="mentorship"
                      checked={interests.includes("mentorship")}
                      onChange={(e) => {
                        console.log('Checkbox mentorship changed:', e.target.checked);
                        handleInterestChange("mentorship");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🎓 Seeking Mentorship & Advice from You</span>
                  </label>
                </Column>
              </Column>
              
              <Column gap="s" flex={1} style={{ minWidth: '280px' }}>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  We both love: (select all that apply)
                </Text>
                <Column gap="xs">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="datascience"
                      checked={interests.includes("datascience")}
                      onChange={(e) => {
                        console.log('Checkbox datascience changed:', e.target.checked);
                        handleInterestChange("datascience");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🤖 Data Science / Machine Learning / AI</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="investing"
                      checked={interests.includes("investing")}
                      onChange={(e) => {
                        console.log('Checkbox investing changed:', e.target.checked);
                        handleInterestChange("investing");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>💰 Investing & Trading</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="entrepreneurship"
                      checked={interests.includes("entrepreneurship")}
                      onChange={(e) => {
                        console.log('Checkbox entrepreneurship changed:', e.target.checked);
                        handleInterestChange("entrepreneurship");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🚀 Small Business Entrepreneurship</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="worldtravel"
                      checked={interests.includes("worldtravel")}
                      onChange={(e) => {
                        console.log('Checkbox worldtravel changed:', e.target.checked);
                        handleInterestChange("worldtravel");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>✈️ World Travel & Language Exchange</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="mountainsports"
                      checked={interests.includes("mountainsports")}
                      onChange={(e) => {
                        console.log('Checkbox mountainsports changed:', e.target.checked);
                        handleInterestChange("mountainsports");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🏔️ Mountain Adventures</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="oceansports"
                      checked={interests.includes("oceansports")}
                      onChange={(e) => {
                        console.log('Checkbox oceansports changed:', e.target.checked);
                        handleInterestChange("oceansports");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🌊 Ocean Adventures</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="yoga"
                      checked={interests.includes("yoga")}
                      onChange={(e) => {
                        console.log('Checkbox yoga changed:', e.target.checked);
                        handleInterestChange("yoga");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>🧘 Yoga</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', minHeight: '24px' }}>
                    <input
                      type="checkbox"
                      id="soccer"
                      checked={interests.includes("soccer")}
                      onChange={(e) => {
                        console.log('Checkbox soccer changed:', e.target.checked);
                        handleInterestChange("soccer");
                      }}
                    />
                    <span style={{ whiteSpace: 'nowrap' }}>⚽ Soccer</span>
                  </label>
                </Column>
              </Column>
            </Flex>
            
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
                    animation: 'spin 1s linear infinite'
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