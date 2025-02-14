import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  icons: "/images/logo_small.png",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
