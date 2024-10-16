
import React from 'react'
import Image from 'next/image'
import engaging from '../assests/engaging.webp'
const Engaging = () => {
  return (
    <section className="relative py-12 md:py-24">
    <Image src={engaging} alt="Engaging" className="w-full" draggable="false" />
    </section>
  );
};

export default Engaging