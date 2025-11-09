import ProfileCard from "./ProfileCard";

export default function TeamSection() {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-base-100 via-base-200/30 to-base-100 relative overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 w-full relative z-10">
        {/* Header */}
        <div
          className={`text-center space-y-3 transition-all duration-1000`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-base-content">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
               Team
            </span>
          </h2>

          <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Explore cutting-edge projects by our{" "}
            <span className="text-primary font-semibold">Nexians</span>{" "}
            community
          </p>
        </div>

        {/* Team Cards */}
        <div className="flex items-center justify-center gap-3">
            <ProfileCard /> 
        </div>
      </div> 
    </section>
  );
}
