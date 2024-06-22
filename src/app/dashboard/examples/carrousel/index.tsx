import { useState, useEffect, useRef, useCallback } from 'react'

const CarrouselPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const items = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description 1'
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description 2'
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description 3'
    }
  ]

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    )
  }, [items.length])

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.clientWidth * currentIndex,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <div className='grid h-96 relative'>
      <button
        onClick={handlePrev}
        className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full'
      >
        Prev
      </button>
      <div
        ref={ref}
        className='flex max-w-full overflow-x-hidden scroll-snap-x'
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className='flex flex-col items-center justify-center min-w-full h-full from-primary to-secondary bg-gradient-to-r text-white'
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full'
      >
        Next
      </button>
    </div>
  )
}

export default CarrouselPage
