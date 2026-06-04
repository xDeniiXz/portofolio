import React from 'react'
import AnimationWrapper from './AnimationWrapper'

export default function SectionTitle({ children, subtitle }) {
  return (
    <AnimationWrapper className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </AnimationWrapper>
  )
}
