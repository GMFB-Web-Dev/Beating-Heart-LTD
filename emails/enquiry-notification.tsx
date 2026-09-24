import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "react-email";

export type EnquiryNotificationEmailProps = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const logoUrl = "https://beating-heart-ltd.vercel.app/beatingheart-logo.jpg";

const previewProps: EnquiryNotificationEmailProps = {
  name: "Taylor Morgan",
  email: "taylor@example.com",
  service: "Residential Cleaning",
  message:
    "Hello, I would love a quote for a fortnightly clean of our three-bedroom home in Auckland.",
};

export function EnquiryNotificationEmail({
  name = previewProps.name,
  email = previewProps.email,
  service = previewProps.service,
  message = previewProps.message,
}: Partial<EnquiryNotificationEmailProps> = {}) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Body style={body}>
        <Preview>New BeatingHeart website enquiry received.</Preview>
        <Container lang="en" dir="ltr" style={container}>
          <Section style={logoSection}>
            <Img
              src={logoUrl}
              alt="BeatingHeart Limited Cleaning Services"
              width="190"
              height="190"
              style={logo}
            />
          </Section>

          <Section style={heroSection}>
            <Text style={eyebrow}>NEW WEBSITE ENQUIRY</Text>
            <Heading as="h1" style={heading}>
              A new client is ready to connect.
            </Heading>
            <Text style={heroCopy}>
              The details below were submitted through the BeatingHeart website contact form.
            </Text>
          </Section>

          <Section style={contentSection}>
            <Text style={serviceBadge}>{service}</Text>

            <Text style={label}>NAME</Text>
            <Text style={value}>{name}</Text>

            <Hr style={divider} />

            <Text style={label}>EMAIL</Text>
            <Text style={value}>{email}</Text>

            <Hr style={divider} />

            <Text style={label}>MESSAGE</Text>
            <Section style={messagePanel}>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Button href={`mailto:${email}`} style={replyButton}>
              Reply to enquiry
            </Button>

            <Text style={replyNote}>
              Replying to this email will also send your response directly to {name}.
            </Text>
          </Section>

          <Section style={footerSection}>
            <Text style={footerTitle}>BEATINGHEART LIMITED</Text>
            <Text style={footerCopy}>Cleaning with care, precision, and heart.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

EnquiryNotificationEmail.PreviewProps = previewProps;

export default EnquiryNotificationEmail;

const body = {
  backgroundColor: "#f2f4f7",
  color: "#101828",
  fontFamily: "Inter, Arial, sans-serif",
  margin: "0",
  padding: "32px 12px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e4e7ec",
  borderRadius: "18px",
  margin: "0 auto",
  maxWidth: "600px",
};

const logoSection = {
  backgroundColor: "#ffffff",
  textAlign: "center" as const,
};

const logo = {
  display: "block",
  margin: "0 auto",
  width: "190px",
};

const heroSection = {
  backgroundColor: "#0b1d4d",
  padding: "42px 42px 38px",
};

const eyebrow = {
  color: "#cfd6e6",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "2px",
  lineHeight: "18px",
  margin: "0 0 14px",
};

const heading = {
  color: "#ffffff",
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "34px",
  fontWeight: "400",
  letterSpacing: "-0.7px",
  lineHeight: "42px",
  margin: "0 0 16px",
};

const heroCopy = {
  color: "#e9ecf3",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
};

const contentSection = {
  padding: "38px 42px 42px",
};

const serviceBadge = {
  backgroundColor: "#edf1f8",
  border: "1px solid #d7deec",
  borderRadius: "999px",
  color: "#0b1d4d",
  display: "inline-block",
  fontSize: "13px",
  fontWeight: "700",
  lineHeight: "20px",
  margin: "0 0 30px",
  padding: "8px 14px",
};

const label = {
  color: "#667085",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "1.5px",
  lineHeight: "16px",
  margin: "0 0 5px",
};

const value = {
  color: "#101828",
  fontSize: "17px",
  lineHeight: "26px",
  margin: "0",
};

const divider = {
  border: "0",
  borderColor: "#e4e7ec",
  borderStyle: "solid",
  borderTopWidth: "1px",
  margin: "22px 0",
};

const messagePanel = {
  backgroundColor: "#f7f8fb",
  border: "1px solid #e4e7ec",
  borderRadius: "12px",
  margin: "8px 0 26px",
  padding: "18px 20px",
};

const messageText = {
  color: "#344054",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const replyButton = {
  backgroundColor: "#0b1d4d",
  borderRadius: "999px",
  boxSizing: "border-box" as const,
  color: "#ffffff",
  display: "block",
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "20px",
  padding: "14px 22px",
  textAlign: "center" as const,
  textDecoration: "none",
};

const replyNote = {
  color: "#667085",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "14px 0 0",
  textAlign: "center" as const,
};

const footerSection = {
  backgroundColor: "#f7f8fb",
  borderTop: "1px solid #e4e7ec",
  padding: "26px 42px 28px",
  textAlign: "center" as const,
};

const footerTitle = {
  color: "#0b1d4d",
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "16px",
  letterSpacing: "1.8px",
  lineHeight: "22px",
  margin: "0 0 6px",
};

const footerCopy = {
  color: "#667085",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0",
};
