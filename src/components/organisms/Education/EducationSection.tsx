import { SectionTitle } from '../../atoms/SectionTitle'

const education = [
  {
    degree: "B.S. Mechatronics Engineering",
    school: "National Polytechnic Institute",
    year: "2005"
  },
  {
    degree: "Full Stack Certification",
    school: "Ironhack Bootcamp",
    year: "2018"
  }
]

export function EducationSection() {
  return (
    <div className="w-full">
      <SectionTitle>EDUCATION</SectionTitle>
      <div className="px-4 flex flex-col gap-3">
        {education.map((item, index) => (
          <div key={index} className="flex items-start justify-between bg-surface-dark p-4 rounded-lg border border-[#2d3b54]">
            <div>
              <p className="text-white font-bold text-base">{item.degree}</p>
              <p className="text-text-secondary text-sm">{item.school}</p>
            </div>
            <span className="text-xs font-mono text-gray-500 bg-background-dark px-2 py-1 rounded">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
