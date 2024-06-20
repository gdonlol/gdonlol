import ProjectCard from './ProjectCard'

export const Projects = ({projectJson}: {projectJson:any}) => {

  const renderProjects = projectJson.map((curr: any, index: number) => {
    return(
      <ProjectCard
        name={curr.name}
        desc={curr.desc}
        markdown={curr.markdown}
        thumb={curr.thumb}
        key={index}
      />
    )
  })

  return (
    <div className='projects' id='list'>
      {renderProjects}
    </div>
  )
}
