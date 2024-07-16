import Link from "next/link"
import React from "react"

const Button: React.FC<{
  label: string,
  href?: string,
}> = ({
  label,
  href
}) => {
    return (
      <div className="w-full flex flex-col items-center justify-center space-y-2.5 px-1 md:px-5 py-2.5">
        <Link href="/resumeMukul.pdf" target="_blank" rel="noopener noreferrer">
          <button className="w-[110px] md:w-[135px] h-[30px] md:h-[50px] bg-[#4C0693] rounded-full flex items-center justify-center overflow-hidden">
            <span className="text-xs md:text-sm text-white whitespace-nowrap px-2">{label}</span>
          </button>
        </Link>
      </div>
    )
  }

export default Button