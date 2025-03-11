import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Prevent flash of wrong theme */}
      <Script
        id="theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function getInitialTheme() {
                // Check if theme was previously set
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme) {
                  return storedTheme;
                }

                // Default to light theme
                return 'light';
              }

              const theme = getInitialTheme();
              
              // Apply theme immediately to prevent flash
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }

              // Update localStorage
              localStorage.setItem('theme', theme);
            })();
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
