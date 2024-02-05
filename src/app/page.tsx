'use client'

import { useUserDetailsQuery } from "@/api/useUserDetailsQuery";

export default function Home() {
  const { data } = useUserDetailsQuery();
  return (
    <main>
      <h1>UserName</h1>
    </main>
  );
}
