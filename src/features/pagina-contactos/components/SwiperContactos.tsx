import { Swiper } from 'swiper/react'
import { Pagination as PaginacionSwiper, Navigation } from 'swiper/modules'

type Props = {
  children: React.ReactNode
}

export const SwiperContacto = ({ children }: Props) => {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }}
      navigation={false}
      modules={[PaginacionSwiper, Navigation]}
      className='mySwiper mx-3'
      effect='cards'>
      {children}
    </Swiper>
  )
}
