import React from 'react'

export const Text = ({ children, className, tagName = 'p' }) => {
  const Tag = tagName
  return (
    <Tag className={className}>
      {children}
    </Tag>
  )
}

// Gradient text helper
export const gradientText = (color1 = 'from-cream', color2 = 'to-gold') => {
  return `
    bg-gradient-from-${color1.replace('from-', '')}
    bg-gradient-to-${color2.includes('to-') ? 'to-' : ''}${color2.replace('to-', '')}
    bg-clip-text
    text-transparent
    ${color2.includes('to-') ? 'text-[color:transparent]' : ''}
  `
}