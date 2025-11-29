export interface SocialLink {
  icon: string; 
  label: string;
  href: string;
}

export interface Department {
  id: number;
  name: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string; // photography, social media, etc...
  image: string;
  socialLinks: SocialLink[];
}

export interface TeamStructure {
  team: TeamMember[];
  departments: Department[];
}

export const teamStructure: TeamStructure = {
  departments: [
    {
      id: 1,
      name: "Human Resources",
      description: "The Human Resources Department helps manage members, supports team communication, and makes sure everyone works well together.",
    }
  ],
  team:[
  {
    id: 2,
    name: "Ait Said Abdelkarim",
    role: "Network Specialist",
    image: "said-image-front.png",
    tier: "member",
    socialLinks: [
      {
        icon: "Mail",
        label: "Email",
        href: "mailto:aitsaidabdelkarim1@gmail.com",
      },
      {
        icon: "Github",
        label: "GitHub",
        href: "https://github.com/AitSaid-Abdelkarim",
      },
    ],
  },
  {
    id: 4,
    name: "Benzarfa Rania Manel",
    role: "HR",
    image: "rania-image-front.png",
    tier: "member",
    department: "Human Resources",
    socialLinks: [
      {
        icon: "Mail",
        label: "Email",
        href: "mailto:rania.benzarfa@example.com",
      },
    ],
  },
  {
    id: 1,
    name: "Aziz Ben",
    role: "Student",
    image: "aziz-image-front.jpg",
    tier: "member",
    socialLinks: [
      {
        icon: "Globe",
        label: "Portfolio",
        href: "https://abdelazizbenallou.github.io/Personel_Profilio/",
      },
    ],
  },
  {
    id: 2,
    name: "Kamel",
    role: "Content Creator",
    image: "/kamel-image-front.png",
    tier: "member",
    socialLinks: [
      { icon: "Mail", label: "Email", href: "mailto:Kamel.mutig14@gmail.com" },
      {
        icon: "Globe",
        label: "Portfolio",
        href: "https://portfolio-78b26d2ur-kamelabas-projects.vercel.app/",
      },
    ],
  },
  {
    id: 11,
    name: "Farah",
    role: "Content Creator",
    image: "/farah-image-front.png",
    tier: "member",
    socialLinks: [
      {
        icon: "Linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
      },
      {
        icon: "Github",
        label: "GitHub",
        href: "https://github.com/FarahTechOdyssey",
      },
    ],
  },
  {
    id: 14,
    name: "Hadjadj Kawther",
    role: "Treasurer",
    image: "kawther-front-image.png",
    tier: "member",
    socialLinks: [
      { icon: "Mail", label: "Email", href: "mailto:kawther.had47@gmail.com" },
    ],
  },
  {
    id: 3,
    name: "Hakim Ait Abderrahim",
    role: "Developer",
    image: "/Hakim.jpg",
    tier: "member",
    socialLinks: [
      {
        icon: "Mail",
        label: "Email",
        href: "mailto:Hakimaitabderrahim18@gmail.com",
      },
      {
        icon: "Globe",
        label: "Portfolio",
        href: "https://66ee86e5f20b6d1656809790--preeminent-shortbread-6639a5.netlify.app/",
      },
    ],
  },
  {
    id: 4,
    name: "OULD Hocine Sofiane",
    role: "Student",
    image: "/Sofiane.jpg",
    tier: "member",
    socialLinks: [
      { icon: "Mail", label: "Email", href: "mailto:sofiane2017old@gmail.com" },
      {
        icon: "Globe",
        label: "Portfolio",
        href: "https://dex17oh.github.io/dex17oh/",
      },
    ],
  },
  {
    id: 5,
    name: "Matela Abdelhafid",
    role: "Student",
    image: "/matela-image-front.png",
    tier: "member",
    socialLinks: [
      { icon: "Mail", label: "Email", href: "mailto:abdou26072001@gmail.com" },
      { icon: "Github", label: "GitHub", href: "https://github.com/hafid2001" },
    ],
  },
  {
    id: 9,
    name: "Sabrine Boughrab",
    role: "Club Owner & Leader",
    image: "/sabrin-image-front.png",
    tier: "leader",
    socialLinks: [
      {
        icon: "Mail",
        label: "Email",
        href: "mailto:sabrineboughrab@gmail.com",
      },
    ],
  },
  {
    id: 6,
    name: "mlsvmdl",
    role: "Developer",
    image: "/mlsvmdl-image-front.jpg",
    tier: "member",
    socialLinks: [
      { icon: "Github", label: "GitHub", href: "https://github.com/mlsvmdl" },
    ],
  },
  {
    id: 7,
    name: "Missoum Hadi Adda",
    role: "Student",
    image: "/Adda.jpg",
    tier: "member",
    socialLinks: [
      { icon: "Mail", label: "Email", href: "mailto:addajs48@gmail.com" },
      {
        icon: "Globe",
        label: "Portfolio",
        href: "https://addahadi.github.io/Portofolio/",
      },
    ],
  },
  {
    id: 8,
    name: "Bousbia Mouhhamed Bachir",
    role: "Student / Developer",
    image: "/Bachir.jpg",
    tier: "member",
    socialLinks: [
      {
        icon: "Mail",
        label: "Email",
        href: "mailto:bousbiamouhamedbachir@gmail.com",
      },
      {
        icon: "Github",
        label: "GitHub",
        href: "https://github.com/bousbiamouhamedbachir",
      },
    ],
  },
  {
    id: 10,
    name: "Bedoui Denia",
    role: "Designer + HR",
    image: "/denia-image-front.png",
    tier: "member",
    socialLinks: [
      { icon: "Mail", label: "Email", href: "mailto:bedouidenia25@gmail.com" },
    ],
  },
  {
    id: 11,
    name: "Amine Beridja",
    role: "Student + Developer",
    image: "/Amine.jpg",
    tier: "member",
    socialLinks: [
      {
        icon: "Mail",
        label: "Email",
        href: "mailto:aminemohamed0142@gmail.com",
      },
    ],
  },
  {
    id: 12,
    name: "Tounssi Abdessamed",
    role: "Student",
    image: "/Tounssi.jpg",
    tier: "member",
    socialLinks: [
      { icon: "Mail", label: "Email", href: "mailto:mcboosabdo@gmail.com" },
      {
        icon: "Github",
        label: "GitHub",
        href: "https://port-folio-hvbi.vercel.app/",
      },
    ],
  },
];
}