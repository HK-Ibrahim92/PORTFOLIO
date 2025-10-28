"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { certificates } from "../../public/data/certificates"
import Image from "next/image"

export default function CertificatesSection() {
 
  return (
    <section
      id="certifications"
      className="bg-gray-900 text-white px-6 md:px-20 py-20 min-h-screen"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Certificates
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {certificates.map((cert, i) => (
          <SwiperSlide key={i}>
 

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: i * 0.2 }}
  className="bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300 p-6 flex-col w-[300px] h-[300px] flex items-center justify-center"
>
  <Image
    src={cert.image}
    alt={cert.title}
    width={260}
    height={180}
    className="rounded-lg shadow-md object-cover mb-4"
    style={{ width: '260px', height: '180px' }}
  />
  <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
  <p className="text-purple-400">{cert.year}</p>
</motion.div>


          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
