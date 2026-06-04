import React from 'react'
import AnimationWrapper from './AnimationWrapper'

export default function SectionTitle({ children, subtitle }) {
  return (
    <AnimationWrapper className="mb-12">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mb-3">
          {children}
        </h2>
        {subtitle && (
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-16 bg-blue-600 rounded-full" />
      </div>
    </AnimationWrapper>
  )
}
