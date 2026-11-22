// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// import type { AboutBlock as AboutBlockProps } from '@/payload-types'
// import { Media } from '@/components/Media'

// export const AboutBlock: React.FC<AboutBlockProps> = ({
//   hero,
//   mission,
//   stats,
//   whyChooseUs,
//   closing,
// }) => {
//   const heroImage =
//     hero?.backgroundImage && typeof hero.backgroundImage === 'object' ? hero.backgroundImage : null

//   const whyImage =
//     whyChooseUs?.image && typeof whyChooseUs.image === 'object' ? whyChooseUs.image : null

//   return (
//     <div className="overflow-hidden bg-[#09090b] text-white">
//       {/* Hero */}
//       <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-28 text-center">
//         {heroImage?.url && (
//           <Image
//             src={heroImage.url}
//             alt={heroImage.alt || 'Gaming background'}
//             fill
//             priority
//             className="object-cover"
//             sizes="100vw"
//           />
//         )}

//         <div className="absolute inset-0 bg-black/75" />

//         <div className="relative z-10 mx-auto max-w-4xl">
//           <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
//             Welcome to KP Wiki
//           </p>

//           <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
//             {hero?.title || 'About KP Wiki'}
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
//             {hero?.description}
//           </p>

//           {hero?.buttonText && (
//             <Link
//               href={hero.buttonLink?.url || '/games'}
//               className="mt-9 inline-flex rounded-md bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700"
//             >
//               {hero.buttonText}
//             </Link>
//           )}
//         </div>
//       </section>

//       {/* Mission */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="mx-auto mb-14 max-w-3xl text-center">
//           <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
//             What We Stand For
//           </p>

//           <h2 className="text-3xl font-black sm:text-5xl">{mission?.title || 'Our Mission'}</h2>

