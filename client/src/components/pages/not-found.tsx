import { Link } from "@tanstack/react-router";
import { AlertCircle, Home } from "lucide-react";

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Error Code */}
        <div className="space-y-4">
          <div className="text-9xl font-bold text-primary/20">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 bg-primary/10 rounded-2xl flex items-center justify-center">
            <AlertCircle
              className="w-24 h-24 text-primary/40"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-muted transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Need help? Here are some useful links:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="text-primary hover:underline text-sm">
              Home
            </Link>
            <span className="text-border">•</span>
            <Link to="/" className="text-primary hover:underline text-sm">
              Contact Support
            </Link>
            <span className="text-border">•</span>
            <Link to="/" className="text-primary hover:underline text-sm">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
