"use client";

import { Button, Flex, Heading, Input, Text, Background, Column, Checkbox } from "@once-ui-system/core";
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
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
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

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('interests', interests.length > 0 ? interests.join(', ') : 'None selected');

      // Submit to Google Apps Script (you'll need to replace with your web app URL)
      const response = await fetch('https://script.google.com/macros/s/AKfycbzHWRoHUjuN4yfqVznGFmeX4N2ECul-X1ySDLEWjGgIftr9Ar2aN3norfU6FK1G3IfE/exec', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for joining my contact book! I'll be in touch when it makes sense.");
        
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
    }
  };

  return (
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
            <Column gap="s" flex={1}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I can hit you up for: (select all that apply)
              </Text>
              <Column gap="xs">
                <Checkbox
                  id="catchup"
                  label="📞 Catch-up calls & life updates"
                  checked={interests.includes("catchup")}
                  onChange={() => handleInterestChange("catchup")}
                />
                <Checkbox
                  id="events"
                  label="🎉 Event invites"
                  checked={interests.includes("events")}
                  onChange={() => handleInterestChange("events")}
                />
                <Checkbox
                  id="professional"
                  label="💼 Professional updates"
                  checked={interests.includes("professional")}
                  onChange={() => handleInterestChange("professional")}
                />
                <Checkbox
                  id="public_investing"
                  label="📈 Systematic Trading Opportunities"
                  checked={interests.includes("public_investing")}
                  onChange={() => handleInterestChange("public_investing")}
                />
                <Checkbox
                  id="small_business_investing"
                  label="🏢 Small Business Investment Opportunities"
                  checked={interests.includes("small_business_investing")}
                  onChange={() => handleInterestChange("small_business_investing")}
                />
                <Checkbox
                  id="real_estate_investing"
                  label="🏠 Real Estate Investment Opportunities"
                  checked={interests.includes("real_estate_investing")}
                  onChange={() => handleInterestChange("real_estate_investing")}
                />
                <Checkbox
                  id="mentorship"
                  label="🎓 Mentorship & Advice"
                  checked={interests.includes("mentorship")}
                  onChange={() => handleInterestChange("mentorship")}
                />
              </Column>
            </Column>
            
            <Column gap="s" flex={1}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                We both love: (select all that apply)
              </Text>
              <Column gap="xs">
                <Checkbox
                  id="datascience"
                  label="🤖 Data Science / Machine Learning / AI"
                  checked={interests.includes("datascience")}
                  onChange={() => handleInterestChange("datascience")}
                />
                <Checkbox
                  id="investing"
                  label="💰 Investing & Trading"
                  checked={interests.includes("investing")}
                  onChange={() => handleInterestChange("investing")}
                />
                <Checkbox
                  id="entrepreneurship"
                  label="🚀 Small Business Entrepreneurship"
                  checked={interests.includes("entrepreneurship")}
                  onChange={() => handleInterestChange("entrepreneurship")}
                />
                <Checkbox
                  id="worldtravel"
                  label="✈️ World Travel"
                  checked={interests.includes("worldtravel")}
                  onChange={() => handleInterestChange("worldtravel")}
                />
                <Checkbox
                  id="mountainsports"
                  label="🏔️ Mountain Adventures"
                  checked={interests.includes("mountainsports")}
                  onChange={() => handleInterestChange("mountainsports")}
                />
                <Checkbox
                  id="oceansports"
                  label="🌊 Ocean Adventures"
                  checked={interests.includes("oceansports")}
                  onChange={() => handleInterestChange("oceansports")}
                />
                <Checkbox
                  id="yoga"
                  label="🧘 Yoga"
                  checked={interests.includes("yoga")}
                  onChange={() => handleInterestChange("yoga")}
                />
                <Checkbox
                  id="soccer"
                  label="⚽ Soccer"
                  checked={interests.includes("soccer")}
                  onChange={() => handleInterestChange("soccer")}
                />
              </Column>
            </Column>
          </Flex>
          
          <Button 
            type="submit" 
            size="m" 
            fillWidth
            disabled={!name.trim() || !email.trim()}
          >
            Join Contact Book
          </Button>
        </Column>
      </form>
    </Column>
  );
}; 