import LegalDocumentPage, { type LegalSection } from "@/components/LegalDocumentPage";

const termsIntroContent = [
  "These Terms of Use (\"Terms\") govern your access to and use of the Ziona mobile application and related services (the \"Service\").",
  "Ziona is owned and operated by ZionKing LLC (\"Ziona,\" \"we,\" \"us,\" or \"our\").",
  "By creating an account or using the Service, you agree to be bound by these Terms.",
] as const;

const termsSections: LegalSection[] = [
  {
    id: "eligibility-13-plus-only",
    title: "1. Eligibility – 13+ Only",
    content: [
      "Ziona is available only to individuals who are 13 years of age or older.",
      {
        bullets: [
          "You are at least 13 years old",
          "The information you provide is accurate",
          "You will comply with these Terms",
        ],
      },
      "Accounts of users under 13 will be removed.",
    ],
  },
  {
    id: "account-registration",
    title: "2. Account registration",
    content: [
      "To use Ziona, you must create an account.",
      "You agree to:",
      {
        bullets: [
          "Provide accurate information",
          "Maintain the security of your account",
          "Notify us of unauthorized use",
        ],
      },
      "You are responsible for activity under your account.",
    ],
  },
  {
    id: "user-content-and-ownership",
    title: "3. User content and ownership",
    content: [
      "You retain ownership of any videos, comments, or other content you post (\"User Content\"). However, by posting content on Ziona, you grant ZionKing LLC a:",
      "Non-exclusive, worldwide, royalty-free, sublicensable, transferable license to use, host, store, reproduce, modify, adapt, publish, distribute, display, and promote your User Content for the purpose of operating, improving, and promoting the Service.",
      "This license ends when your content is deleted from the platform, except where retention is required for legal or safety reasons.",
    ],
  },
  {
    id: "public-nature-of-the-platform",
    title: "4. Public nature of the platform",
    content: [
      "Ziona is a public social platform.",
      "The following information may be publicly visible:",
      {
        bullets: [
          "Username",
          "Profile photo",
          "Bio",
          "Posted videos",
          "Follower/following lists",
          "Liked posts",
          "Number of saves on posts",
        ],
      },
      "You understand that content you post may be viewed, shared, or interacted with by other users.",
    ],
  },
  {
    id: "community-guidelines-and-conduct",
    title: "5. Community guidelines and conduct",
    content: [
      "You agree not to:",
      {
        bullets: [
          "Post unlawful, abusive, hateful, or harmful content",
          "Harass or threaten other users",
          "Impersonate others",
          "Upload content you do not have rights to",
          "Attempt to disrupt or interfere with the Service",
        ],
      },
      "Ziona reserves the right to remove content or suspend accounts that violate our guidelines.",
    ],
  },
  {
    id: "suspension-and-termination",
    title: "6. Suspension and termination",
    content: [
      "We may suspend or terminate your account if you violate these Terms or our community standards.",
      "If you believe your account was suspended in error, you may contact:",
      "support@ziona.app",
      "Ziona reserves the right to make final decisions regarding enforcement",
    ],
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual property",
    content: [
      "All platform design, logos, trademarks, software, and branding related to Ziona are owned by ZionKing LLC.",
      "You may not copy, modify, distribute, or exploit any part of the Service without permission.",
    ],
  },
  {
    id: "no-guarantee-of-service",
    title: "8. No guarantee of service",
    content: [
      "The Service is provided \"as is\" and \"as available.\"",
      "We do not guarantee:",
      {
        bullets: [
          "Continuous availability",
          "Error-free operation",
          "That content will always be preserved",
          "That the Service will meet your expectations",
        ],
      },
      "We may modify or discontinue features at any time.",
    ],
  },
  {
    id: "disclaimer-of-warranties",
    title: "9. Disclaimer of warranties",
    content: [
      "To the fullest extent permitted by law, Ziona disclaims all warranties, express or implied, including:",
      {
        bullets: [
          "Merchantability",
          "Fitness for a particular purpose",
          "Non-infringement",
        ],
      },
      "Use of the Service is at your own risk.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "10. Limitation of liability",
    content: [
      "To the maximum extent permitted by law:",
      "ZionKing LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
      "In all cases, our total liability shall not exceed: The greater of $100 USD or the amount you paid to Ziona in the past 12 months.",
      "Since the current version of the Service is free, liability will generally be limited to $100 USD.",
    ],
  },
  {
    id: "indemnification",
    title: "11. Indemnification",
    content: [
      "You agree to indemnify and hold harmless ZionKing LLC from any claims, damages, liabilities, or expenses arising from:",
      {
        bullets: [
          "Your use of the Service",
          "Your violation of these Terms",
          "Your User Content",
        ],
      },
    ],
  },
  {
    id: "dispute-resolution-binding-arbitration",
    title: "12. Dispute resolution - Binding Arbitration",
    content: [
      "We may update this Privacy Policy from time to time.",
      "Any dispute arising from these Terms or your use of the Service shall be resolved through binding arbitration, rather than in court, except where prohibited by law.",
      "Arbitration will be conducted on an individual basis",
    ],
  },
  {
    id: "class-action-waiver",
    title: "13. Class action waiver",
    content: [
      "You agree that:",
      "Any disputes will be resolved individually and not as part of a class action, consolidated action, or representative proceeding.",
      "You waive the right to participate in a class action lawsuit against ZionKing LLC.",
    ],
  },
  {
    id: "governing-law",
    title: "14. Governing Law",
    content: [
      "These Terms shall be governed by the laws of the State of Maryland, without regard to conflict of law principles.",
    ],
  },
  {
    id: "changes-to-these-terms",
    title: "15. Changes to these terms",
    content: [
      "We may update these Terms from time to time. If we make material changes, we will notify users through the app or update the effective date.",
      "Continued use of the Service constitutes acceptance of the updated Terms.",
    ],
  },
  {
    id: "contact-information",
    title: "16. Contact information",
    content: [
      "If you have questions about this Terms of use, you may contact:",
      {
        intro: "ZionKing LLC\nEmail: support@ziona.app",
        emphasized: true,
      },
    ],
  },
];

const TermsOfService = () => {
  return (
    <LegalDocumentPage
      title="Terms of service"
      introContent={termsIntroContent}
      introClassName="text-xs leading-5 space-y-0.5"
      sections={termsSections}
    />
  );
};

export default TermsOfService;
