"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectPreviewProps = {
  title: string;
  images?: {
    src: string;
    title: string;
  }[];
  fallbackImage?: string;
};

export default function ProjectPreview({
  title,
  images,
  fallbackImage,
}: ProjectPreviewProps) {
  const gallery =
    images && images.length > 0
      ? images
      : fallbackImage
        ? [
            {
              src: fallbackImage,
              title,
            },
          ]
        : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (gallery.length === 0) {
    return null;
  }

  const currentImage = gallery[currentIndex];

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Dashboard Gallery
      </h2>

      <div className="mt-8">
        <p className="mb-4 text-center text-lg font-semibold text-slate-200">
          {currentImage.title}
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={currentImage.src}
              alt={`${title} - ${currentImage.title}`}
              fill
              className="object-contain"
              priority={currentIndex === 0}
            />
          </div>
        </div>

        {gallery.length > 1 && (
          <>
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={previousImage}
                className="rounded-xl border border-white/10 px-5 py-2 text-slate-300 transition hover:border-green-400 hover:text-green-400"
              >
                ← Previous
              </button>

              <span className="text-sm text-slate-400">
                {currentIndex + 1} / {gallery.length}
              </span>

              <button
                type="button"
                onClick={nextImage}
                className="rounded-xl border border-white/10 px-5 py-2 text-slate-300 transition hover:border-green-400 hover:text-green-400"
              >
                Next →
              </button>
            </div>

            <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
              {gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-20 min-w-32 overflow-hidden rounded-lg border transition ${
                    currentIndex === index
                      ? "border-green-400"
                      : "border-white/10"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-contain bg-white"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}