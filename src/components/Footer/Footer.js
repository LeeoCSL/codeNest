import { FooterContainer, FooterLink } from './styled'

export default function Footer() {
  return (
   <FooterContainer>
  © 2025 CodeNest <span style={{ margin: '0 8px' }}>|</span>
  <FooterLink
    href="https://www.linkedin.com/in/leonardo-ribeiro/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </FooterLink>
</FooterContainer>
  )
}
