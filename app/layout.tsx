import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, Next.js requires this root layout 
// to be present in order to bootstrap the children correctly.
export default function RootLayout({ children }: Props) {
  return children;
}

