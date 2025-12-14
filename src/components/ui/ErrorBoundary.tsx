import React, { ReactNode, Component, ErrorInfo } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/80 px-4">
          <div className="max-w-md w-full space-y-6 text-center">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-error/20 rounded-full blur-xl" />
                <div className="relative bg-error/10 border-2 border-error/30 rounded-full p-6">
                  <AlertTriangle className="w-12 h-12 text-error mx-auto" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h1 className="text-4xl font-black text-foreground font-mono">
                SYSTEM_ERROR
              </h1>
              <p className="text-foreground/70 font-mono text-sm">
                An unexpected error occurred while rendering this component.
              </p>
              {this.state.error && (
                <div className="bg-error/5 border border-error/20 rounded-lg p-3 text-left">
                  <p className="text-error/80 font-mono text-xs break-words">
                    {this.state.error.message}
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-bold rounded-lg border border-primary/50 transition-all duration-300 group"
              >
                <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                RETRY
              </button>
              <a
                href="/"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-base-200 text-base-content hover:bg-base-300 font-mono font-bold rounded-lg border border-base-300 transition-all duration-300"
              >
                HOME
              </a>
            </div>

            {/* Terminal styling */}
            <div className="text-foreground/40 font-mono text-xs space-y-1">
              <p>&gt; error_boundary_active</p>
              <p>&gt; attempting_recovery...</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
