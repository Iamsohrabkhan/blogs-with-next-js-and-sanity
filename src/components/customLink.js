import Link from 'next/link'
import React from 'react'

const CustomLink = ({slug}) => {
  return (
    <Link href={`blogs/${slug}` }className="inline-flex items-center text-indigo-500 cursor-pointer">
    Learn More
    <svg
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  </Link>
  )
}

export default CustomLink