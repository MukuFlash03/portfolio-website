import React from 'react'
import Image from 'next/image'
import contactsData from '@/app/lib/data/contacts'
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className="w-full flex-grow flex flex-col md:flex-row items-center md:items-baseline justify-center space-y-4 md:space-y-0 md:space-x-20 px-1 md:px-5">
      {contactsData.map((contact, index) => (
        <Link key={index} href={contact.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          {/* <Image
            src={contact.logo}
            width={55}
            height={55}
            alt={`${contact.name} logo`}
            className="md:w-[50px] md:h-[50px]"
          /> */}
          <Image
            src={contact.logo}
            alt={`${contact.name} logo`}
            className={`
              w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
              ${contact.ratio === true ? 'aspect-square' : 'aspect-auto'}
            `}
          />
        </Link>
      ))}
    </div>
  )
};

export default Contact;
