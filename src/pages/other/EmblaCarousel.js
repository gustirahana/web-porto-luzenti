import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
