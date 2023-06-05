import "./globals.css";

export const metadata = {
  title: "Abhishek Kalia",
  description:
    "Your friendly neighbourhood product designer and frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
