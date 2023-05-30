import { ReactNode } from 'react'
import { IconContainer, InfoAndIconContainer } from './styles'

interface InfoAndIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoAndIcon({ icon, text, iconBg }: InfoAndIconProps) {
  return (
    <InfoAndIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoAndIconContainer>
  )
}
