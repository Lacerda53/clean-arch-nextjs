import { ImageProps } from 'next/image'

export type ImageCardProps = ImageProps & {
  title?: string
  subtitle?: string
}
