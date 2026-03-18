import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="pixel-grid flex min-h-screen items-center justify-center px-6">
          <div className="retro-border-8 bg-white p-10 text-center shadow-neo-lg">
            <h1 className="text-3xl uppercase text-primary">System Error</h1>
            <p className="mt-4 font-bold text-slate-700">
              Something went wrong. Refresh to reload the portfolio.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="hover-bounce retro-border-4 mt-6 bg-primary px-6 py-3 font-black uppercase text-white shadow-neo transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
