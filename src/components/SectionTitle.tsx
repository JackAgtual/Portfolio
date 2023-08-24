import { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
}

function SectionTitle({ children }: SectionTitleProps) {
  return <h1 className="text-4xl font-medium text-center mb-10">{children}</h1>
}

export default SectionTitle
