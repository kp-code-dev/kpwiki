import { getCachedGlobal } from '@/utilities/getGlobals'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

import localFont from 'next/font/local'

const pricedown = localFont({
  src: '../assets/fonts/Pricedown.otf',
  display: 'swap',
})

import { FaYoutube, FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@codeandlifewithkp', icon: <FaYoutube /> },
  { label: 'Instagram', href: 'https://www.instagram.com/kp_code_dev', icon: <FaInstagram /> },
  { label: 'GitHub', href: 'https://www.github.com/kp-code-dev', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kalpeshmevada', icon: <FaLinkedin /> },
  { label: 'Facebook', href: 'https://www.facebook.com/kpcodedev', icon: <FaFacebook /> },
]

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const footerSections = [
    { title: 'EXPLORE', items: footerData?.explore || [] },
    { title: 'ABOUT', items: footerData?.about || [] },
    { title: 'HELP', items: footerData?.help || [] },
    { title: 'LEGAL', items: footerData?.legal || [] },
  ]

  return (
    <footer className="mt-auto border-t border-white/10 bg-black text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1.5fr]">
          {/* BRAND */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2">
              <Logo />
              <span className={`${pricedown.className} text-3xl text-white`}>WIKI</span>
            </div>
            <p className="max-w-xs text-sm leading-6 text-gray-400">
              Your ultimate destination for gaming news, guides, reviews, and everything happening
              in the gaming world.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: reactnode }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-400 transition hover:text-red-500"
                >
                  {reactnode}
                </a>
              ))}
            </div>
          </div>

          {/* FOOTER LINKS */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <details className="group" open>
                <summary className="flex cursor-pointer list-none items-center justify-between border-b border-white/10 py-3 text-sm font-bold tracking-wider xl:cursor-default xl:border-0">
                  {section.title}
                  <span className="text-gray-400 xl:hidden">+</span>
                </summary>

                <nav className="flex flex-col gap-3 py-4 xl:py-2">
                  {section.items.map(({ link }, index) => (
                    <CMSLink
                      key={index}
                      {...link}
                      className="text-sm text-gray-400 transition hover:text-red-500"
                    />
                  ))}
                </nav>
              </details>
            </div>
          ))}

          {/* NEWSLETTER */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider">STAY UPDATED</h3>

            <p className="text-sm leading-6 text-gray-400">
              Subscribe to get the latest gaming news, updates, and guides.
            </p>

            <form className="flex flex-col gap-3 sm:flex-row xl:flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-red-500"
              />
              <button
                type="button"
                className="rounded-md bg-red-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-red-500/60"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-gray-500 md:flex-row">
          <p>© 2026 KPWiki. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <ThemeSelector />
            <span>Made for gamers.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
