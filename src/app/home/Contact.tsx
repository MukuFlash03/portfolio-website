import React from 'react'
import Image from 'next/image'
import contactsData from '@/app/lib/data/contacts'
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    // <div className="w-full flex-grow flex flex-wrap md:flex-row items-center md:items-baseline justify-center space-y-4 md:space-y-0 space-x-4 md:space-x-20 px-1 md:px-5">
    //   {contactsData.map((contact, index) => (
    //     <Link key={index} href={contact.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
    //       <Image
    //         src={contact.logo}
    //         alt={`${contact.name} logo`}
    //         className={`
    //           w-5 h-5 md:w-12 md:h-12
    //           ${contact.ratio === true ? 'aspect-square' : 'aspect-auto'}
    //         `}
    //       />
    //     </Link>
    //   ))}
    // </div>

    <div className="w-full flex-grow flex flex-wrap md:flex-row items-center justify-center space-x-4 md:space-x-20 px-1 md:px-5">
      {contactsData.map((contact, index) => (
        <Link key={index} href={contact.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          <Image
            src={contact.logo}
            alt={`${contact.name} logo`}
            className={`
        w-5 h-5 md:w-12 md:h-12
        ${contact.ratio === true ? 'aspect-square' : 'aspect-auto'}
      `}
          />
        </Link>
      ))}
    </div>
  )
};

export default Contact;
