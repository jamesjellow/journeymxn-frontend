import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/pages/dashboard.module.scss'
const Dropdown = dynamic(() => import('../components/dropdown'))

const industries = [
  {
    id: 1,
    value: 'Finance',
  },
  {
    id: 2,
    value: 'Business/Administration',
  },
  {
    id: 3,
    value: 'Creative/Media',
  },
  {
    id: 4,
    value: 'Education/Public Sector',
  },
  {
    id: 5,
    value: 'Healthcare',
  },
  {
    id: 6,
    value: 'Technology',
  },
  {
    id: 7,
    value: 'Service',
  },
  {
    id: 8,
    value: 'Skilled Trade',
  },
  {
    id: 9,
    value: 'Architecture/Engineering',
  },
  {
    id: 10,
    value: 'Public Service',
  },
];
const skills = [
  {
    id: 1,
    value: 'Presentation'
  },
  {
    id: 2,
    value: 'Critical thinking'
  },
  {
    id: 3,
    value: 'Communication'
  },
  {
    id: 4,
    value: 'Negotiation'
  },
  {
    id: 5,
    value: 'Multitasking'
  },
  {
    id: 6,
    value: 'Inductive reasoning'
  },
  {
    id: 7,
    value: 'Ability to work under stress/pressure'
  },
  {
    id: 8,
    value: 'Problem solving'
  },
  {
    id: 9,
    value: 'Flexibility'
  },
  {
    id: 10,
    value: 'Creativity'
  },
  {
    id: 11,
    value: 'Interpersonal'
  },
  {
    id: 12,
    value: 'Analytical'
  },
  {
    id: 13,
    value: 'Public speaking'
  },
  {
    id: 14,
    value: 'Conflict management'
  },
  {
    id: 15,
    value: 'Reasoning'
  },
  {
    id: 16,
    value: 'Persuasion'
  },
  {
    id: 17,
    value: 'Decision making'
  },
  {
    id: 18,
    value: 'Negotiation'
  },
  {
    id: 19,
    value: 'Detail Oriented'
  },
  {
    id: 20,
    value: 'Physical strength'
  },
  {
    id: 21,
    value: 'Basic math skills'
  },
  {
    id: 22,
    value: 'Coordination'
  },
  {
    id: 23,
    value: 'Logical thinking'
  }
]

export default function Dashboard() {
  return (
    <div className="container">
      <Head>
        <title>Journeymxn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles["dash"]}>
        <div className={styles["sidebar"]}>
          <Dropdown title="Industries" items = {industries} multiSelect/>
          <Dropdown title="Skill" items = {skills} multiSelect/>
          <input>
            
          </input>
        </div>
        <div className={styles["content"]}>
          hello
        </div>   
      </section>
    </div>
  )
}
