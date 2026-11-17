import clsx from 'clsx'
import icon from '@/assets/icon.svg'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <img
      alt="KP Wiki"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('w-[75px] h-auto object-contain', className)}
      src={icon.src}
    />
  )
}
