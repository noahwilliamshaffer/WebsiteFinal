import { getPublicRepos, langColors } from '@/lib/github'
import ProjectsClient from './ProjectsClient'

export default async function Projects() {
  const repos = await getPublicRepos('noahwilliamshaffer')
  return <ProjectsClient repos={repos} />
}
