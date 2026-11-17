'use client'

import { useEffect, useRef } from 'react'

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

import { Kbd } from '@/components/ui/kbd'
import { FiSearch } from 'react-icons/fi'

interface SearchInputProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export function SearchInput({ placeholder, onSearch, className }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleShortcut)

    return () => {
      window.removeEventListener('keydown', handleShortcut)
    }
  }, [])

  return (
    <div className="w-full max-w-xs">
      <InputGroup>
        <InputGroupInput ref={inputRef} placeholder={placeholder} type="text" />

        <InputGroupAddon>
          <FiSearch />
        </InputGroupAddon>

        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
