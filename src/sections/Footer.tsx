"use client";

export default function Footer() {
  return (
    <footer className="container mx-auto text-center">
      <p className="text-sm text-muted max-w-prose mx-auto py-xl">
        © {new Date().getFullYear()} Andi Ashari. All rights reserved.
        <br className="my-2" />
        <i>&quot;Innovation distinguishes between a leader and a follower.&quot; – Steve Jobs</i>
      </p>
    </footer>
  );
} 
