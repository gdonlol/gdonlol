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
      console.log(response.headers.get("content-type"))
      if (response.headers.get("content-type") === 'text/plain'){
        setMdString(await response.text())
      }
    }
    getMdData()
  }, [])

  return (
    <div id='md' style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      {!mdString && <p className='loading'>Loading...</p>}
      {(mdString && projectObj.demovid) && <iframe
        width="853"
        height="480"
        src={projectObj.demovid}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{border: '1px solid #242424', borderRadius: 8, overflow: 'hidden', alignSelf: 'center'}}
      />}
      {mdString && <div style={{maxWidth: '853px', paddingBottom: '64px'}}>
        {projectObj.link !== '' && <p>Check it out here: <a href={projectObj.link}>{projectObj.link}</a></p>}
        <Markdown>{mdString}</Markdown>
      </div>}
    </div>
  )
}
