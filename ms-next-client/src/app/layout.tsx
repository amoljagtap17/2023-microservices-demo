import { ThemeRegistry } from "@/components/lib";
import { Navbar } from "@/components/sections";
import { Box, Container } from "@mui/material";
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
        <ThemeRegistry>
          <Navbar />
          <Box component="main" minHeight="95vh" paddingTop={2}>
            <Container maxWidth="lg">{children}</Container>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
