import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Vitalsy AI.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By downloading or using Vitalsy AI, you agree to these Terms of Service. If you do not agree, please do not use the app or website.",
  },
  {
    heading: "2. Not Medical Advice",
    body: "Vitalsy AI provides wellness guidance and educational insights only. It is not a medical device and does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional regarding medical conditions or concerns.",
  },
  {
    heading: "3. Your Account",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must be at least 16 years old to use Vitalsy AI.",
  },
  {
    heading: "4. Subscriptions & Billing",
    body: "Premium subscriptions renew automatically through your app store account unless cancelled at least 24 hours before the end of the current period. Free trials convert to paid subscriptions unless cancelled before the trial ends.",
  },
  {
    heading: "5. Acceptable Use",
    body: "You agree not to misuse the service, attempt to access it through unauthorized means, reverse engineer the app, or use it in any way that violates applicable laws.",
  },
  {
    heading: "6. Limitation of Liability",
    body: "To the maximum extent permitted by law, Vitalsy AI, Inc. is not liable for indirect, incidental, or consequential damages arising from your use of the service.",
  },
  {
    heading: "7. Changes to These Terms",
    body: "We may update these terms from time to time. Material changes will be communicated through the app or by email. Continued use after changes constitutes acceptance.",
  },
  {
    heading: "8. Contact",
    body: "Questions about these terms? Reach us at legal@vitalsy.ai.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="Please read these terms carefully — they govern your use of the Vitalsy AI app and website."
      sections={sections}
    />
  );
}
