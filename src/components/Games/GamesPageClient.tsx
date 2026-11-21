'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { CldImage } from 'next-cloudinary'

import type { Game, Media } from '@/payload-types'

import gamesCollage from '@/assets/games-college.png'

import {
  FiSearch,
  FiSliders,
  FiGrid,
  FiList,
  FiChevronDown,
  FiX,
  FiStar,
  FiCalendar,
  FiLayers,
  FiMonitor,
  FiTag,
  FiAward,
  FiTrendingUp,
  FiClock,
  FiZap,
  FiCompass,
  FiBookOpen,
  FiTarget,
  FiCpu,
  FiActivity,
  FiEye,
} from 'react-icons/fi'
import { FaAndroid, FaApple, FaPlaystation, FaXbox } from 'react-icons/fa'
import { BsNintendoSwitch } from 'react-icons/bs'

type Props = {
  games: Game[]
}

const categories = [
  { label: 'All Games', icon: FiGrid },
  { label: 'Popular Games', icon: FiTrendingUp },
  { label: 'Upcoming Games', icon: FiClock },
  { label: 'Top Rated Games', icon: FiAward },
]

const platforms = [
  { label: 'PC', icon: FiMonitor },
  { label: 'PlayStation 5', icon: FaPlaystation },
  { label: 'PlayStation 4', icon: FaPlaystation },
  { label: 'PlayStation 3', icon: FaPlaystation },
  { label: 'Xbox Series X|S', icon: FaXbox },
  { label: 'Xbox One', icon: FaXbox },
  { label: 'Xbox 360', icon: FaXbox },
  { label: 'Nintendo Switch', icon: BsNintendoSwitch },
  { label: 'Android', icon: FaAndroid },
  { label: 'iOS', icon: FaApple },
]

const genres = [
  { label: 'Action', icon: FiZap },
  { label: 'Adventure', icon: FiCompass },
  { label: 'RPG', icon: FiBookOpen },
  { label: 'Racing', icon: FiActivity },
  { label: 'Shooter', icon: FiTarget },
  { label: 'Strategy', icon: FiCpu },
  { label: 'Sports', icon: FiAward },
  { label: 'Horror', icon: FiEye },
]

