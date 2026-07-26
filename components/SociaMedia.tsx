import React from "react";
import {
  Globe,
  Mail,
  MessageCircle,
  Share2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

export const socialMedia = [
  {
    title: "Website",
    href: "https://example.com",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Email",
    href: "mailto:example@example.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    title: "Chat",
    href: "#",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    title: "Share",
    href: "#",
    icon: <Share2 className="w-5 h-5" />,
  },
  {
    title: "External",
    href: "#",
    icon: <ExternalLink className="w-5 h-5" />,
  },
];

function SociaMedia({className}: {className?: string}) {
  return (
    <TooltipProvider>
      <div className="flex gap-4">
        {socialMedia.map((social) => (
          <Tooltip key={social.title}>
            <TooltipTrigger >
              <a href={social.href}  className={cn( 'hover:text-white hover:border-shop-light-green'  , className)}>
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SociaMedia;
