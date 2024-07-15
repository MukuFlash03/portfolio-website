import React from 'react'
import Image from 'next/image'
import contactsData from '@/app/lib/data/contacts'
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className="w-full flex-grow flex flex-col sm:flex-row items-center sm:items-baseline justify-center space-y-4 sm:space-y-0 sm:space-x-20 px-5">
      {contactsData.map((contact, index) => (
        <Link key={index} href={contact.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          <Image
            src={contact.logo}
            width={contact.width}
            height={contact.height}
            alt={`${contact.name} logo`}
            className="w-[contact.width]px h-[contact.height]px"
          />
        </Link>
      ))}
    </div>
  )
};

export default Contact;
