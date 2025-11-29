import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Terminal } from "lucide-react";
import CyberCard from "../ui/CyberCard";

// Team photos for the carousel
const teamPhotos = [
  "/team-photo-1.jpg",
  "/team-photo-2.jpg",
  "/team-photo-3.jpg",
  "/team-photo-4.jpg",
  "/team-photo-5.jpg",
];

const TeamSection: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Auto-rotate photos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % teamPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMeetTeam = () => {
    // Navigate to team page
    window.location.href = "/meet-the-team";
  };

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Badge */}
        <div className="text-center">
          <Badge
            variant="outline"
            className="border-primary/50 bg-background/80 backdrop-blur-sm px-4 py-2 font-mono"
          >
            <Terminal className="w-4 h-4 mr-2 inline" />
            &lt;OUR_TEAM&gt;
          </Badge>
        </div>

        {/* Main Content: Image + Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <CyberCard variant="hologram">
            <div className="relative aspect-[4/3] w-full">
              <img
                src="/team-main-picture.jpg"
                alt="CyberNexus Team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating badge on image */}
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-primary text-primary-foreground font-mono">
                  <Users className="w-4 h-4 mr-2" />
                  CyberNexus Team
                </Badge>
              </div>
            </div>
          </CyberCard>

          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground font-mono leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                We Are
              </span>
              <br />
              CyberNexus
            </h2>

            <div className="space-y-4 text-foreground/80 text-lg">
              <p className="leading-relaxed">
                A passionate community of{" "}
                <span className="text-primary font-semibold">students</span>,{" "}
                <span className="text-primary font-semibold">developers</span>,
                and{" "}
                <span className="text-primary font-semibold">innovators</span>{" "}
                at Ibn Khaldoun University.
              </p>

              <p className="leading-relaxed font-mono text-base border-l-2 border-primary pl-4">
                <span className="text-primary">&gt;_</span> We build, we learn,
                we grow together. From beginner coders to tech veterans,
                everyone has a place in our nexus.
              </p>

              <p className="leading-relaxed">
                Join us as we embark on this journey to create, innovate, and
                push the boundaries of what's possible in tech.{" "}
                <span className="text-primary font-semibold">
                  The future starts here.
                </span>
              </p>
            </div>

            {/* Meet Team Button */}
            <Button
              size="lg"
              onClick={handleMeetTeam}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-lg px-8 py-6 mt-6"
            >
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              MEET THE TEAM
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Photo Carousel */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-foreground font-mono">
            <span className="text-primary">//</span> Moments From Our Journey
          </h3>

          {/* Carousel Container */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            {teamPhotos.map((photo, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: index === currentPhotoIndex ? 1 : 0,
                }}
              >
                <img
                  src={photo}
                  alt={`Team moment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
