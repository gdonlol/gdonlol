import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Markdown from 'react-markdown'

export const ProjectView = ({projectJson}: {projectJson:any}) => {

  const { markdown } = useParams()
  const [mdString, setMdString] = useState('')
  const projectObj = projectJson.find((curr: any) => {
    return curr.markdown === markdown
  })

  
  useEffect(() => {
    const getMdData = async () => {
      const response = await fetch(`/md/${markdown}.txt`)
      const missingCheck = response.headers.get("content-type") || ''
      if (missingCheck.includes('text/plain')){
        setMdString(await response.text())
      }
    }
    getMdData()
  }, [])

  return (
    <div id='md' style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      {!mdString && <p className='loading'>Loading...</p>}
      {(mdString && projectObj.demovid) && 
      <div className="videoWrapper">
        <iframe
          src={projectObj.demovid}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      }
      {mdString && <div style={{maxWidth: '853px', padding: '16px 16px 64px 16px'}}>
        {projectObj.link !== '' && <p>Check it out here: <a href={projectObj.link}>{projectObj.link}</a></p>}
        <Markdown components={{img:({node,...props})=><img style={{maxWidth:'100%'}}{...props}/>}}
        >{mdString}</Markdown>
      </div>}
    </div>
  )
}
