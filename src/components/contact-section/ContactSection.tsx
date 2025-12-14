import { useState, useCallback, useMemo, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Mail, MapPin, Send, Terminal, Code2, Zap, Copy, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import CyberCard from "../ui/CyberCard";
import { useCyberScrollAnimation } from "@/hooks/useCyberScrollAnimation";

interface FormData {
  email: string;
  message: string;
}

interface FormErrors {
  email: string;
  message: string;
}

type SubmitStatus = "success" | "error" | null;
type SystemStatusType = "warning" | "success";

const StatusIndicator: React.FC<{
  label: string;
  value: string;
  type: "success" | "warning" | "primary";
}> = ({ label, value, type }) => {
  const colorMap = {
    success: "bg-green-500/10 border-green-500/30 text-green-400",
    warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    primary: "bg-primary/10 border-primary/30 text-primary",
  };

  return (
    <Badge
      variant="outline"
      className={`${colorMap[type]} font-mono uppercase tracking-wide`}
    >
      {label}: {value}
    </Badge>
  );
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const errors: FormErrors = { email: "", message: "" };
    let isValid = true;

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
      isValid = false;
    } else if (formData.message.length > 1000) {
      errors.message = "Message must be less than 1000 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Clear error for this field when user starts typing
      if (formErrors[name as keyof FormErrors]) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [formErrors],
  );

  const handleSubmit = useCallback(async () => {
    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors above");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call (replace with actual EmailJS or API endpoint later)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({ email: "", message: "" });
      toast.success("Message sent successfully! We'll get back to you soon.");
      trackEvent("contact_send_message", { method: "simulated", valid: true });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      toast.error("Failed to send message. Please try again.");
      trackEvent("contact_send_error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const systemStatus = useMemo(
    () => (isSubmitting ? "BUSY" : "READY"),
    [isSubmitting],
  );

  const systemStatusType = useMemo<SystemStatusType>(
    () => (isSubmitting ? "warning" : "success"),
    [isSubmitting],
  );

  const isFormValid = formData.email && formData.message && !formErrors.email && !formErrors.message;

  // Animation refs with RGB CHROMATIC ABERRATION glitch effects
  const headerBadgeRef = useCyberScrollAnimation({
    animation: "cyberGlitchCenter",
    duration: 0.8,
    delay: 0.1,
  });

  const headerTitleRef = useCyberScrollAnimation({
    animation: "cyberGlitchCenter",
    duration: 1.2,
    delay: 0.3,
  });

  const headerDescRef = useCyberScrollAnimation({
    animation: "cyberGlitchCenter",
    duration: 0.8,
    delay: 0.5,
  });

  const formCardRef = useCyberScrollAnimation({
    animation: "cyberGlitchLeft",
    duration: 1.4,
    delay: 0.2,
  });

  const mapCardRef = useCyberScrollAnimation({
    animation: "cyberGlitchRight",
    duration: 1.4,
    delay: 0.2,
  });

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-10 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full space-y-8 sm:space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          {/* Badge - CENTER GLITCH with RGB */}
          <div ref={headerBadgeRef} className="mb-3 sm:mb-4">
            <Badge
              variant="outline"
              className="border-primary/50 bg-background/80 backdrop-blur-sm px-4 py-2 font-mono"
            >
              <Terminal className="w-4 h-4 mr-2 inline" />
              &lt;COMMUNICATION_CHANNEL&gt;
            </Badge>
          </div>

          {/* Title - CENTER GLITCH with RGB */}
          <div ref={headerTitleRef}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground tracking-tight font-mono px-2">
              <span className="text-primary/60">&gt;</span> Get In{" "}
              <span className="relative inline-block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
          </div>

          {/* Description - CENTER GLITCH with RGB */}
          <div ref={headerDescRef}>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed font-mono px-4">
              <span className="text-primary font-bold">&gt;</span> Interested in
              partnering with CYBERNEXUS? We welcome collaborations with
              companies and organizations looking to support tech innovation and
              student development.
            </p>

            <div className="flex items-center justify-center gap-2 text-primary/40 font-mono text-xs pt-2 sm:pt-4">
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
              <div className="flex gap-1">
                <span className="animate-pulse hidden sm:inline">
                  ────────────────────────────────────────
                </span>
                <span className="animate-pulse sm:hidden">──────────────</span>
              </div>
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Form Card - LEFT GLITCH with RGB */}
          <div ref={formCardRef}>
            <CyberCard
              glowColor="primary"
              className="p-6 sm:p-8 flex flex-col h-full"
            >
              <div className="space-y-2 mb-6">
                <Badge
                  variant="outline"
                  className="border-primary/50 bg-background/80 backdrop-blur-sm font-mono"
                >
                  <Terminal className="w-3 h-3 mr-1 inline" />
                  MESSAGE_PROTOCOL
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-mono">
                  Send us a message
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6 flex-grow flex flex-col">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-foreground font-bold font-mono text-xs sm:text-sm uppercase tracking-wider"
                  >
                    <span className="text-secondary">&gt;</span> Your Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary/70 w-4 h-4 sm:w-5 sm:h-5 z-10" />
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`pl-10 sm:pl-12 bg-background/90 border-2 font-mono h-10 sm:h-12 ${
                        formErrors.email
                          ? "border-error/50 focus:border-error"
                          : formData.email && emailRegex.test(formData.email)
                          ? "border-success/50 focus:border-success"
                          : "border-primary/20 focus:border-primary hover:border-primary/40"
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {formErrors.email && (
                      <p className="text-error text-xs sm:text-sm font-mono">
                        ✗ {formErrors.email}
                      </p>
                    )}
                    {!formErrors.email && formData.email && emailRegex.test(formData.email) && (
                      <p className="text-success text-xs sm:text-sm font-mono">
                        ✓ Valid email
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 flex-grow flex flex-col">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="message"
                      className="text-foreground font-bold font-mono text-xs sm:text-sm uppercase tracking-wider"
                    >
                      <span className="text-secondary">&gt;</span> Your Message
                    </Label>
                    <span className="text-xs font-mono text-foreground/50">
                      {formData.message.length} / 1000
                    </span>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us what you're interested in..."
                    className={`bg-background/90 border-2 font-mono hover:border-primary/40 resize-none flex-grow ${
                      formErrors.message
                        ? "border-error/50 focus:border-error"
                        : "border-primary/20 focus:border-primary"
                    }`}
                    maxLength={1000}
                  />
                  <div className="flex items-center justify-between">
                    {formErrors.message && (
                      <p className="text-error text-xs sm:text-sm font-mono">
                        ✗ {formErrors.message}
                      </p>
                    )}
                    {!formErrors.message && formData.message.length >= 10 && (
                      <p className="text-success text-xs sm:text-sm font-mono">
                        ✓ Valid message
                      </p>
                    )}
                    {formData.message.length >= 900 && (
                      <p className="text-warning text-xs sm:text-sm font-mono ml-auto">
                        ⚠ Nearing limit
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <Button
                    size="lg"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isFormValid}
                    className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-lg px-8 py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="flex items-center gap-1 sm:gap-2">
                          SEND_MESSAGE
                          <span className="text-xs opacity-70 hidden sm:inline">
                            .exe
                          </span>
                        </span>
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse ml-2" />
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <Alert className="bg-green-500/10 border-2 border-green-500/50 text-green-400">
                      <AlertDescription className="font-bold font-mono text-center">
                        ✓ MESSAGE_TRANSMITTED
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="bg-red-500/10 border-2 border-red-500/50 text-red-400">
                      <AlertDescription className="font-bold font-mono text-center">
                        ✗ TRANSMISSION_FAILED
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="flex flex-wrap gap-2">
                    <StatusIndicator
                      label="SYSTEM"
                      value={systemStatus}
                      type={systemStatusType}
                    />
                    <StatusIndicator
                      label="PROTOCOL"
                      value="SMTP"
                      type="primary"
                    />
                  </div>
                </div>
              </div>
            </CyberCard>
          </div>

          {/* Map Card - RIGHT GLITCH with RGB */}
          <div ref={mapCardRef}>
            <CyberCard
              glowColor="secondary"
              className="p-6 sm:p-8 flex flex-col h-full"
            >
              <div className="space-y-2 mb-6">
                <Badge
                  variant="outline"
                  className="border-secondary/50 bg-background/80 backdrop-blur-sm font-mono"
                >
                  <MapPin className="w-3 h-3 mr-1 inline" />
                  COORDINATES
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-mono">
                  Our Location
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6 flex-grow flex flex-col">
                {/* Location Info Card */}
                <div className="flex items-start gap-2 sm:gap-3 text-foreground/80 bg-gradient-to-r from-secondary/10 to-secondary/5 p-3 sm:p-4 rounded-lg border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-secondary flex-shrink-0 animate-pulse" />
                  <div className="font-mono text-xs sm:text-sm flex-grow">
                    <p className="font-bold text-foreground">
                      <span className="text-secondary">&gt;</span> Ibn Khaldoun
                      University
                    </p>
                    <p className="text-foreground/70">
                      Faculty of Mathematics and Computer Science
                    </p>
                    <p className="text-foreground/70">Tiaret, Algeria</p>
                    <p className="text-secondary/80 text-xs mt-1">📍 35.3505°N, 1.3209°E</p>
                  </div>
                </div>

                {/* Interactive Map Container */}
                <div className="w-full flex-grow rounded-xl overflow-hidden border-2 border-secondary/30 relative shadow-2xl hover:shadow-secondary/50 hover:border-secondary/60 transition-all duration-300 min-h-[300px] group">
                  {/* Map Overlay Gradient */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 bg-gradient-to-br from-secondary to-transparent transition-opacity duration-300 z-10" />
                  
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.4522640683!2d1.3209439433091803!3d35.350471531917535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1286d1b08df59eab%3A0xd7ba2589aab1d516!2z2YPZhNmK2Kkg2KfZhNix2YrYp9i22YrYp9iqINmIINin2YTYp9i52YTYp9mFINin2YTYotmE2Yo!5e0!3m2!1sen!2sdz!4f13.1&style=feature:all|element:labels|visibility:off&style=feature:water|color:0x000000&style=feature:road|color:0x222222&style=feature:landscape|color:0x0a0a0a&style=feature:administrative|element:geometry.stroke|color:0x00d9ff|visibility:on&style=feature:poi|visibility:off"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "brightness(0.95) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ibn Khaldoun University Tiaret Location"
                    className="absolute inset-0 transition-all duration-300 group-hover:brightness-100"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <button
                    onClick={() => {
                      window.open(
                        "https://www.google.com/maps/place/Ibn+Khaldoun+University/@35.350471,1.320944,15z",
                        "_blank"
                      );
                      trackEvent("maps_open", { source: "contact_section" });
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-secondary/20 hover:bg-secondary/40 text-secondary border border-secondary/50 hover:border-secondary rounded-lg font-mono text-xs sm:text-sm font-bold transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
                    aria-label="Open location in Google Maps"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    <span className="hidden sm:inline">OPEN_IN_MAPS</span>
                    <span className="sm:hidden">OPEN</span>
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("35.3505°N, 1.3209°E");
                      toast.success("Coordinates copied!");
                      trackEvent("coords_copy", { source: "contact_section" });
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-accent/20 hover:bg-accent/40 text-accent border border-accent/50 hover:border-accent rounded-lg font-mono text-xs sm:text-sm font-bold transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    aria-label="Copy coordinates to clipboard"
                  >
                    <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">COPY_COORDS</span>
                    <span className="sm:hidden">COPY</span>
                  </button>

                  <button
                    onClick={() => {
                      window.open(
                        "https://www.google.com/maps/dir/?api=1&destination=35.350471,1.320944",
                        "_blank"
                      );
                      trackEvent("maps_directions", { source: "contact_section" });
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50 hover:border-primary rounded-lg font-mono text-xs sm:text-sm font-bold transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    aria-label="Open directions to location"
                  >
                    <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    <span className="hidden sm:inline">DIRECTIONS</span>
                    <span className="sm:hidden">NAV</span>
                  </button>
                </div>

                {/* Status Indicators */}
                <div className="flex flex-wrap gap-2">
                  <StatusIndicator label="GPS" value="LOCKED" type="success" />
                  <StatusIndicator
                    label="SIGNAL"
                    value="STRONG"
                    type="success"
                  />
                  <StatusIndicator
                    label="PRECISION"
                    value="HIGH"
                    type="primary"
                  />
                </div>
              </div>
            </CyberCard>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1a1a2e",
            color: "#00d9ff",
            border: "2px solid #00d9ff",
            borderRadius: "8px",
            fontFamily: "monospace",
          },
        }}
      />
    </section>
  );
};

export default ContactSection;
