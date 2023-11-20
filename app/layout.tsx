import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/GlobalRedux/provider';

export const metadata: Metadata = {
  title: 'TODO app',
  description: 'Task from www.frontendmentor.io',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
