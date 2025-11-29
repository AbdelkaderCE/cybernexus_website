import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Terminal, Crown, Shield, Sparkles } from "lucide-react";
import ProfileCard from "@/components/team-section/ProfileCard";
import { team, TeamMember } from "@/data/team";

// import { teamData } from "./teamData";

interface MeetTheTeamPageProps {
  teamData: TeamMember[];
}

const MeetTheTeamPage: React.FC<MeetTheTeamPageProps> = ({ teamData }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  // Organize team by tier
  const founders = teamData.filter((m) => m.tier === "founder");
  const leaders = teamData.filter((m) => m.tier === "leader");
  const members = teamData.filter((m) => m.tier === "member");

  // Get unique departments
  const departments = [
    "all",
    ...new Set(members.map((m) => m.department).filter(Boolean)),
  ];

  // Filter members by department
  const filteredMembers =
    selectedDepartment === "all"
      ? members
      : members.filter((m) => m.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-6">
          <Badge
            variant="outline"
            className="border-primary/50 bg-background/80 backdrop-blur-sm px-4 py-2 font-mono text-sm"
          >
            <Terminal className="w-4 h-4 mr-2 inline" />
            &lt;TEAM_ROSTER&gt;
          </Badge>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-mono leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Meet The Team
            </span>
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-mono">
            <span className="text-primary">&gt;_</span> The brilliant minds
            powering CyberNexus
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-foreground/60 font-mono">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Click any card to reveal their story</span>
          </div>
        </div>

        {/* Founders Section */}
        {founders.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <Crown className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground">
                <span className="text-primary">//</span> Founders
              </h2>
              <Crown className="w-8 h-8 text-primary animate-pulse" />
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {founders.map((member) => (
                <ProfileCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialLinks={member.socialLinks}
                  backContent={member.backContent}
                  borderClass={member.borderClass}
                  bgGradientClass={member.bgGradientClass}
                  accentClass={member.accentClass}
                />
              ))}
            </div>
          </section>
        )}

        {/* Department Leaders */}
        {leaders.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground">
                <span className="text-primary">//</span> Department Leads
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {leaders.map((member) => (
                <ProfileCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialLinks={member.socialLinks}
                  backContent={member.backContent}
                  borderClass={member.borderClass}
                  bgGradientClass={member.bgGradientClass}
                  accentClass={member.accentClass}
                />
              ))}
            </div>
          </section>
        )}

        {/* Team Members with Department Filter */}
        {members.length > 0 && (
          <section className="space-y-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold font-mono text-foreground">
                  <span className="text-primary">//</span> Team Members
                </h2>
              </div>

              {/* Department Filter */}
              {departments.length > 1 && (
                <div className="flex flex-wrap justify-center gap-3">
                  {departments.map((dept) => (
                    <Button
                      key={dept}
                      variant={
                        selectedDepartment === dept ? "default" : "outline"
                      }
                      onClick={() => setSelectedDepartment(dept!)}
                      className="font-mono text-sm transition-all hover:scale-105"
                      size="sm"
                    >
                      {dept === "all" ? "All Members" : dept}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {filteredMembers.map((member) => (
                <ProfileCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialLinks={member.socialLinks}
                  backContent={member.backContent}
                  borderClass={member.borderClass}
                  bgGradientClass={member.bgGradientClass}
                  accentClass={member.accentClass}
                />
              ))}
            </div>
          </section>
        )}

        {/* Join CTA */}
        <section className="text-center py-16">
          <div className="max-w-3xl mx-auto space-y-6 p-8 sm:p-12 border-2 border-primary/30 rounded-3xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent relative overflow-hidden group">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative z-10">
              <div className="inline-block mb-4">
                <Badge
                  variant="outline"
                  className="border-primary/50 bg-primary/10 text-primary font-mono"
                >
                  <Terminal className="w-3 h-3 mr-2" />
                  RECRUITMENT OPEN
                </Badge>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black font-mono text-foreground mb-4">
                Want to <span className="text-primary">join us?</span>
              </h3>

              <p className="text-foreground/70 font-mono text-sm sm:text-base max-w-xl mx-auto mb-6">
                <span className="text-primary">&gt;_</span> We're always looking
                for passionate individuals to join the CyberNexus family.
                Whether you're a coder, designer, or innovator — there's a place
                for you here.
              </p>

              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-base sm:text-lg px-8 py-6 group/btn shadow-lg hover:shadow-primary/50 transition-all"
              >
                <Users className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                JOIN CYBERNEXUS
                <Terminal className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeetTheTeamPage;
