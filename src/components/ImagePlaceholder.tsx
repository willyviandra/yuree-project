"use client";

import React, { useState } from "react";
import { Compass, Camera, Maximize2 } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspectRatio?: "video" | "4/3" | "square" | "16/10" | "auto";
  category?: string;
  title?: string;
  dimensions?: string;
  finishing?: string;
  className?: string;
  assetPath?: string;
  onClick?: () => void;
  showZoomIcon?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  aspectRatio = "4/3",
  category,
  title,
  dimensions,
  finishing,
  className = "",
  assetPath,
  onClick,
  showZoomIcon = false,
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const aspectClass = {
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    square: "aspect-square",
    "16/10": "aspect-[16/10]",
    auto: "aspect-auto",
  }[aspectRatio];

  const hasRealImage = src && !imageError;

  return (
    <div
      onClick={onClick}
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-[#2b2b2b] border border-white/10 group ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {/* Real Image Attempt if available */}
      {hasRealImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          )}
        </>
      )}

      {/* Fallback Clean Architectural Drafting Mockup (When image not yet replaced or loading) */}
      {(!hasRealImage || !imageLoaded) && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-br from-[#2b2b2b] via-[#2b2b2b] to-[#2b2b2b] architectural-grid">
          {/* Subtle Architectural Blueprint Corner Crosshairs */}
          <span className="absolute top-2 left-2 text-white/20 font-mono-num text-xs select-none">
            +
          </span>
          <span className="absolute top-2 right-2 text-white/20 font-mono-num text-xs select-none">
            +
          </span>
          <span className="absolute bottom-2 left-2 text-white/20 font-mono-num text-xs select-none">
            +
          </span>
          <span className="absolute bottom-2 right-2 text-white/20 font-mono-num text-xs select-none">
            +
          </span>

          {/* Top Row: Category Badge & Status */}
          <div className="flex items-center justify-between gap-2 z-10">
            {category && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase bg-[#EEAA55]/15 text-[#EEAA55] border border-[#EEAA55]/30">
                <Compass className="w-3 h-3 text-[#EEAA55]" />
                {category}
              </span>
            )}
            <span className="text-[10px] font-mono-num text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
              CAD / Foto Proyek
            </span>
          </div>

          {/* Center: Title & Architectural Compass Motif */}
          <div className="my-auto text-center px-4 py-2 z-10">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-zinc-800/60 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-[#EEAA55]/40 group-hover:text-[#EEAA55] transition-colors">
              <Camera className="w-5 h-5" />
            </div>
            {title && (
              <h4 className="text-white font-medium text-sm tracking-tight line-clamp-1">
                {title}
              </h4>
            )}
            {dimensions && (
              <p className="text-[11px] font-mono-num text-zinc-400 mt-1">
                Dimensi: <span className="text-zinc-200">{dimensions}</span>
              </p>
            )}
          </div>

          {/* Bottom Row: Finishing Spec & Local File Path */}
          <div className="z-10 flex flex-col gap-1 pt-2 border-t border-white/10 text-[10px]">
            {finishing && (
              <p className="text-zinc-400 truncate">
                <span className="text-zinc-500">Spec:</span> {finishing}
              </p>
            )}
            {assetPath && (
              <p className="font-mono-num text-[9.5px] text-zinc-500 truncate bg-black/50 px-1.5 py-0.5 rounded border border-white/5">
                path: <span className="text-[#EEAA55]/80">{assetPath}</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Hover Zoom Icon Overlay */}
      {showZoomIcon && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
          <div className="p-3 rounded-full bg-[#EEAA55] text-black shadow-lg">
            <Maximize2 className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );
}
