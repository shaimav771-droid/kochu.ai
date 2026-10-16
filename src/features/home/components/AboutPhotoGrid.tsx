import { cn } from '@/shared/lib/utils/cn'

interface AboutPhotoGridProps {
  className?: string
}

interface PhotoItem {
  src: string
  alt: string
  objectPosition?: string
}

// Left column photos: Photo 4 (FINNOVATE) & Photo 1 (Startup Conclave)
const LEFT_COLUMN_PHOTOS: PhotoItem[] = [
  {
    src: '/images/photo 4.jpeg',
    alt: 'Suhail Abdulatif speaking at FINNOVATE Biz Conclave',
    objectPosition: 'center center',
  },
  {
    src: '/images/photo 1.jpeg',
    alt: 'Suhail Abdulatif speaking at Kerala Startup Conclave',
    objectPosition: 'center 20%',
  },
]

// Right column photos: Photo 2 (Marketing Tactics) & Photo 3 (Commerce Club Seminar)
const RIGHT_COLUMN_PHOTOS: PhotoItem[] = [
  {
    src: '/images/photo 2.jpeg',
    alt: 'Suhail Abdulatif presenting digital strategy and marketing tactics',
    objectPosition: 'center 15%',
  },
  {
    src: '/images/photo 3.jpeg',
    alt: 'Suhail Abdulatif conducting seminar at Commerce Club PPTM',
    objectPosition: 'center center',
  },
]

function PhotoCard({
  photo,
  className,
}: {
  photo: PhotoItem
  className?: string
}) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-2xl xl:rounded-3xl aspect-[4/4.8] lg:aspect-[4/4.5] xl:aspect-[4/4.7] select-none transition-all duration-500 hover:scale-[1.03] shadow-[0_12px_30px_-10px_rgba(20,31,16,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(20,31,16,0.14)]',
        className
      )}
      style={{
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
      }}
    >
      {/* Frameless Photo */}
      <img
        src={photo.src}
        alt={photo.alt}
        style={{ objectPosition: photo.objectPosition || 'center center' }}
        className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
        loading="eager"
      />

      {/* Seamless radial vignette dissolving photo edges into the screen background (#faf8f2) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_52%,#faf8f2_100%)] opacity-85 group-hover:opacity-45 transition-opacity duration-500" />

      {/* Subtle brand ambient glow accent */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7bc943]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#7bc943]/35 transition-colors duration-500" />
    </div>
  )
}

export function AboutPhotoGrid({ className }: AboutPhotoGridProps) {
  return (
    <div className={cn('relative w-full flex justify-center lg:justify-end', className)}>
      {/* Soft warm studio background glow behind the photo cluster */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[520px] bg-gradient-to-tr from-[#7bc943]/15 via-white/40 to-[#e8deca]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Alternating / Staggered 2-column photo layout */}
      <div className="relative grid grid-cols-2 gap-3 sm:gap-4 xl:gap-5 w-full max-w-[380px] sm:max-w-[460px] xl:max-w-[500px] items-start">
        {/* Left Sub-column: Shifted up */}
        <div className="flex flex-col gap-3 sm:gap-4 xl:gap-5 -mt-3 sm:-mt-6 lg:-mt-6 xl:-mt-8">
          <PhotoCard photo={LEFT_COLUMN_PHOTOS[0]} />
          <PhotoCard photo={LEFT_COLUMN_PHOTOS[1]} />
        </div>

        {/* Right Sub-column: Alternating / Shifted down */}
        <div className="flex flex-col gap-3 sm:gap-4 xl:gap-5 pt-3 sm:pt-6 lg:pt-6 xl:pt-9">
          <PhotoCard photo={RIGHT_COLUMN_PHOTOS[0]} />
          <PhotoCard photo={RIGHT_COLUMN_PHOTOS[1]} />
        </div>
      </div>
    </div>
  )
}
