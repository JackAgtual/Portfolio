import { RefObject } from 'react'

export type DivRef = RefObject<HTMLDivElement> | undefined

export type Section = { name: string; ref: DivRef }
