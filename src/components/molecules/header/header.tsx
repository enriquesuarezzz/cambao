import { Dancing_ScriptText } from '@/components/atoms/dancing_ScriptText'

import Image from 'next/image'
export default function Header() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 px-10 md:gap-20 lg:flex-row lg:gap-0">
      <div className="max-h-[480px] w-full max-w-[640px]">
        <Image
          src={'/images/header.avif'}
          alt="byCambao logo"
          width={500}
          height={500}
          className="ml-2 h-full w-full"
        />
      </div>
      <div className="max-w-[700px] text-center">
        <Dancing_ScriptText
          text="Lanzarote alberga de los lugares más bonitos del planeta, y pecamos de dar todo a los turistas, conejeros, estamos aquí para hacerles disfrutar de la fiesta canaria con la cultura inquieta de los jóvenes."
          tag="h1"
          style="bold"
          fontSize="20px"
          className="ml-0 lg:ml-40"
        />
      </div>
    </div>
  )
}