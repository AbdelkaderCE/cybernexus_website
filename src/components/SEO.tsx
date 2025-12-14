import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  author?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "CyberNexus - Innovation, Community, Technology",
  description = "Join CyberNexus, the leading technology club at Ibn Khaldoun University. We foster innovation, collaboration, and learning in tech through workshops, hackathons, and projects.",
  image = "/images/og-image.jpg",
  url = "https://cybernexus.vercel.app",
  keywords = "cybernexus, tech club, programming, innovation, hackathon, Ibn Khaldoun University, technology, coding, web development, AI, cybersecurity",
  author = "CyberNexus Team",
  type = "website",
}) => {
  const fullTitle = title.includes("CyberNexus") ? title : `${title} | CyberNexus`;
  const fullUrl = url.startsWith("http") ? url : `https://cybernexus.vercel.app${url}`;
  const fullImage = image.startsWith("http") ? image : `https://cybernexus.vercel.app${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="CyberNexus" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@cybernexusdz" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00d9ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
