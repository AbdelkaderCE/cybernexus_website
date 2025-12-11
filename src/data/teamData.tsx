import { Department, DepartmentRole, TeamMember } from "../types/team.types";

export const departments: Department[] = [
  {
    id: "leadership",
    name: "Club Leadership",
    description: "Overall club management and strategic direction",
    icon: "Crown",
  },
  {
    id: "hr",
    name: "Human Resources",
    description: "Member management and HR operations",
    icon: "Users",
  },
  {
    id: "external", name: "External Relations",
    description: "Managing external partnerships and relationships",
    icon: "Handshake",
  },
  {
    id: "treasury",
    name: "Treasury",
    description: "Financial management and budgeting",
    icon: "Wallet",
  },
  {
    id: "media",
    name: "Media & Content",
    description: "Content creation, photography, and media production",
    icon: "Camera",
  },
  {
    id: "development",
    name: "Development",
    description: "Technical development and web applications",
    icon: "Code",
  },
  {
    id: "design",
    name: "Design & Branding",
    description: "Visual design, UI/UX, and brand identity",
    icon: "Palette",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sabrine",
    image: "/images/team/sabrine-image-front.png",
    socialLinks: [],
    grade: "M1-NET",
    bio: "Leading CyberNexus with vision and design excellence",
    departmentRoles: [
      { departmentId: "leadership", role: "Club Leader", isLead: true },
      { departmentId: "design", role: "Design Lead", isLead: false },
      {
        departmentId: "external",
        role: "External Relations",
        isLead: false,
      },
    ],
  },
  {
    id: 2,
    name: "Sofiane",
    image: "/images/team/sofiane-image-front.jpg",
    socialLinks: [],
    grade: "M1-AID",
    bio: "Driving media strategy and club operations",
    departmentRoles: [
      { departmentId: "leadership", role: "Co-Leader", isLead: true },
      { departmentId: "media", role: "Media Lead", isLead: true },
    ],
  },
  {
    id: 3,
    name: "Tounsi Abd Essamed",
    image: "/images/team/tounssi-image-front.jpg",
    bio: "Belive in your self 🫶🏻",
    grade: "M1-AID",
    socialLinks: [
      {
        icon: "Globe",
        href: "https://port-folio-hvbi.vercel.app/",
        label: "Portfolio",
      },
      { icon: "Mail", href: "mailto:mcboosabdo@gmail.com", label: "Email" },
    ],
    departmentRoles: [
      { departmentId: "leadership", role: "General Secretary" },
      { departmentId: "media", role: "Content Creator" },
    ],
  },
  {
    id: 4,
    name: "Gaza. Aya.",
    image: "/images/team/aya-image-front.png",
    bio: "حينمـــا تلتــــــقي الكلمـــــــــة بألـــــف حـرف",
    socialLinks: [],
    departmentRoles: [
      { departmentId: "media", role: "Club Writer" },
      { departmentId: "hr", role: "Member" },
    ],
  },
  {
    id: 5,
    name: "Soltana",
    image: "/images/team/soltana-iamge-front.png",
    grade: "L1-Droit",
    socialLinks: [],
    departmentRoles: [{ departmentId: "hr", role: "Legal Advisor" }],
  },
  {
    id: 6,
    name: "Benghanem Riad",
    image: "/images/team/riad-image-front.png",
    bio: "Just chill 🦦",
    grade: "M!-GL",
    socialLinks: [
      {
        icon: "Mail",
        href: "mailto:achrafriadh123456@gmail.com",
        label: "Email",
      },
    ],
    departmentRoles: [{ departmentId: "hr", role: "HR Lead", isLead: false }],
  },
  {
    id: 7,
    name: "MATELA Abdelhafid",
    image: "/images/team/hafid-image-front.png",
    grade: "L3-SI",
    socialLinks: [],
    departmentRoles: [
      { departmentId: "hr", role: "leadership", isLead: true },
      { departmentId: "development", role: "Developer" },
    ],
  },
  {
    id: 8,
    name: "Moussa Ahlem",
    image: "/images/team/ahlem-image-front.png",
    bio: "Passion for people, dedication to excellence.",
    grade: "L3-SI",
    socialLinks: [
      { icon: "Send", href: "https://t.me/+213555865385", label: "Telegram" },
    ],
    departmentRoles: [{ departmentId: "hr", role: "HR Team Member" }],
  },
  {
    id: 9,
    name: "Bedoui Denia",
    image: "/images/team/wissam-image-front.png",
    grade: "L3-SI",
    bio: "Layers in the gaps.",
    socialLinks: [
      { icon: "Github", href: "https://github.com/wssmei", label: "GitHub" },
      {
        icon: "Linkedin",
        href: "https://www.linkedin.com/in/deniabedoui/",
        label: "LinkedIn",
      },
      {
        icon: "Globe",
        href: "https://www.behance.net/deniabd",
        label: "Behance",
      },
    ],
    departmentRoles: [
      { departmentId: "hr", role: "HR Team Member" },
      { departmentId: "design", role: "Designer" },
    ],
  },
  {
    id: 10,
    name: "Benzarfa Rania Manel",
    grade: "M1-AID",
    image: "/images/team/rania-image-front.png",
    socialLinks: [],
    departmentRoles: [{ departmentId: "hr", role: "HR Co-Leader", isLead: true }],
  },
  {
    id: 11,
    name: "Farah",
    grade: "M1-NET",
    bio: "Navigating the digital cosmos 🌸👩🏻‍💻",
    image: "/images/team/farah-image-front.png",
    socialLinks: [

    ],
    departmentRoles: [
      { departmentId: "design", role: "Designer" },
      { departmentId: "media", role: "Content Creator" },
    ],
  },
  {
    id: 12,
    name: "Rafika Rohdea",
    image: "/images/team/rafika-image-front.png",
    grade: "L2",
    bio: "Embodiment of ideas into an unforgettable reality.",
    socialLinks: [
      {
        icon: "Github",
        href: "https://github.com/rafikarohdea",
        label: "Github",
      },
    ],
    departmentRoles: [{ departmentId: "hr", role: "HR Team Member" }],
  },
  {
    id: 27,
    name: "Fatah",
    image: "/images/team/fatah-image-front.png",
    grade: "L3-ISIL",
    bio: "Try to show your best, not what others deem the best",
    socialLinks: [],
    departmentRoles: [{ departmentId: "hr", role: "HR Team Member" }],
  },
  {
    id: 13,
    name: "Mendjour Lounis",
    image: "/images/team/lounis-image-front.png",
    grade: "M1-GL",
    socialLinks: [
      {
        icon: "Globe",
        href: "https://www.instagram.com/mendjour.lounis",
        label: "Instagram",
      },
    ],
    departmentRoles: [
      {
        departmentId: "external",
        role: "External Relations Lead",
        isLead: true,
      },
    ],
  },
  {
    id: 14,
    name: "Hadjadj Kawther",
    image: "/images/team/kawther-image-front.jpg",
    grade: "M1-GI",
    socialLinks: [],
    departmentRoles: [
      { departmentId: "treasury", role: "Treasurer", isLead: true },
      { departmentId: "hr", role: "Student Performance Coordinator" },
    ],
  },
  {
    id: 15,
    name: "Samira Mostefaoui",
    image: "/images/team/samira-image-front.JPG",
    grade: "L3-SI",
    socialLinks: [
      { icon: "LinkedIn", href: "https://www.linkedin.com/in/mostefaoui-samira-77174b393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
      { icon: "Instagram", href: "https://www.instagram.com/sam_lens_?igsh=N3NwaXV5amI2dmVh&utm_source=qr", label: "Instagram" },
    ],
    departmentRoles: [{ departmentId: "media", role: "Photographer" }],
  },
  {
    id: 16,
    name: "Chikhaoui Ahmed",
    image: "/images/team/chikhaoui-image-front.png",
    grade: "M1-NET",
    bio: "._.",
    socialLinks: [
      { icon: "Github", href: "https://github.com/mrahmed14", label: "GitHub" },
      { icon: "Globe", href: "https://www.mrahmed.org/", label: "Portfolio" },
    ],
    departmentRoles: [
      { departmentId: "media", role: "Photographer" },
      { departmentId: "design", role: "Designer", isLead: true },
      { departmentId: "development", role: "Developer" },
    ],
  },
  {
    id: 17,
    name: "Kamel",
    grade: "M1-GL",
    image: "/images/team/kamel-image-front.png",
    socialLinks: [],
    departmentRoles: [
      { departmentId: "media", role: "Media Member" },
      { departmentId: "development", role: "Developer" },
    ],
  },
  {
    id: 18,
    name: "Mohamed Reggad",
    image: "/images/team/reggad-image-front.png",
    grade: "L1",
    bio: "Here for anything related to spreading benefit",
    socialLinks: [],
    departmentRoles: [{ departmentId: "media", role: "Video Editor" }],
  },
  {
    id: 19,
    name: "Hakim Ait Abderrahim",
    grade: "M2-GL",
    image: "/images/team/hakim-image-front.jpg",
    socialLinks: [],
    departmentRoles: [
      { departmentId: "development", role: "Lead Developer", isLead: true },
    ],
  },
  {
    id: 20,
    name: "Mlsvmdl",
    image: "/images/team/mlsvmdl-image-front.jpg",
    bio: "☀️ Chich Loves Poppo ☀️",
    socialLinks: [
      { icon: "Github", href: "https://github.com/mlsvmdl", label: "GitHub" },
    ],

    departmentRoles: [
      { departmentId: "development", role: "Developer", isLead: false },
    ],
  },
  {
    id: 21,
    name: "Nadji",
    grade: "L3-SI",
    image: "/images/team/nadji-image-front.png",
    socialLinks: [],
    departmentRoles: [{ departmentId: "development", role: "Developer" }],
  },
  {
    id: 22,
    name: "Missoum Hadi Adda",
    grade: "L3-SI",
    image: "/images/team/adda-image-front.jpg",
    socialLinks: [],
    departmentRoles: [{ departmentId: "development", role: "Developer" }],
  },
  {
    id: 23,
    name: "Adam Rhmni",
    grade: "L1",
    image: "/images/team/adam-image-front.jpg",
    socialLinks: [],
    departmentRoles: [{ departmentId: "development", role: "Developer" }],
  },
  {
    id: 24,
    name: "Bousbia Mouhhamed Bachir",
    grade: "M1-GL",
    image: "/images/team/bachir-iamge-front.jpg",
    socialLinks: [],
    departmentRoles: [{ departmentId: "development", role: "Developer" }],
  },
  {
    id: 25,
    name: "Noureddine Yahia",
    image: "/images/team/noureddine-image-front.jpg",
    grade: "M1-GL",
    bio: "Coding my way to better solution",
    socialLinks: [
      { icon: "Github", href: "https://github.com/Yahia47", label: "GitHub" },
      {
        icon: "Linkedin",
        href: "https://www.linkedin.com/in/merdjet-yahia-noureddine-510a94255 /",
        label: "LinkedIn",
      },
    ],
    departmentRoles: [{ departmentId: "development", role: "Developer" }],
  },
  {
    id: 26,
    name: "Amine",
    image: "/images/team/amine-image-front.jpg",
    grade: "M1-GL",
    socialLinks: [],
    departmentRoles: [{ departmentId: "development", role: "Developer" }],
  },
];

// Helper function to get members by department with their specific role
export const getMembersByDepartment = (
  departmentId: string,
): Array<
  TeamMember & { roleInDepartment: string; isLeadInDepartment: boolean }
> => {
  return teamMembers
    .filter((member: TeamMember): boolean =>
      member.departmentRoles.some((dr: DepartmentRole): boolean => dr.departmentId === departmentId),
    )
    .map((member: TeamMember) => {
      const deptRole = member.departmentRoles.find(
        (dr: DepartmentRole): boolean => dr.departmentId === departmentId,
      )!;
      return {
        ...member,
        roleInDepartment: deptRole.role,
        isLeadInDepartment: deptRole.isLead || false,
      };
    });
};

export const getDepartmentLead = (
  departmentId: string,
): (TeamMember & { roleInDepartment: string }) | undefined => {
  const member = teamMembers.find((m: TeamMember): boolean =>
    m.departmentRoles.some(
      (dr: DepartmentRole) => dr.departmentId === departmentId && dr.isLead,
    ),
  );

  if (!member) return undefined;

  const deptRole = member.departmentRoles.find(
    (dr: DepartmentRole) => dr.departmentId === departmentId,
  )!;

  return {
    ...member,
    roleInDepartment: deptRole.role,
  };
};
