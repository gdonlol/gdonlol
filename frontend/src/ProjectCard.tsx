import { HashLink } from 'react-router-hash-link'

const ProjectCard = ({ link, name, desc, thumb, markdown }: { link: string, name: string, desc: string, thumb: string, markdown: string }) => {
  return (
    <a className='project-card' href={link}>
      <h2 style={{ width: "100%" }}>{name}</h2>
      <h3 style={{ width: "100%" }}>{desc}</h3>
      {thumb && <img src={thumb} />}
      <HashLink className="project-details" to={`/project/${markdown}#md`} >
        <span>README.md</span>
      </HashLink>
    </a>
  )
}

export default ProjectCard
