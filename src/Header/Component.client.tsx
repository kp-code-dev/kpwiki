'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

import localFont from 'next/font/local'

import { FaFire } from 'react-icons/fa'
import { FiX, FiSun, FiMoon, FiSearch } from 'react-icons/fi'

const pricedown = localFont({
  src: '../assets/fonts/Pricedown.otf',
  display: 'swap',
})
interface HeaderClientProps {
  data: Header
}

const popularSearches = ['GTA V', 'Minecraft', 'RDR2', 'God of War']

const popularGames = [
  { title: 'GTA V', slug: 'gta-v' },
  { title: 'Minecraft', slug: 'minecraft' },
  { title: 'RDR2', slug: 'rdr2' },
  { title: 'God of War', slug: 'god-of-war' },
  { title: 'Cyberpunk 2077', slug: 'cyberpunk-2077' },
]

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  const filteredPopularGames = popularGames.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }

      if (event.key === 'Escape') {
        setSearchOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [])

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus()
    } else {
      setSearchQuery('')
    }
  }, [searchOpen])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    setHeaderTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="relative z-50 w-full border-b border-white/10 bg-[#05080c] text-white"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-10">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <Logo loading="eager" priority="high" />
          <span className={`${pricedown.className} text-3xl text-white`}>Wiki</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center md:flex">
          <HeaderNav data={data} />
        </div>

        {/* Search + Theme Toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex h-10 w-[20rem] items-center gap-3 rounded-lg border border-white/20 bg-white/[0.03] px-4 text-left text-gray-400 transition hover:border-white/40 hover:bg-white/[0.06]"
          >
            <FiSearch size={18} />
            <span className="flex-1 text-sm">Search Games, Guides...</span>
            <kbd className="rounded-md bg-white/10 px-2 py-1 text-xs">⌘ K</kbd>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-red-500 hover:bg-red-500/10"
          >
            {theme === 'dark' ? (
              <FiSun size={18} className="text-yellow-400" />
            ) : (
              <FiMoon size={18} />
            )}
          </button>
        </div>

        {/* Search Modal */}
        {searchOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 px-4 pt-[12vh] backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <div
              className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#101318] shadow-2xl shadow-black/50"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <FiSearch size={21} className="shrink-0 text-red-500" />

                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search games, guides..."
                  className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-gray-500"
                />

                <kbd className="rounded border border-white/10 px-2 py-1 text-xs text-gray-400">
                  ESC
                </kbd>

                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="ml-1 rounded-md p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                >
                  <FiX size={19} />
                </button>
              </div>

              <div className="max-h-[65vh] overflow-y-auto p-5">
                {/* Popular Searches */}
                <div className="mb-7">
                  <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <FaFire className="text-red-500" size={15} />
                    Popular Searches
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search) => (
                      <button
                        key={search}
                        type="button"
                        onClick={() => setSearchQuery(search)}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Games */}
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                    Popular Games
                  </h3>

                  <div className="space-y-1">
                    {filteredPopularGames.map((game) => (
                      <Link
                        key={game.slug}
                        href={`/games/${game.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="group flex items-center justify-between rounded-lg px-3 py-3 text-sm text-gray-300 transition hover:bg-red-500/10 hover:text-white"
                      >
                        <span>{game.title}</span>
                        <FiSearch size={15} className="text-gray-500 group-hover:text-red-500" />
                      </Link>
                    ))}

                    {filteredPopularGames.length === 0 && (
                      <p className="px-3 py-5 text-center text-sm text-gray-500">
                        No popular games found.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 px-5 py-3 text-xs text-gray-500">
                Search your favourite games and discover more.
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
