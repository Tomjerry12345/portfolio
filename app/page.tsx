import {
  profile,
  webProjects,
  mobileProjects,
  experience,
  skills,
  education,
  type Project,
} from "@/lib/data";

function ProjectRow({ p }: { p: Project }) {
  return (
    <li className="row">
      <span className="when">{p.year}</span>
      <div>
        <h3>{p.name}</h3>
        <p>{p.summary}</p>
        <p className="meta">{p.stack}</p>
        {(p.live || p.code || p.note) && (
          <p className="links">
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                Open live site
              </a>
            )}
            {p.code && (
              <a href={p.code} target="_blank" rel="noopener noreferrer">
                View code on GitHub
              </a>
            )}
            {p.note && <span className="meta">{p.note}</span>}
          </p>
        )}
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="intro">{profile.intro}</p>
        <p className="links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      <section aria-labelledby="web">
        <h2 id="web">Web projects</h2>
        <ul className="list">
          {webProjects.map((p) => (
            <ProjectRow key={p.name} p={p} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="mobile">
        <h2 id="mobile">Mobile projects</h2>
        <ul className="list">
          {mobileProjects.map((p) => (
            <ProjectRow key={p.name} p={p} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="work">
        <h2 id="work">Experience</h2>
        <ul className="list">
          {experience.map((e) => (
            <li className="row" key={e.title + e.period}>
              <span className="when">{e.period}</span>
              <div>
                <h3>{e.title}</h3>
                <p className="meta">{e.place}</p>
                <p>{e.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="edu">
        <h2 id="edu">Education</h2>
        <p>
          <strong>{education.degree}</strong>
          <br />
          {education.school}
          <br />
          <span className="meta">{education.detail}</span>
        </p>
      </section>

      <footer>
        <p>
          Based in {profile.location}. Write to{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </footer>
    </main>
  );
}