export default function GamesPageClient({ games }: Props) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Games')
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [sort, setSort] = useState('newest')
  const [modalOpen, setModalOpen] = useState(false)

  const [releaseYear, setReleaseYear] = useState('')
  const [minRating, setMinRating] = useState('')
  const [developer, setDeveloper] = useState('')
  const [publisher, setPublisher] = useState('')
  const [featuredOnly, setFeaturedOnly] = useState(false)

  const toggleValue = (
    value: string,
    selected: string[],
    setSelected: (values: string[]) => void,
  ) => {
    setSelected(
      selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value],
    )
  }

  const filteredGames = useMemo(() => {
    let result = [...games]

    if (search.trim()) {
      const query = search.toLowerCase()

      result = result.filter((game) =>
        [
          game.title,
          game.shortDescription,
          game.developer,
          game.publisher,
          ...(game.genres || []),
          ...(game.platforms || []),
        ]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query)),
      )
    }

    if (selectedPlatforms.length) {
      result = result.filter((game) =>
        selectedPlatforms.some((platform) =>
          (game.platforms || []).some((item) =>
            String(item).toLowerCase().includes(platform.toLowerCase()),
          ),
        ),
      )
    }

    if (selectedGenres.length) {
      result = result.filter((game) =>
        selectedGenres.some((genre) =>
          (game.genres || []).some((item) => String(item).toLowerCase() === genre.toLowerCase()),
        ),
      )
    }

    if (selectedCategory === 'Popular Games') {
      result = result.filter((game) => Number(game.rating || 0) >= 8)
    }

    if (selectedCategory === 'Top Rated Games') {
      result = result.filter((game) => Number(game.rating || 0) >= 9)
    }

    if (selectedCategory === 'Upcoming Games') {
      result = result.filter((game) => game.releaseDate && new Date(game.releaseDate) > new Date())
    }

    if (releaseYear) {
      result = result.filter(
        (game) =>
          game.releaseDate && new Date(game.releaseDate).getFullYear() === Number(releaseYear),
      )
    }

    if (minRating) {
      result = result.filter((game) => Number(game.rating || 0) >= Number(minRating))
    }

    if (developer.trim()) {
      result = result.filter((game) =>
        String(game.developer || '')
          .toLowerCase()
          .includes(developer.toLowerCase()),
      )
    }

    if (publisher.trim()) {
      result = result.filter((game) =>
        String(game.publisher || '')
          .toLowerCase()
          .includes(publisher.toLowerCase()),
      )
    }

    if (featuredOnly) {
      result = result.filter((game) => Boolean(game.featured))
    }

    if (sort === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    } else if (sort === 'oldest') {
      result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    } else if (sort === 'rating') {
      result.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
    } else if (sort === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [
    games,
    search,
    selectedCategory,
    selectedPlatforms,
    selectedGenres,
    releaseYear,
    minRating,
    developer,
    publisher,
    featuredOnly,
    sort,
  ])

  const resetFilters = () => {
    setReleaseYear('')
    setMinRating('')
    setDeveloper('')
    setPublisher('')
    setFeaturedOnly(false)
  }

  const activeAdvancedFilters = [
    releaseYear,
    minRating,
    developer,
    publisher,
    featuredOnly ? 'featured' : '',
  ].filter(Boolean).length

  const getCover = (game: Game) => {
    if (game.cloudinaryPublicId) {
      return 'cloudinary'
    }

    if (game.coverImage && typeof game.coverImage === 'object' && (game.coverImage as Media).url) {
      return (game.coverImage as Media).url!
    }

    return null
  }

  return (
    <main className="min-h-screen bg-[#0b0b0d] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        {/* Page Heading / Hero Banner */}
        <div className="relative mb-6 flex max-w-[68rem] min-h-52 overflow-hidden rounded-xl border border-white/10 px-5 py-8 text-center items-center left-72">
          <Image
            src={gamesCollage}
            alt="Gaming universe background"
            fill
            priority
            className="object-cover transition duration-500"
          />

          {/* Black Overlay - 70% */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-red-500 sm:text-[10px]">
              Explore the Gaming Universe
            </p>

            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">All Games</h1>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-gray-300 sm:text-sm">
              Discover games, explore genres, and find your next gaming adventure.
            </p>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="space-y-7 self-start -mt-58 pt-0">
            {/* Categories */}
            <section>
              <div className="flex items-center gap-2.5 mb-3">
                <FiLayers className="text-red-500" size={17} />
                <h2 className="text-sm font-black uppercase tracking-widest">Categories</h2>
              </div>
              <div className="space-y-1">
                {categories.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => setSelectedCategory(label)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                      selectedCategory === label
                        ? 'bg-red-500/15 font-bold text-red-500'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon size={17} />
                    {label}
                  </button>
                ))}
              </div>
            </section>
            {/* Platforms */}
            <section>
              <div className="flex items-center gap-2.5 mb-4">
                <FiMonitor className="text-red-500" size={17} />
                <h2 className="text-sm font-black uppercase tracking-widest">Platforms</h2>
              </div>

              <div className="space-y-3">
                {platforms.map(({ label, icon: Icon }) => (
                  <label
                    key={label}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-400 hover:text-white"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPlatforms.includes(label)}
                      onChange={() => toggleValue(label, selectedPlatforms, setSelectedPlatforms)}
                      className="accent-red-500"
                    />
                    <Icon size={16} className="text-gray-500" />
                    {label}
                  </label>
                ))}
              </div>
            </section>
            {/* Genres */}
            <section>
              <div className="flex items-center gap-2.5 mb-4">
                <FiTag className="text-red-500" size={17} />
                <h2 className="text-sm font-black uppercase tracking-widest">Genres</h2>
              </div>

              <div className="space-y-3">
                {genres.map(({ label, icon: Icon }) => (
                  <label
                    key={label}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-400 hover:text-white"
                  >
                    <input
                      type="checkbox"
                      checked={selectedGenres.includes(label)}
                      onChange={() => toggleValue(label, selectedGenres, setSelectedGenres)}
                      className="accent-red-500"
                    />
                    <Icon size={16} className="text-gray-500" />
                    {label}
                  </label>
                ))}
              </div>
            </section>
            {/* Game of the Week */}
            {games.find((game) => game.featured) && (
              <section className="overflow-hidden rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/15 to-transparent">
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-red-500">
                      <FiAward size={15} />
                      Featured Pick
                    </p>
                  </div>

                  <h3 className="text-lg font-black">
                    {games.find((game) => game.featured)?.title}
                  </h3>

                  <p className="mt-2 text-xs text-gray-400">Game of the Week</p>

                  <Link
                    href={`/games/${games.find((game) => game.featured)?.slug}`}
                    className="mt-4 inline-block text-xs font-bold text-red-500 hover:text-orange-400"
                  >
                    Explore Game →
                  </Link>
                </div>
              </section>
            )}
          </aside>

          {/* Games Content */}
          <section className="min-w-0">
            {/* Search and Controls */}
            <div className="flex flex-col gap-3 xl:flex-row">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search games, developers, genres..."
                  className="w-full rounded-xl border border-white/10 bg-[#151518] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-600 focus:border-red-500"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#151518] px-4 py-3 text-sm hover:border-red-500"
                >
                  <FiSliders />
                  Filters
                  {activeAdvancedFilters > 0 && (
                    <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-black">
                      {activeAdvancedFilters}
                    </span>
                  )}
                </button>

                <div className="relative">
                  <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <select
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                    className="h-full appearance-none rounded-xl border border-white/10 bg-[#151518] py-3 pl-4 pr-9 text-sm text-gray-300 outline-none focus:border-red-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="rating">Top Rated</option>
                    <option value="title">Name A-Z</option>
                  </select>
                </div>

                <div className="flex rounded-xl border border-white/10 bg-[#151518] p-1">
                  <button
                    onClick={() => setView('grid')}
                    aria-label="Grid view"
                    className={`rounded-lg p-2.5 ${
                      view === 'grid' ? 'bg-red-500 text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FiGrid />
                  </button>

                  <button
                    onClick={() => setView('list')}
                    aria-label="List view"
                    className={`rounded-lg p-2.5 ${
                      view === 'list' ? 'bg-red-500 text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FiList />
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-5 mt-8 flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Showing <span className="font-bold text-white">{filteredGames.length}</span> games
              </p>
            </div>

            {/* Game Cards */}
            {filteredGames.length > 0 ? (
              <div
                className={
                  view === 'grid'
                    ? 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
                    : 'flex flex-col gap-4'
                }
              >
                {filteredGames.map((game) => {
                  const cover = getCover(game)

                  return (
                    <Link
                      key={game.id}
                      href={`/games/${game.slug}`}
                      className={`group overflow-hidden rounded-xl border border-white/10 bg-[#0b1018] transition hover:border-white/25 hover:bg-[#111a26] ${
                        view === 'grid' ? 'flex flex-col' : 'flex items-center gap-4 p-3'
                      }`}
                    >
                      {/* Game Poster */}
                      <div
                        className={`relative shrink-0 overflow-hidden bg-black ${
                          view === 'grid' ? 'aspect-[3/4] w-full' : 'h-24 w-20 rounded-lg'
                        }`}
                      >
                        {game.cloudinaryPublicId ? (
                          <CldImage
                            src={game.cloudinaryPublicId}
                            alt={game.title}
                            fill
                            crop="fill"
                            sizes="(max-width: 768px) 100vw, 300px"
                            className="object-cover transition duration-300 group-hover:scale-[1.03]"
                          />
                        ) : cover ? (
                          <Image
                            src={cover}
                            alt={game.title}
                            fill
                            className="object-cover transition duration-300 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}

                        {/* Grid: Text inside poster */}
                        {view === 'grid' && (
                          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent px-3 pb-3 pt-12">
                            {game.featured && (
                              <span className="mt-1 inline-flex items-center gap-1 rounded bg-yellow-400/10 px-2 py-0.5 text-[10px] font-semibold text-yellow-400">
                                <FiStar size={10} />
                                Featured
                              </span>
                            )}
                            <h3 className="text-sm font-semibold text-white">{game.title}</h3>
                            <div className="mt-1 flex items-center gap-1 text-xs text-gray-300">
                              <FiCalendar size={12} />
                              <span>
                                {game.releaseDate
                                  ? new Date(game.releaseDate).getFullYear()
                                  : 'N/A'}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* List: Text outside poster */}
                      {view === 'list' && (
                        <div className="flex min-w-0 flex-1 items-center gap-2">
                          <div className="min-w-0 flex-1">
                            <h3 className="truncate text-sm font-semibold text-white">
                              {game.title}
                            </h3>
                            {game.featured && (
                              <span className="mt-1 inline-flex items-center gap-1 rounded bg-yellow-400/10 px-2 py-0.5 text-[10px] font-semibold text-yellow-400">
                                <FiStar size={10} />
                                Featured
                              </span>
                            )}
                            <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                              <FiCalendar size={12} />
                              <span>
                                {game.releaseDate
                                  ? new Date(game.releaseDate).getFullYear()
                                  : 'N/A'}
                              </span>
                            </div>
                          </div>
                          <FiChevronDown className="-rotate-90 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-white" />
                        </div>
                      )}

                      {/* Grid Arrow */}
                      {view === 'grid' && (
                        <FiChevronDown className="absolute right-3 top-3 -rotate-90 text-white opacity-0 transition group-hover:opacity-100" />
                      )}
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-white/10 bg-[#151518] px-5 py-20 text-center">
                <h3 className="text-xl font-black">No Games Found</h3>
                <p className="mt-2 text-sm text-gray-500">Try changing your search or filters.</p>

                <button
                  onClick={() => {
                    setSearch('')
                    setSelectedCategory('All Games')
                    setSelectedPlatforms([])
                    setSelectedGenres([])
                    resetFilters()
                  }}
                  className="mt-5 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-bold text-black hover:bg-orange-400"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Advanced Filter Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-modal-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#17171b] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 id="filter-modal-title" className="text-xl font-black uppercase">
                  Advanced Filters
                </h2>
                <p className="mt-1 text-xs text-gray-500">Refine your game discovery</p>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close filters"
                className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="space-y-5">
              {/* Release Year */}
              <div>
                <label className="mb-2 block text-sm font-bold">Release Year</label>
                <input
                  type="number"
                  value={releaseYear}
                  onChange={(event) => setReleaseYear(event.target.value)}
                  placeholder="e.g. 2025"
                  className="w-full rounded-lg border border-white/10 bg-[#0b0b0d] px-4 py-3 text-sm outline-none focus:border-red-500"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="mb-2 block text-sm font-bold">Minimum Rating</label>
                <select
                  value={minRating}
                  onChange={(event) => setMinRating(event.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#0b0b0d] px-4 py-3 text-sm outline-none focus:border-red-500"
                >
                  <option value="">Any Rating</option>
                  <option value="5">5+ / 10</option>
                  <option value="6">6+ / 10</option>
                  <option value="7">7+ / 10</option>
                  <option value="8">8+ / 10</option>
                  <option value="9">9+ / 10</option>
                </select>
              </div>

              {/* Developer */}
              <div>
                <label className="mb-2 block text-sm font-bold">Developer</label>
                <input
                  value={developer}
                  onChange={(event) => setDeveloper(event.target.value)}
                  placeholder="Search developer..."
                  className="w-full rounded-lg border border-white/10 bg-[#0b0b0d] px-4 py-3 text-sm outline-none focus:border-red-500"
                />
              </div>

              {/* Publisher */}
              <div>
                <label className="mb-2 block text-sm font-bold">Publisher</label>
                <input
                  value={publisher}
                  onChange={(event) => setPublisher(event.target.value)}
                  placeholder="Search publisher..."
                  className="w-full rounded-lg border border-white/10 bg-[#0b0b0d] px-4 py-3 text-sm outline-none focus:border-red-500"
                />
              </div>

              {/* Featured */}
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-[#0b0b0d] p-4 text-sm">
                <input
                  type="checkbox"
                  checked={featuredOnly}
                  onChange={(event) => setFeaturedOnly(event.target.checked)}
                  className="accent-red-500"
                />
                Show Featured Games Only
              </label>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 rounded-lg border border-white/10 py-3 text-sm font-bold text-gray-300 transition hover:bg-white/5"
              >
                Reset
              </button>

              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 rounded-lg bg-red-500 py-3 text-sm font-black text-black transition hover:bg-orange-400"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
