import { ThemeRegistry } from "@/components/lib";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Client App",
  description: "Client app for microservices demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
