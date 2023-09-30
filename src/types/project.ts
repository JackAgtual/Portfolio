export type Project = {
  name: string
  description: string
  image: string
  madeWith: string[]
  github: string
  deployedLinks?: {
    website: string
    demo: string
  }
}
