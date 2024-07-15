import React from 'react'
import Image from 'next/image'
import contactsData from '@/app/lib/data/contacts'

const Contact: React.FC = () => {
  return (
    <div className="w-full flex-grow flex items-baseline justify-center space-x-20 px-5">
      {contactsData.map((contact, index) => (
        <a key={index} href={contact.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={contact.logo}
            width={contact.width}
            height={contact.height}
            alt={`${contact.name} logo`}
          />
        </a>
      ))}
    </div>
  )
};

export default Contact;
