import React, { memo } from 'react'
import { ContentCenter } from '../../components'

const About = () => {
  return (
    <section className="py-20 px-4">
      <ContentCenter>
        <h1 className="capitalize text-center text-7xl tracking-wide font-semibold mobile-lg:text-4xl mobile-lg:leading-tight">The Gufi Restaurant</h1>
        <img src="/hero-imgs/hero-1.webp" className="mt-8 mobile-lg:mt-5" alt="restaurant image" />
        <p className="capitalize text-lg mt-8 mobile-lg:text-sm mobile-lg:leading-normal mobile-lg:mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cum veniam illum maxime tenetur quae blanditiis est ab commodi, illo itaque dolorum, eaque provident quas iure et molestiae nisi quo a officiis praesentium aliquam tempore. Inventore ullam saepe architecto neque vel excepturi consectetur ab voluptatibus! Lorem ipsum dolor sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure provident, reiciendis est culpa qui omnis suscipit, molestias sunt, vitae eum quos. Quibusdam, dolorem amet doloribus adipisci culpa voluptates. Maiores ipsa iusto culpa quis dolores consectetur quisquam quod perferendis, ad unde! Facilis architecto itaque quasi rerum, delectus quos omnis soluta explicabo ex, aliquid corporis ducimus, mollitia a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non consectetur reprehenderit cumque saepe mollitia quisquam, perferendis soluta nisi quia, ipsum quo at quod dignissimos, harum recusandae provident repellat praesentium. Ab autem aut ratione corporis commodi, veniam tempora laudantium, quas quia sequi, placeat delectus fugiat!</p>
      </ContentCenter>
    </section>
  )
}

export default memo(About)
