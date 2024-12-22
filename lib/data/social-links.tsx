import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/samvelsiby",
    icon: <GithubIcon size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samvel-siby/",
    icon: <LinkedinIcon size={20} />,
  },
  {
    name: "Contact",
    url: "mailto:samvelsiby@gmail.com",
    icon: <MailIcon size={20} />,
  },
] as const;