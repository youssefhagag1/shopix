import React from 'react'
import { Clock, Mail, MapPin, Phone, LucideIcon } from "lucide-react";

export interface ContactData {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const data: ContactData[] = [
  {
    icon: (<Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />),
    title: "Working Hours",
    subtitle: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
  {
    icon: (<Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />),
    title: "Email",
    subtitle: "contact@example.com",
  },
  {
    icon: (<MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />),
    title: "Address",
    subtitle: "123 Main Street, New York, NY",
  },
  {
    icon: (<Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />),
    title: "Phone",
    subtitle: "+1 (555) 123-4567",
  },
];
function FooterTop() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data.map((item, index) => {

        return (
          <div
            key={index}
            className="flex items-center gap-3 p-4 transition-colors hover:bg-gray-50 group"
          >
            {item.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


export default FooterTop
