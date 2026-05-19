import React from 'react'
import AnimationWrapper from './AnimationWrapper'

export default function SectionTitle({ children, subtitle }) {
  return (
    <AnimationWrapper className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </AnimationWrapper>
  )
}
