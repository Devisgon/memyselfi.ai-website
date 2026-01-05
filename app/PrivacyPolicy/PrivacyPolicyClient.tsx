'use client';
interface Section {
  id: number;
  title: string;
  content?: string;
  list?: string[];
  gmail?: string;     
  subcontent?: string;
}
const privacyData: Section[] = [
  {
    id: 1,
    title: 'Introduction',
    content:  "Welcome to Me Myself I Pty Ltd (‘we’, ‘us’, or ‘our’). This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, mobile app, and related services. By using MeMyselfI.ai, you consent to the data practices described in this policy. We are committed to safeguarding your privacy and complying with global privacy regulations, including the Australian Privacy Act 1988 (Cth), the EU General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA)."
  },
  {
    id: 2,
    title: 'Information We Collect',
    content: 'We collect personal and technical information to deliver and improve our services. The types of information we collect include: ',
    list: [
      'Identity details such as your name, email address, and account credentials. ',
      'Payment and billing information.',
      'Usage data, including app interactions, preferences, and activity logs.',
      'Technical information such as device type, IP address, browser, and operating system.',
      ' Communications, including voice memos, transcriptions, and uploaded documents. ',
      'Family or linked account information where applicable (e.g., parent/child accounts).'
    ]
  },
  {
    id: 3,
    title: 'Legal Basis for Processing',
    content: 'We process personal data under the following lawful bases as defined by the GDPR and similar international laws: ',
    list: [
'  To perform our contract with you (for example, to provide requested services).',
' With your consent (for example, marketing or feature opt-ins). ',
'To comply with legal obligations. ' ,
'For our legitimate interests, such as product improvement and security monitoring.'
    ]
  },
  {
    id: 4,
    title: 'How We Use Your Information',
    content:
      'Your data enables us to provide, personalise, and enhance your experience with MeMyselfI.ai. Specifically, we use it to: ',
    list: [
      'Deliver and maintain our platform and features.',
      'Communicate with you regarding updates, security alerts, and support. ',
      ' Improve AI accuracy, automate scheduling, and personalise suggestions. ',
      'Ensure compliance with applicable laws and prevent fraud or misuse. ',
      'Conduct research, analytics, and product development.'
    ]
  },
  {
    id: 5,
    title: 'Data Sharing and Disclosure',
    content:  'We do not sell your personal information. We may share data with trusted third-party service providers who assist in delivering our services—such as hosting partners, analytics tools, cloud storage providers, and payment processors—under strict confidentiality and data protection agreements. We may also disclose data if required by law, to protect our rights, or to prevent harm or fraud.'
  },
  {
    id: 6,
    title: 'Data Sharing and Disclosure',
    content:  'As a global platform, your data may be transferred to and processed in countries outside your own. Where international transfers occur, we use safeguards such as Standard Contractual Clauses and maintain compliance with GDPR, CCPA, and other applicable data protection frameworks.'
  }, 
  {
    id: 7,
    title: 'Automated Processing and AI Transparency',
    content:  'Some features of MeMyselfI.ai use artificial intelligence and automation to assist with scheduling, summarisation, or recommendations. These features are designed to enhance user convenience and do not make legally binding decisions. You may contact us for more details about how our AI systems operate and process your information.'
  }, 
  {
    id: 8,
    title: 'Children and Family Accounts',
    content:  'Our services are intended for general audiences but may include family account functionality. Child accounts must be created or managed by a parent or guardian. We do not knowingly collect personal data from children under 16 without verified parental consent. If you believe we have inadvertently collected such information, please contact us immediately.'
  },
    {
    id: 9,
    title: 'Data Retention',
    content:  'We retain personal data only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements. When data is no longer required, it is securely deleted, anonymised, or archived with restricted access.'
  },
    {
    id: 10,
    title: 'Cookies and Tracking Technologies',
    content:  'We use cookies and similar technologies to operate our website, personalise content, and analyse usage. You can manage or disable cookies through your browser settings, but doing so may limit certain features of the platform.'
  },
    {
    id: 11,
    title: 'Your Rights',
    content: '  Depending on your location, you may have rights under applicable privacy laws, including the right to: ',
    list: [
'  Access and obtain a copy of your personal data. ',
' Request correction or deletion of your data.',
'Object to or restrict processing. ' ,
'Withdraw consent at any time.',
'Data portability (receive your data in a transferable format).',
'To exercise these rights, please contact us using the details below.'
    ]
  },
  {
    id:12,
    title:"Data Security",
    content:'We use robust technical and organisational measures to protect your personal data from unauthorised access, alteration, disclosure, or destruction. These include encryption, access control, network security, and regular security audits. While we take every precaution, no system is entirely immune to risks, and we cannot guarantee absolute security.'
  },
  {
    id:13,
    title:'Updates to This Policy',
    content:'We may update this Privacy Policy periodically to reflect changes in technology, law, or our operations. The updated version will be posted on our website, and your continued use of our services constitutes acceptance of those changes.'
  },
    {
  id: 14,
  title: 'Contact Information',
  content: 'If you have questions, requests, or concerns about this Privacy Policy or your personal data, please contact us at:',
  gmail: 'support@memyselfi.ai ',
  subcontent:'We are committed to addressing privacy matters promptly and transparently.'
}
];

export default function PrivacyPolicy() {
  return (
    <section
      className="w-full min-h-screen px-6 mt-16 py-16"
      style={{ backgroundColor: 'var(--bg-bg)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm opacity-70">Me Myself | Pty Ltd</p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {privacyData.map((section) => (
            <div key={section.id} className="space-y-3">
              <h2 className="text-xl font-semibold">
                {section.id}. {section.title}
              </h2>

              {section.content && (
                <p className="text-sm leading-relaxed opacity-80">{section.content}</p>
              )}

              {section.gmail && (
                <p className="text-sm opacity-80">
                  Gmail: <a href={`mailto:${section.gmail}`} >{section.gmail}</a>
                </p>
              )}
              {section.subcontent && (
                <p className="text-sm leading-relaxed opacity-70 ">{section.subcontent}</p>
              )}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-sm opacity-80">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
