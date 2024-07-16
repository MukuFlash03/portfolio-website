import contactLogos from "@/app/assets/contact";
import { Contact } from "@/app/lib/types/contact";

const contactsData: Contact[] = [
  { name: 'LinkedIn', logo: contactLogos.linkedin, url: 'https://www.linkedin.com/in/mukulm03', },
  { name: 'GitHub', logo: contactLogos.github, url: 'https://github.com/MukuFlash03', },
  { name: 'Gmail', logo: contactLogos.gmail, url: 'mailto:mukulm2010@gmail.com', ratio: true },
  { name: 'Wordpress', logo: contactLogos.wordpress, url: 'https://mukulcodes.wordpress.com', },
];

export default contactsData