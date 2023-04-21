import { formatDistance } from 'date-fns'

export function getInterval(created_datetime: string): string {
  const distanceFormatted = formatDistance(
    new Date(created_datetime),
    new Date(Date.now()),
    {
      addSuffix: true
    }
  )
  if (distanceFormatted.includes('about')) {
    return distanceFormatted.slice(5)
  }
  return distanceFormatted
}
