import type { Metadata } from 'next'

import { pressStart2P } from '../font'

export const metadata: Metadata = {
  title: 'koodalanne CV',
  description: 'Curriculum Vitae',
}

export default function cv() {
  return (
    <section id="curriculum-vitae">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <div className={pressStart2P.className}>
          <h1 className="text-4xl text-miamiPink mb-4">Curriculum Vitae</h1>
        </div>

        <div className="bg-miamiBlue w-full md:w-3/4 lg:w-3/4 p-4 md:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl mb-4">Bio</h2>
          <div className="mb-4">
            <p>
              Experienced Tech Lead and Fullstack Web Developer with a track record in leading
              cross-functional teams and crafting dynamic web applications. Proficient in front-end
              and back-end technologies. Experienced in cloud and devops engineering. Dedicated to
              driving teams and individuals forward at delivering high quality software in close
              collaboration with the client. Interested to learn new technologies and domains to
              become even better leader and developer.
            </p>
          </div>
        </div>

        <div className="bg-miamiBlue w-full md:w-3/4 lg:w-3/4 mt-8 p-4 md:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl mb-4">Work experience</h2>
          <div className="mb-6">
            <div className="flex justify-between text-2xl">
              <div className="font-bold">koodalanne Oy</div>
              <div>11/2023 -</div>
            </div>
            <div className="text-sm">Helsinki, Finland</div>
            <p className="mt-4">Freelance software development in a senior/lead position.</p>
            <div className="mt-2">
              <div className="mt-4 font-bold text-lg">
                <a
                  href="https://koodalanne.com"
                  className="mt-8 hover:text-miamiPink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  koodalanne.com
                </a>
                <span> 2023</span>
              </div>
              <p>
                Solo project. Koodalanne company website.
                <br />
                <br />
                <strong>Skills:</strong> NextJS, Typescript, TailwindCSS, Vercel
              </p>
            </div>
            <div className="mt-4">
              <div className="mt-4 font-bold text-lg">
                <a
                  href="https://pilvilinnanleipomo.fi"
                  className="mt-8 hover:text-miamiPink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pilvilinnanleipomo.fi
                </a>
                <span> 2023</span>
              </div>
              <p>
                Solo project. Pilvilinnan leipomo home bakery website.
                <br />
                <br />
                <strong>Skills:</strong> NextJS, Typescript, GraphQL, CSS Modules, Contentful CMS,
                Vercel
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-2xl">
              <div className="font-bold">Futurice Oy</div>
              <div>8/2016 - 11/2023</div>
            </div>
            <div className="text-sm">Helsinki / Tampere, Finland</div>
            <div className="mt-4 font-bold text-lg">Tech Lead 2022-2023</div>
            <p>
              Technical lead in international multidisciplinary team working at energy sector
              projects. My responsibilities were leading the team&apos;s technical planning and
              execution towards organisation goals, architectural design, frontend web development
              and cloud engineering. I provided support for product owner and the team, driving
              continuous improvement through streamlined processes and methodologies.
              <br />
              <br />
              <strong>Skills:</strong> NodeJS, NextJS, React, Typescript, CSS, GraphQL, Contentful
              CMS, Heroku, Azure, Azure Devops, Github Actions, Terraform, Pulumi, Git, Jira, Tech
              lead, Scrum Master, Scrum, Software Architecture, Agile
            </p>
            <div className="mt-4 font-bold text-lg">Project Lead 2019-2022</div>
            <p>
              Project lead for several multidisciplinary teams working at retail sector projects. I
              took care that projects were delivered from idea to production ready products
              delivering high value for end users while managing the teams and people. I did team
              leading, project management, defining product vision, specification, architectural
              planning, full-stack web development, testing, cloud engineering, scrum mastering,
              problem solving, customer support and selling generating Futurice a high revenue for
              multiple years.
              <br />
              <br />
              <strong>Skills:</strong> NodeJS, React, Typescript, SQL, HTML, CSS, PostgreSQL, Azure, Azure
              Devops, Azure Data Factory, Cypress, Terraform, Docker, Git, Jira, Project Management,
              Scrum Master, Scrum, Software Architecture, Systems Integrations, Agile
            </p>
            <div className="mt-4 font-bold text-lg">Frontend Web Developer 2016-2019</div>
            <p>
              Frontend web developer in an automation industry project. Member of a small team part
              of a big multivendor delivery organisation consisting of multiple teams creating one
              large scale product. Work focusing on web frontend development, refactoring and
              driving technology changes and culture forward.
              <br />
              <br />
              <strong>Skills:</strong> NodeJS, React, Backbone/MarionetteJS, JavaScript, TypeScript,
              Robot framework, Jenkins, Git, Jira, Scrum, Agile
            </p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-2xl">
              <div className="font-bold">Leanware Oy</div>
              <div>2/2012 - 08/2016</div>
            </div>
            <div className="text-sm">Tampere, Finland</div>
            <div className="mt-4 font-bold text-lg">Fullstack Developer / Product Owner</div>
            <p>
              Fullstack developer in multiple logistic and manufacturing industry projects.
              Participating in all software development phases from specification to maintenance and
              customer support. I worked on multiple desktop and web applications and acquired solid
              developer skills growing from a junior to senior mentoring others. Acted also as a
              product owner for one delivery project gaining valuable knowledge of product creation
              process.
              <br />
              <br />
              <strong>Skills:</strong> C#/.NET, Windows Forms, SQL, DB2, Oracle DB, MS SQL, Java, ASP.NET
              MVC, Javascript, jQuery, HTML, CSS, EmberJS, Mentoring, Product Owner, Scrum, Agile
            </p>
          </div>
        </div>

        <div className="bg-miamiBlue w-full md:w-3/4 lg:w-3/4 mt-8 p-4 md:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl mb-4">Education</h2>
          <div className="mb-4">
            <div className="flex justify-between text-lg">
              <div>
                <strong>Master of Science (Tech),</strong> Tampere University of Technology
              </div>
              <div className="text-2xl">2012</div>
            </div>
            <div className="text-sm">Tampere, Finland</div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-lg">
              <div>
                <strong>Matriculation examination,</strong> Tampere classical upper secondary school
              </div>
              <div className="text-2xl">2006</div>
            </div>
            <div className="text-sm">Tampere, Finland</div>
          </div>
        </div>

        <div className="bg-miamiBlue w-full md:w-3/4 lg:w-3/4 mt-8 p-4 md:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl mb-4">Certificates and courses</h2>
          <div className="mb-4">
            <div className="flex justify-between text-lg">
              <div className="font-bold">Azure Fundamentals (AZ-900)</div>
              <div className="text-2xl">2021</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-lg">
              <div className="font-bold">Professional Scrum Product Owner (PSPO)</div>
              <div className="text-2xl">2017</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-lg">
              <div className="font-bold">Certified Scrum Master (CSM)</div>
              <div className="text-2xl">2015</div>
            </div>
          </div>
        </div>

        <div className="bg-miamiBlue w-full md:w-3/4 lg:w-3/4 mt-8 p-4 md:p-8 rounded-lg shadow-md">
          <h2 className="text-3xl mb-4">Languages</h2>
          <div className="mb-4">
            <p>
              <strong>Finnish</strong> - native
              <br />
              <strong>English</strong> - full professional proficiency
              <br />
              <strong>Swedish</strong> - limited working proficiency
            </p>
          </div>
        </div>

        <a href="/" className="mt-8 text-xl text-miamiPink hover:text-miamiBlue">
          Back
        </a>
      </div>
    </section>
  )
}
