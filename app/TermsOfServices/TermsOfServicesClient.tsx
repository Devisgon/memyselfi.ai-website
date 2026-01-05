'use client';
import { Footer } from "../pages-components/UnifiedInbox-components/Footer";
interface TermItem {
  id: number;
  title: string;
  content: string;
   gmail?: string;     
  subcontent?: string;
}
const termsData: TermItem[] = [
  {
    id: 1,
    title: 'Introduction',
    content: "These Terms of Service ('Terms') govern your access to and use of Me Myself I Pty Ltd s products, applications, and services, including the MeMyselfI.ai website, mobile apps, and all AI-powered functionality. By accessing or using the Service, you agree to be bound by these Terms."
  },
  {
    id: 2,
    title: 'About Our Services',
    content: 'Me Myself I provides a global AI-driven platform designed to help users organise, manage, and automate everyday tasks. Our tools include AI-powered voice and messaging assistants, scheduling and calendar management, budgeting and spending insights, diary and note management, inbox organisation, and other personal productivity features. The available tools and features may vary based on your account type, region, or updates to our platform. These Terms apply to all present and future features under the Me Myself I ecosystem.'
  },
  {
    id: 3,
    title: 'Eligibility and Accounts',
    content:'You must be at least 16 years old to use our Service. If you are under the legal age of majority in your jurisdiction, parental or guardian consent is required. You are responsible for maintaining the confidentiality of your login credentials and for any activity under your account.'
  },
  {
    id: 4,
    title: 'Permitted Use',
    content:'You agree to use the Service only for lawful purposes and in compliance with all applicable laws and regulations. You must not misuse the Service, including attempting unauthorised access, interfering with its operation, or using it to transmit harmful or illegal material.'   
  },
  {
    id: 5,
    title: 'AI Assistant and Automation Features',
    content:'Our Service uses artificial intelligence and automated decision-making to provide responses, insights, scheduling, and other features. AI-generated outputs are for general informational and assistive purposes only and may not always be accurate. You are solely responsible for decisions made based on AI-generated content. The Service does not replace professional, medical, financial, or legal advice.'
  },
  {
    id: 6,
    title: 'Data Collection and Privacy',
    content:'We collect and process your data as described in our Privacy Policy. By using the Service, you consent to the collection, storage, and use of your personal information, including through AI interactions, consistent with that policy. You retain ownership of your data, and we use it solely to deliver and improve the Service.'
  },
  {
    id: 7,
    title: 'Subscriptions and Payments',
    content:'Some features may require a paid subscription. By subscribing, you authorise us or our third-party payment processors to charge recurring fees in accordance with your selected plan. Trial periods automatically convert to paid subscriptions unless cancelled before expiry. You can cancel your plan anytime through your account settings. Fees are non-refundable except as required by law.'
  },
  {
    id: 8,
    title: 'Updates and Feature Changes',
    content:'We may modify, suspend, or discontinue any aspect of the Service at our discretion. Updates may introduce new features or remove existing ones. Where possible, we will provide notice of material changes. Your continued use after updates constitutes acceptance of the new version of the Service.'
  },
    {
    id: 9,
    title: ' Intellectual Property',
    content:'All intellectual property rights in the Service, including software, design, trademarks, and AI systems, are owned by Me Myself I Pty Ltd or its licensors. You may not copy, reproduce, or create derivative works without prior written consent.'
  },
    {
    id: 10,
    title: 'Compliance and Responsibility',
    content:'You are solely responsible for ensuring that your use of the Service complies with all applicable laws, including those governing AI use, call recording, data privacy, and consent. We are not responsible for illegal use or data collection performed through your account.'
  },
     {
    id: 11,
    title: ' Disclaimer of Warranties',
    content:"The Service is provided 'as is' and 'as available'  without warranties of any kind. We do not guarantee that the Service will be uninterrupted, secure, or error-free. We make no representations regarding accuracy or reliability of AI-generated content."
  },
     {
    id: 12,
    title: 'Limitation of Liability',
    content:'To the maximum extent permitted by law, Me Myself I Pty Ltd is not liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Service. Our total liability will not exceed the fees paid by you in the 12 months prior to the claim, or AUD $100 if you use the Service for free.'
  },
    {
    id: 13,
    title: 'Termination and Suspension',
    content:'We reserve the right to suspend or terminate your account if you violate these Terms, create a security risk, or misuse the Service. If termination occurs without cause, a prorated refund may be issued. We may retain limited data as required by law after termination.'
  },
    {
    id: 14,
    title: 'Governing Law',
    content:'These Terms are governed by the laws of Australia. If you access the Service from another country, you are responsible for compliance with your local laws. Any disputes shall be resolved in the appropriate courts within Australia unless local consumer law requires otherwise.'
  },
    {
    id: 15,
    title: 'Changes to These Terms',
    content:'We may update these Terms periodically. Material updates will be communicated via the website, app, or email. Continued use of the Service after updates indicates your acceptance of the revised Terms.'
  },
  {
  id: 16,
  title: 'Contact Information',
  content: 'For any questions or concerns regarding these Terms, please contact: ',
  gmail: 'support@memyselfi.ai ',
  subcontent:'We are committed to addressing your inquiries promptly and transparently.'
}
];

export default function TermOfServices() {
  return (
    <>
    <section
      className="w-full min-h-screen mt-10 px-6 py-16"
      style={{ backgroundColor: 'var(--bg-bg)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 ">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm opacity-70">Me Myself | Pty Ltd</p>
        </div>
  <div>
  {termsData.map((item) => {
    const isContactInfo = item.id === 16;

    return (
      <div
        key={item.id}
        className={`space-y-3 ${isContactInfo ? 'mt-2 mb-2' : ''}`}>
        <h2 className="text-xl font-semibold mb-2 ">
          {item.id}. {item.title}
        </h2>
        {item.content && (
          <p className="text-sm leading-relaxed opacity-80 mb-6">
            {item.content}
          </p>
        )}

        {item.gmail && (
          <p className="text-sm font-medium ">
           Gmail: {item.gmail}
          </p>
        )}

        {/* Sub content */}
        {item.subcontent && (
          <p className="text-sm opacity-70">
            {item.subcontent}
          </p>
        )}
      </div>
    );
  })}
</div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
