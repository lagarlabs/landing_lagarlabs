import React, { useState } from 'react'
import { ImageOff } from 'lucide-react'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const { src, alt, style, className, ...rest } = props

  if (didError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-slate-800/60 to-slate-900/80 ${className ?? ''}`}
        style={style}
      >
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <ImageOff className="w-10 h-10 opacity-50" />
          <span className="text-xs">Vista previa no disponible</span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  )
}
