import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Contact — Radio Madagasikara ho an'i Kristy (RMK)",
  description:
    'Contact Radio Madagasikara ho an’i Kristy: address in Andohalo, Antananarivo, phone, email, and message form.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
