import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vitalsy AI collects, uses, and protects your personal health data.",
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: "We collect information you provide directly — such as your profile details, wellness goals, and the health metrics you choose to track (activity, hydration, sleep, and habits). With your permission, we may also receive data from connected wearables and health platforms.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "Your data is used solely to deliver and improve the Vitalsy AI experience: generating personalized insights, tracking your progress, and powering the AI assistant. We never sell your personal information to third parties.",
  },
  {
    heading: "3. Data Security",
    body: "All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access is strictly limited and audited. Our infrastructure follows industry best practices and enterprise-grade security standards.",
  },
  {
    heading: "4. Your Rights & Choices",
    body: "You can access, export, correct, or permanently delete your data at any time from within the app. You may also withdraw consent for device integrations whenever you choose.",
  },
  {
    heading: "5. Data Retention",
    body: "We retain your data only as long as your account is active or as needed to provide services. When you delete your account, your personal data is permanently removed from our systems within 30 days.",
  },
  {
    heading: "6. Contact Us",
    body: "If you have questions about this policy or how we handle your data, contact our privacy team at privacy@vitalsy.ai.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your trust matters to us. This policy explains what data Vitalsy AI collects, why we collect it, and the controls you have over it."
      sections={sections}
    />
  );
}
