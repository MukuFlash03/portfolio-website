import contactLogos from "@/app/assets/contact";

import Contact from "@/app/lib/types/contact";

const contactsData: Contact[] = [
  { name: 'LinkedIn', logo: contactLogos.linkedin, url: 'https://www.linkedin.com/in/mukulm03', width: 55, height: 55 },
  { name: 'GitHub', logo: contactLogos.github, url: 'https://github.com/MukuFlash03', width: 55, height: 55 },
  { name: 'Gmail', logo: contactLogos.gmail, url: 'mailto:mukulm2010@gmail.com', width: 55, height: 48 },
  { name: 'Wordpress', logo: contactLogos.wordpress, url: 'https://mukulcodes.wordpress.com', width: 55, height: 55 },
];

export default contactsData