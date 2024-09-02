import profile from "@/data/profile.json";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const SocialButtons = () => {
  return (
    <div className="flex ml-3 items-center space-x-4">
      {!!profile.github && (
        <Link href={profile.github} target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
        </Link>
      )}
      {!!profile.linkedin && (
        <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
        </Link>
      )}
      {!!profile.twitter && (
        <Link href={profile.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
        </Link>
      )}
    </div>
  );
};