//           <p className="mt-5 leading-8 text-zinc-400">{mission?.description}</p>
//         </div>

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {mission?.features?.map((feature, index) => (
//             <div
//               key={index}
//               className="rounded-xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-red-500/60"
//             >
//               <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-2xl text-red-500">
//                 ✦
//               </div>

//               <h3 className="text-lg font-bold">{feature.title}</h3>

//               <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Statistics */}
//       {stats && stats.length > 0 && (
//         <section className="border-y border-white/10 bg-white/[0.03] px-6 py-14">
//           <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <p className="text-3xl font-black text-red-500 sm:text-4xl">{stat.value}</p>
//                 <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Why KP Wiki */}
//       <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
//         <div>
//           <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
//             Discover KP Wiki
//           </p>

//           <h2 className="text-3xl font-black sm:text-5xl">
//             {whyChooseUs?.title || 'Why KP Wiki?'}
//           </h2>

//           <p className="mt-6 leading-8 text-zinc-400">{whyChooseUs?.description}</p>

//           <div className="mt-8 space-y-6">
//             {whyChooseUs?.points?.map((point, index) => (
//               <div key={index} className="flex gap-4">
//                 <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-500">
//                   ✓
//                 </span>

//                 <div>
//                   <h3 className="font-bold">{point.title}</h3>
//                   <p className="mt-1 text-sm leading-7 text-zinc-400">{point.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
//           {whyImage ? (
//             <Media resource={whyImage} imgClassName="h-full min-h-[300px] w-full object-cover" />
//           ) : (
//             <div className="flex min-h-[300px] items-center justify-center text-zinc-500">
//               Add an image from Payload CMS
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Closing */}
//       <section className="border-t border-white/10 bg-gradient-to-b from-red-950/30 to-transparent px-6 py-24 text-center">
//         <div className="mx-auto max-w-3xl">
//           <h2 className="text-3xl font-black sm:text-5xl">{closing?.title || 'Stay Connected'}</h2>

//           <p className="mt-5 leading-8 text-zinc-400">{closing?.description}</p>
//         </div>
//       </section>
//     </div>
//   )
// }

// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import {
//   FiArrowRight,
//   FiCalendar,
//   FiCheckCircle,
//   FiDatabase,
//   FiSmartphone,
//   FiUsers,
//   FiZap,
// } from 'react-icons/fi'
// import { IoGameControllerOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'

// import type { AboutBlock as AboutBlockProps } from '@/payload-types'
// import { Media } from '@/components/Media'

// const getMissionIcon = (title: string | null | undefined, index: number) => {
//   const key = (title || '').toLowerCase()
//   const iconClass = 'h-7 w-7 sm:h-8 sm:w-8 shrink-0 text-[#ef2b24]'

//   if (key.includes('accurate') || key.includes('reliable')) {
//     return <IoShieldCheckmarkOutline className={iconClass} />
//   }
//   if (key.includes('comprehensive') || key.includes('database')) {
//     return <FiDatabase className={iconClass} />
//   }
//   if (key.includes('date') || key.includes('fast') || key.includes('fresh')) {
//     return <FiZap className={iconClass} />
//   }
//   if (key.includes('gamer') || key.includes('community')) {
//     return <FiUsers className={iconClass} />
//   }

//   const fallbackIcons = [
//     <IoShieldCheckmarkOutline key="shield" className={iconClass} />,
//     <FiDatabase key="db" className={iconClass} />,
//     <FiZap key="zap" className={iconClass} />,
//     <FiUsers key="users" className={iconClass} />,
//   ]

//   return fallbackIcons[index % fallbackIcons.length]
// }

// const getStatIcon = (label: string | null | undefined, index: number) => {
//   const key = (label || '').toLowerCase()
//   const iconClass = 'h-7 w-7 sm:h-8 sm:w-8 shrink-0 text-[#ef2b24]'

//   if (key.includes('game')) return <IoGameControllerOutline className={iconClass} />
//   if (key.includes('platform')) return <FiSmartphone className={iconClass} />
//   if (key.includes('user') || key.includes('member')) {
//     return <FiUsers className={iconClass} />
//   }
//   if (key.includes('update') || key.includes('daily')) {
//     return <FiCalendar className={iconClass} />
//   }

//   const fallbackIcons = [
//     <IoGameControllerOutline key="gamepad" className={iconClass} />,
//     <FiSmartphone key="phone" className={iconClass} />,
//     <FiUsers key="users" className={iconClass} />,
//     <FiCalendar key="calendar" className={iconClass} />,
//   ]

//   return fallbackIcons[index % fallbackIcons.length]
// }

// export const AboutBlock: React.FC<AboutBlockProps> = ({ hero, mission, stats, whyChooseUs }) => {
//   const heroImage =
//     hero?.backgroundImage && typeof hero.backgroundImage === 'object' ? hero.backgroundImage : null

//   const whyImage =
//     whyChooseUs?.image && typeof whyChooseUs.image === 'object' ? whyChooseUs.image : null

//   // Single title string ko automatic 2 lines (White + Red) mein split karne ke liye
//   const rawHeroTitle = (hero?.title || 'Your Ultimate Game Database').trim()
//   const titleWords = rawHeroTitle.split(/\s+/)
//   const splitPoint = Math.ceil(titleWords.length / 2)
//   const heroTitleFirstHalf = titleWords.slice(0, splitPoint).join(' ')
//   const heroTitleSecondHalf = titleWords.slice(splitPoint).join(' ')

//   return (
//     <div className="overflow-hidden bg-[#08090c] text-white">
//       {/* 1. HERO SECTION */}
//       <section className="relative overflow-hidden border-b border-white/5">
//         {heroImage?.url && (
//           <Image
//             src={heroImage.url}
//             alt={heroImage.alt || 'Gaming background'}
//             fill
//             priority
//             className="object-cover object-right opacity-50"
//             sizes="100vw"
//           />
//         )}

//         {/* Left-to-right & bottom dark gradient overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-[#08090c]/85 to-[#08090c]/25" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-[#08090c]/40" />

//         <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
//           <div className="max-w-xl text-left">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ef2b24] sm:text-sm">
//               ABOUT KPWIKI
//             </p>

//             <h1 className="text-3xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
//               <span className="block text-white">{heroTitleFirstHalf}</span>
//               {heroTitleSecondHalf && (
//                 <span className="block text-[#ef2b24]">{heroTitleSecondHalf}</span>
//               )}
//             </h1>

//             {hero?.description && (
//               <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
//                 {hero.description}
//               </p>
//             )}

//             {hero?.buttonText && (
//               <Link
//                 href={hero.buttonLink?.url || '/games'}
//                 className="mt-8 inline-flex items-center gap-2.5 rounded-md border border-[#ef2b24] bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#ef2b24] transition-all duration-200 hover:bg-[#ef2b24] hover:text-white sm:text-sm"
//               >
//                 <span>{hero.buttonText}</span>
//                 <FiArrowRight className="h-4 w-4" />
//               </Link>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* 2. OUR MISSION + STATS STRIP */}
//       <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-12">
//         {/* Heading + Short Red Underline */}
//         <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
//           <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
//             {mission?.title || 'OUR MISSION'}
//           </h2>
//           <div className="mx-auto mt-2.5 mb-4 h-[2px] w-12 bg-[#ef2b24]" />
//           {mission?.description && (
//             <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
//               {mission.description}
//             </p>
//           )}
//         </div>

//         {/* Mission Cards: Mobile 1-col horizontal | Tablet 2x2 horizontal | Desktop 4-col centered */}
//         <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
//           {mission?.features?.map((feature, index) => (
//             <div
//               key={feature.id || index}
//               className="flex flex-row items-start gap-4 rounded-xl border border-white/10 bg-[#0d0f14] p-6 text-left transition-colors duration-200 hover:border-[#ef2b24]/40 lg:flex-col lg:items-center lg:text-center"
//             >
//               <div className="mt-0.5 lg:mt-0 lg:mb-1">{getMissionIcon(feature.title, index)}</div>

//               <div>
//                 <h3 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
//                   {feature.title}
//                 </h3>
//                 {feature.description && (
//                   <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 sm:text-sm">
//                     {feature.description}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Statistics Strip (Bordered Card directly under Mission) */}
//         {stats && stats.length > 0 && (
//           <div className="mt-5 rounded-xl border border-white/10 bg-[#0d0f14] px-6 py-6 sm:mt-6 sm:px-8">
//             <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 md:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.id || index}
//                   className="flex items-center justify-start gap-3.5 md:justify-center"
//                 >
//                   {getStatIcon(stat.label, index)}
//                   <div>
//                     <p className="text-xl font-bold leading-none text-white sm:text-2xl">
//                       {stat.value}
//                     </p>
//                     <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400 sm:text-xs">
//                       {stat.label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </section>

//       {/* 3. WHY KPWIKI SECTION */}
//       <section className="mx-auto max-w-7xl px-5 pt-2 pb-16 sm:px-8 md:pb-24 lg:px-12">
//         <h2 className="mb-8 text-left text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl md:mb-10 lg:text-center">
//           {whyChooseUs?.title || 'WHY KPWIKI?'}
//         </h2>

//         <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
//           {/* Left Features List */}
//           <div>
//             {whyChooseUs?.description && (
//               <p className="mb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
//                 {whyChooseUs.description}
//               </p>
//             )}

//             <ul className="space-y-6">
//               {whyChooseUs?.points?.map((point, index) => (
//                 <li key={point.id || index} className="flex items-start gap-3.5">
//                   <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ef2b24]" />
//                   <div>
//                     <h3 className="text-sm font-semibold text-white sm:text-base">{point.title}</h3>
//                     {point.description && (
//                       <p className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
//                         {point.description}
//                       </p>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Gaming Setup Image */}
//           <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0f14]">
//             {whyImage ? (
//               <Media resource={whyImage} imgClassName="h-64 w-full object-cover sm:h-72 lg:h-80" />
//             ) : (
//               <div className="flex h-64 items-center justify-center text-sm text-zinc-500 sm:h-72 lg:h-80">
//                 Add an image from Payload CMS
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiDatabase,
  FiSmartphone,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { IoGameControllerOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'

import type { AboutBlock as AboutBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'

const getMissionIcon = (title: string | null | undefined, index: number) => {
  const key = (title || '').toLowerCase()
  const iconClass = 'h-7 w-7 sm:h-8 sm:w-8 shrink-0 text-[#ef2b24]'

  if (key.includes('accurate') || key.includes('reliable')) {
    return <IoShieldCheckmarkOutline className={iconClass} />
  }
  if (key.includes('comprehensive') || key.includes('database')) {
    return <FiDatabase className={iconClass} />
  }
  if (key.includes('date') || key.includes('fast') || key.includes('fresh')) {
    return <FiZap className={iconClass} />
  }
  if (key.includes('gamer') || key.includes('community')) {
    return <FiUsers className={iconClass} />
  }

  const fallbackIcons = [
    <IoShieldCheckmarkOutline key="shield" className={iconClass} />,
    <FiDatabase key="db" className={iconClass} />,
    <FiZap key="zap" className={iconClass} />,
    <FiUsers key="users" className={iconClass} />,
  ]

  return fallbackIcons[index % fallbackIcons.length]
}

const getStatIcon = (label: string | null | undefined, index: number) => {
  const key = (label || '').toLowerCase()
  const iconClass = 'h-7 w-7 sm:h-8 sm:w-8 shrink-0 text-[#ef2b24]'

  if (key.includes('game')) return <IoGameControllerOutline className={iconClass} />
  if (key.includes('platform')) return <FiSmartphone className={iconClass} />
  if (key.includes('guide') || key.includes('faq')) return <FiBookOpen className={iconClass} />
  if (key.includes('user') || key.includes('member')) {
    return <FiUsers className={iconClass} />
  }
  if (key.includes('update') || key.includes('daily')) {
    return <FiCalendar className={iconClass} />
  }

  const fallbackIcons = [
    <IoGameControllerOutline key="gamepad" className={iconClass} />,
    <FiSmartphone key="phone" className={iconClass} />,
    <FiBookOpen key="guide" className={iconClass} />,
    <FiCalendar key="calendar" className={iconClass} />,
  ]

  return fallbackIcons[index % fallbackIcons.length]
}

const getSafeCount = async (
  payload: Awaited<ReturnType<typeof getPayload>>,
  collectionSlug: string,
) => {
  try {
    const res = await payload.count({
      collection: collectionSlug as any,
    })
    return res.totalDocs
  } catch {
    return 0
  }
}

export const AboutBlock = async ({ hero, mission, whyChooseUs }: AboutBlockProps) => {
  const payload = await getPayload({ config: configPromise })

  // Apne payload.config.ts ke exact collection slugs yahan match kar lena
  const [gamesCount, platformsCount, guidesCount] = await Promise.all([
    getSafeCount(payload, 'games'),
    getSafeCount(payload, 'platforms'),
    getSafeCount(payload, 'guides'),
  ])

  const realStats = [
    { value: `${gamesCount}`, label: 'Games' },
    { value: `${platformsCount}`, label: 'Platforms' },
    { value: `${guidesCount}`, label: 'Guides' },
    { value: 'Daily', label: 'Updates' },
  ]

  const heroImage =
    hero?.backgroundImage && typeof hero.backgroundImage === 'object' ? hero.backgroundImage : null

  const whyImage =
    whyChooseUs?.image && typeof whyChooseUs.image === 'object' ? whyChooseUs.image : null

  // Single title string ko automatic 2 lines (White + Red) mein split karne ke liye
  const rawHeroTitle = (hero?.title || 'Your Ultimate Game Database').trim()
  const titleWords = rawHeroTitle.split(/\s+/)
  const splitPoint = Math.ceil(titleWords.length / 2)
  const heroTitleFirstHalf = titleWords.slice(0, splitPoint).join(' ')
  const heroTitleSecondHalf = titleWords.slice(splitPoint).join(' ')

  return (
    <div className="overflow-hidden bg-[#08090c] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/5">
        {heroImage?.url && (
          <Image
            src={heroImage.url}
            alt={heroImage.alt || 'Gaming background'}
            fill
            priority
            className="object-cover object-right opacity-50"
            sizes="100vw"
          />
        )}

        {/* Left-to-right & bottom dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-[#08090c]/85 to-[#08090c]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-[#08090c]/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="max-w-xl text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ef2b24] sm:text-sm">
              ABOUT KPWIKI
            </p>

            <h1 className="text-3xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block text-white">{heroTitleFirstHalf}</span>
              {heroTitleSecondHalf && (
                <span className="block text-[#ef2b24]">{heroTitleSecondHalf}</span>
              )}
            </h1>

            {hero?.description && (
              <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
                {hero.description}
              </p>
            )}

            {hero?.buttonText && (
              <Link
                href={hero.buttonLink?.url || '/games'}
                className="mt-8 inline-flex items-center gap-2.5 rounded-md border border-[#ef2b24] bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#ef2b24] transition-all duration-200 hover:bg-[#ef2b24] hover:text-white sm:text-sm"
              >
                <span>{hero.buttonText}</span>
                <FiArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION + STATS STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        {/* Heading + Short Red Underline */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
            {mission?.title || 'OUR MISSION'}
          </h2>
          <div className="mx-auto mt-2.5 mb-4 h-[2px] w-12 bg-[#ef2b24]" />
          {mission?.description && (
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              {mission.description}
            </p>
          )}
        </div>

        {/* Mission Cards: Mobile 1-col horizontal | Tablet 2x2 horizontal | Desktop 4-col centered */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mission?.features?.map((feature, index) => (
            <div
              key={feature.id || index}
              className="flex flex-row items-start gap-4 rounded-xl border border-white/10 bg-[#0d0f14] p-6 text-left transition-colors duration-200 hover:border-[#ef2b24]/40 lg:flex-col lg:items-center lg:text-center"
            >
              <div className="mt-0.5 lg:mt-0 lg:mb-1">{getMissionIcon(feature.title, index)}</div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Strip (Real DB Counts) */}
        <div className="mt-5 rounded-xl border border-white/10 bg-[#0d0f14] px-6 py-6 sm:mt-6 sm:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 md:grid-cols-4">
            {realStats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center justify-start gap-3.5 md:justify-center"
              >
                {getStatIcon(stat.label, index)}
                <div>
                  <p className="text-xl font-bold leading-none text-white sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-400 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY KPWIKI SECTION */}
      <section className="mx-auto max-w-7xl px-5 pt-2 pb-16 sm:px-8 md:pb-24 lg:px-12">
        <h2 className="mb-8 text-left text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl md:mb-10 lg:text-center">
          {whyChooseUs?.title || 'WHY KPWIKI?'}
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Features List */}
          <div>
            {whyChooseUs?.description && (
              <p className="mb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {whyChooseUs.description}
              </p>
            )}

            <ul className="space-y-6">
              {whyChooseUs?.points?.map((point, index) => (
                <li key={point.id || index} className="flex items-start gap-3.5">
                  <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ef2b24]" />
                  <div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">{point.title}</h3>
                    {point.description && (
                      <p className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                        {point.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Gaming Setup Image */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0f14]">
            {whyImage ? (
              <Media resource={whyImage} imgClassName="h-64 w-full object-cover sm:h-72 lg:h-80" />
            ) : (
              <div className="flex h-64 items-center justify-center text-sm text-zinc-500 sm:h-72 lg:h-80">
                Add an image from Payload CMS
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
