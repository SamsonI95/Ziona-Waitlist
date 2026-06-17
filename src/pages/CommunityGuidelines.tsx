import LegalDocumentPage, { type LegalSection } from "@/components/LegalDocumentPage";

const termsIntroContent = [
  "And the Light shineth in darkness; and the darkness comprehended it not.”  Gospel of John 1:5",
] as const;

const communityGuidelineSections: LegalSection[] = [
  {
    id: "our-foundation",
    title: "1. Our foundation",
    content: [
      "And the Light shineth in darkness; and the darkness comprehended it not.\" Gospel of John 1:5",
    ],
  },
  {
    id: "core-community-principles",
    title: "2. Core community Principles",
    content: [
      {
        intro: "We collect information in the following categories:",
        heading: "A. Share with Kindness and Respect",
        outro: "Treat others with dignity. Speak as if the person you are addressing is present with you.",
      },
      {
        intro: "Not allowed:",
        bullets: [
          "Insults",
          "Mockery",
          "Demeaning language",
          "Hostile engagement",
        ],
      },
      {
        heading: "B. Keep Content Faith-Aligned and Encouraging",
        intro: "Content should reflect Christian values such as:",
        bullets: [
          "Love",
          "Truth",
          "Grace",
          "Accountability",
          "Encouragement",
          "Humility",
        ],
        outro: "Not every post must be devotional, but it must not contradict the spirit of the faith.",
      },
      {
        heading: "C. Respect Diverse Perspectives Within the Faith",
        intro: "Ziona welcomes Christians across denominations.",
        bullets: [
          "Respectful theological discussion is allowed.",
          "Inter-denominational dialogue is allowed.",
          "Structured debate is allowed.",
          "Personal attacks are not allowed.",
        ],
        outro: "Disagree with ideas - never attack people.",
      },
      {
        heading: "D. No Politics (MVP Policy)",
        intro: "Ziona is not a political platform.\nThe following are not allowed:",
        bullets: [
          "Political campaigning",
          "Party promotion",
          "Election debates",
          "Government propaganda",
          "Political activism posts",
        ],
        outro: "Faith-based reflection is welcome. Political agendas are not.",
      },
      {
        heading: "E. No Spam or Excessive Self-Promotion",
        intro: "You may share:",
        bullets: [
          "Your testimony",
          "Your ministry work",
          "Your church event",
        ],
      },
      {
        intro: "However, the platform is not for:",
        bullets: [
          "Repetitive promotional posts",
          "Affiliate marketing",
          "Multi-level marketing",
          "Link dumping",
          "Engagement farming",
        ],
        outro: "Community over clout.",
      },
    ],
  },
  {
    id: "allowed-content-types",
    title: "3. Allowed content types",
    content: [
      "Ziona supports short-form video (60-180 seconds).\nPermitted content includes:",
      {
        bullets: [
          "Devotionals and reflections",
          "Personal testimonies (shared responsibly)",
          "Scripture explanations",
          "Christian lifestyle content",
          "Worship and creative expression",
          "Respectful theological discussion",
          "Mental health encouragement from a faith perspective",
          "Christian Comedy and Memes",
          "Christian Animated videos",
          "Christian Movies",
        ],
      },
    ],
  },
  {
    id: "prohibited-content",
    title: "4. Prohibited Content",
    content: [
      "The following is not allowed:",
      {
        heading: "Hate Speech or Harassment",
        intro: "Targeting any denomination, ethnicity, gender, or group.",
      },
      {
        heading: "Personal Attacks",
        intro: "Targeting any denomination, ethnicity, gender, or group.",
      },
      {
        heading: "Explicit Sexual Content",
        bullets: [
          "Nudity",
          "Graphic sexual descriptions",
          "Sexually suggestive material",
          "Gory or Graphic Content",
        ],
      },
      {
        heading: "Political Content",
        intro: "Campaigns, endorsements, activism, or party debates.",
      },
      {
        heading: "Misinformation",
        intro: "Deliberately misleading theological or factual claims.",
      },
      {
        heading: "Exploitation or Fraud",
        intro: "Scams, impersonation, financial manipulation.",
      },
    ],
  },
  {
    id: "sensitive-topics-allowed-with-care",
    title: "5. Sensitive Topics (Allowed with Care)",
    content: [
      "The following may be discussed responsibly:",
      {
        bullets: [
          "Sexuality struggles",
          "Addiction recovery",
          "Past sin testimonies",
          "Mental health challenges",
          "Spiritual warfare",
        ],
      },
      {
        intro: "However",
        bullets: [
          "No graphic detail",
          "No glorification of sin",
          "No shaming language",
          "No triggering descriptions",
        ],
        outro: "The purpose must always be restoration and encouragement.",
      },
    ],
  },
  {
    id: "moderation-and-enforcement",
    title: "6. Moderation and Enforcement",
    content: [
      "Ziona uses human-led moderation supported by reporting tools.",
      "We operate a Three-Strike System:",
      {
        heading: "Strike 1 - Warning",
        bullets: [
          "Content removal",
          "Formal notice",
        ],
      },
      {
        heading: "Strike 2 - Temporary Restriction",
        intro: "Temporary suspension from posting or commenting",
      },
      {
        heading: "Strike 3 - Account Suspension",
        intro: "Permanent account removal",
      },
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
    id: "reporting",
    title: "8. Reporting",
    content: [
      "If you encounter content that violates these guidelines:",
      {
        bullets: [
          "Use the in-app reporting feature",
          "Provide relevant context.",
        ],
      },
    ],
  },
  {
    id: "the-ziona-covenant",
    title: "9. The Ziona Covenant",
    content: [
      "By using Ziona, you agree to:",
      {
        bullets: [
          "Speak truth in love",
          "Encourage rather than tear down",
          "Protect the dignity of others",
          "Represent Christ faithfully in public interaction",
        ],
      },
      "Ziona is not just a content platform, It is a community.",
    ],
  },
];

const CommunityGuidelines = () => {
  return (
    <LegalDocumentPage
      title="Community guidelines"
      introContent={termsIntroContent}
      introClassName="text-xs leading-5 space-y-0.5"
      sections={communityGuidelineSections} />
  );
};

export default CommunityGuidelines;
