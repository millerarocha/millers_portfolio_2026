import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '../../atoms/Button'
import { Avatar } from '../../atoms/Avatar'

export function Hero() {
  return (
    <section className="flex flex-col items-center w-full px-6 pt-10 pb-10 gap-8 md:gap-10">
      {/* Avatar */}
      <Avatar 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb12JLSiaU5yG676aIpW-SFXim0sSgW2eKsFt59hJSIfBtkrrq0vNIp50tDekfCn3gSngmsXNbQiFRSZAUdv0v0zTN9qlI91QWkXebp-C6B9srJJyo73NleDCcK7rtimV0uZ1QHPhR4grg8ZublHu-t2inGYhrMA-St1zh24efA2vrY3Bt_xuZSXyB8IXFtZt_7VnR-89BGLt6mXilMM96iy9f_VG2NZWqumqw9RqCHwvg_CTbwHhqOkwya02_yef6b2muWW5sJUqF"
        alt="Juan's Profile"
        status="online"
        className="md:h-40 md:w-40"
      />

      {/* Texts */}
      <div className="flex flex-col items-center text-center gap-3 md:gap-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
          JUAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">[SURNAME]</span>
        </h1>
        
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 md:w-16 bg-accent/50"></span>
          <p className="text-accent text-sm md:text-base font-bold tracking-wider uppercase">Mechatronics & Web</p>
          <span className="h-px w-8 md:w-16 bg-accent/50"></span>
        </div>
        
        <p className="text-text-secondary text-base md:text-lg font-body leading-relaxed max-w-md md:max-w-xl mt-2">
          Senior professional specializing in high-stakes projects like <strong className="text-white">INDRA/BBVA GLOMO</strong>, bridging hardware precision with software scalability.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex w-full md:w-auto gap-4 mt-2">
        <Button className="flex-1 md:flex-none md:w-40" variant="primary">
          <span>View Projects</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button className="flex-1 md:flex-none md:w-40" variant="glass">
          <Mail className="mr-2 w-4 h-4" />
          <span>Contact</span>
        </Button>
      </div>
    </section>
  )
}
