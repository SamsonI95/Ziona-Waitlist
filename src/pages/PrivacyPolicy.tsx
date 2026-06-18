import LegalDocumentPage, { type LegalSection } from "@/components/LegalDocumentPage";

const privacySections: LegalSection[] = [
    {
        id: "who-we-are",
        title: "1. Who We Are",
        content: [
            "Ziona is a faith-based social platform designed for users aged 13 and older to create, share, and engage with short-form video content in a values-aligned community.",
            "Ziona is operated by:",
            "ZionKing LLC\nUnited States\nEmail: support@ziona.app",
        ],
    },
    {
        id: "information-we-collect",
        title: "2. Eligibility – 13+ Only",
        content: [
            "Ziona is intended for individuals 13 years of age or older. During registration, users must provide their date of birth. Accounts belonging to individuals under the age of 13 are not permitted and will be refused or removed.<br/>We do not knowingly collect personal information from children under 13."
        ],
    },
    {
        id: "how-we-use-information",
        title: "3. Information We Collect",
        content: [
            "We collect information in the following categories:",
            {
                heading: "A. Information You Provide",
                intro: "When you create an account or use the Service, we may collect:",
                bullets: [
                    "Email address",
                    "First and last name (if provided)",
                    "Date of birth",
                    "Username",
                    "Profile photo",
                    "Bio",
                    "Video content you upload",
                    "Comments and engagement activity",
                    "Reports you submit",
                    "Communication sent to us",
                ],
            },
            {
                heading: "B. Public Profile Information",
                intro: "The following information is visible to other users:",
                bullets: [
                    "Username",
                    "Profile photo",
                    "Bio",
                    "Posted videos",
                    "Follower and following lists",
                    "Posts you have liked",
                    "The number of saves your posts receive",
                ],
                outro: "While other users can see that a post has been saved, they cannot see who saved it.",
            },
            {
                heading: "C. Authentication Information",
                intro: "If you register using Google Sign-In, we receive basic profile information associated with your Google account as authorized by you.",
            },
            {
                heading: "D. Usage Information",
                intro: "We automatically collect certain technical information, such as:",
                bullets: [
                    "Device type",
                    "Operating system",
                    "App version",
                    "Log data",
                    "Crash reports",
                    "Interaction data (likes, comments, saves, viewing activity)",
                ],
                outro: "This information helps us improve performance, security, and user experience.",
            },
        ],
    },
    {
        id: "sharing-and-disclosure",
        title: "4. How We Use Your Information",
        content: [
            "We use collected information to:",
            {
                bullets: [
                    "Create and manage user accounts",
                    "Provide and operate the platform",
                    "Display public profiles and content",
                    "Enable engagement features (likes, comments, saves)",
                    "Maintain community safety and enforce guidelines",
                    "Detect abuse, fraud, and violations",
                    "Improve app performance and features",
                    "Respond to support inquiries",
                    "Comply with legal obligations",
                ]
            },
            "We do not sell your personal information."
        ],
    },
    {
        id: "your-rights-and-choices",
        title: "5. Analytics &amp; Tracking",
        content: [
            "Ziona uses internal analytics and performance monitoring tools to understand user engagement, improve features, and maintain reliability",
            "We do not use third-party advertising networks in the current version of the Service.",
            "If advertising or additional tracking tools are introduced in the future, this Privacy Policy will be updated accordingly."
        ],
    },
    {
        id: "updates-to-policy",
        title: "6. Content and Data Retention",
        content: [
            "You may delete your content at any time (feature rollout dependent). When deleted:",
            {
                bullets: [
                    "Content is removed from public visibility.",
                    "Associated data is permanently deleted from active systems, except where retention is required for legal, security, or abuse-prevention purposes."
                ],
            },

            "If you delete your account:",
            {
                bullets: [
                    "Your personal information and profile data are permanently deleted from active systems.",
                    "Certain records may be retained for limited periods if required for security, fraud prevention, or legal compliance."
                ]
            }
        ],
    },
    {
        id: "community-safety-and-enforcement",
        title: "7. Community Safety &amp; Enforcement",
        content: [
            "We may review user activity and content to enforce community guidelines and protect the integrity of the platform.",
            "We may suspend or terminate accounts that violate our policies."
        ]
    },
    {
        id: "data-sharing",
        title: "8. Data Sharing",
        content: [
            "We may share information:",
            {
                bullets: [
                    "With service providers who help operate the platform (hosting, authentication, analytics, error monitoring)",
                    "If required by law or legal process",
                    "To protect the rights, safety, or property of Ziona, our users, or others",
                    "In connection with a merger, acquisition, or asset sale"
                ]
            },
            "We do not sell personal data to third parties."
        ]
    },
    {
        id: "data-security",
        title: "9. Data Security",
        content: [
            "We implement appropriate administrative, technical, and organizational safeguards designed to protect your information.",
            "However, no system is completely secure, and we cannot guarantee absolute security."
        ]
    },
    {
        id: "california-privacy-rights",
        title: "10. California Privacy Rights (CalOPPA & CCPA Notice)",
        content: [
            "If you are a California resident, you may have rights under applicable California privacy laws, including the right to:",
            {
                bullets: [
                    "Request access to personal information we hold about you",
                    "Request deletion of your personal information",
                    "Request information about how we collect and use your data",
                ]
            },
            "To exercise these rights, contact us at:\nsupport@ziona.app\nWe do not sell personal information.",
        ]
    },
    {
        id: "international-users",
        title: "11. International Users",
        content: [
            "Although Ziona is launched in the United States, users from other countries may access the Service.",
            "By using Ziona, you understand that your information may be processed and stored in the United States."
        ]
    },
    {
        id: "changes-to-this-policy",
        title: "12. Changes to This Policy",
        content: [
            "We may update this Privacy Policy from time to time.",
            "If we make material changes, we will notify users through the app or update the effective date above.",
            "Continued use of the Service after changes become effective constitutes acceptance of the updated policy."
        ]
    },
    {
        id: "contact-us",
        title: "13. Contact Us",
        content: [
            "If you have questions about this Privacy Policy, you may contact:",
            {
                intro: "ZionKing LLC\nEmail:support@ziona.app",
                emphasized: true,
            }
        ]
    },
] as const;

const PrivacyPolicy = () => {
    return <LegalDocumentPage title="Privacy policy" sections={privacySections} />;
};

export default PrivacyPolicy;
