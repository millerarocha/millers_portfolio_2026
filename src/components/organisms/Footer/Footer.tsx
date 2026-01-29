import { useLanguage } from '../../../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="mt-8 text-center px-6 pb-6 w-full">
      <p className="text-white/20 text-xs font-mono">
        © 2026 MILLER A. ROCHA. {t.footer.learnInMotion}
      </p>
    </footer>
  )
}
