import { Documentation } from '@/app/components/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Features | Astria & Co',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
