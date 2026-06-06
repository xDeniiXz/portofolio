import React from 'react'
import AnimationWrapper from './AnimationWrapper'

export default function SectionTitle({ children, subtitle }) {
  return (
    <AnimationWrapper className="mb-10 sm:mb-12">
      <div className="text-left">
        {subtitle && (
          <p className="text-tech-green text-xs sm:text-sm font-mono uppercase tracking-widest mb-2">
            // {subtitle}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight font-mono">
          {children}
        </h2>
      </div>
    </AnimationWrapper>
  )
}
