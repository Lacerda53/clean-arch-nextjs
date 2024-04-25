import { ReactNode } from 'react'

export type LoaderProps = {
  loading: boolean
  minHeight?: string
  minWidth?: string
  width?: string
  height?: string
  padding?: string
  children: ReactNode
}
