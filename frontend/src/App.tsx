import './App.css'
import './project-card.css'
import './ProjectCard'
import ProjectCard from './ProjectCard'

function App() {

  return (
    <>
      <div className='hero'>
        <div className='hero-content'>
          <h1>Gdon.lol</h1>
          <div style={{display: 'flex', gap: 50, justifyContent: 'center'}} className='hero-links'>
            <a href="#projects">Projects</a>
            <a href="https://github.com/gdonlol">Github</a>
            <a href="https://linktr.ee/gdonlol">Linktree</a>
          </div>
        </div>
      </div>

      <div className='projects' id='projects'>
        <ProjectCard
          name={'scoremyrelic.com'}
          desc={"Honkai: Star Rail account stats, profiles & relic scorer."}
          link={"https://www.scoremyrelic.com"}
          thumb={"https://media.discordapp.net/attachments/748345145526845522/1252709506090008616/231274324324.png?ex=66733424&is=6671e2a4&hm=238ccc4bd68648d3fe1d465f1cc3b91bb7a16b7e3e07d0f851bfc206d3504bdd&=&format=webp&quality=lossless"}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        <ProjectCard
          name={'W.I.P.'}
          desc={"Coming soon"}
          link={"/"}
          thumb={""}
        />
        
        </div>
    </>
  )
}

export default App
