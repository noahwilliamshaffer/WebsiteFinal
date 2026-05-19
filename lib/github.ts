export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  fork: boolean
  visibility: string
}

export async function getPublicRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    }
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=20&type=public`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    )

    if (!res.ok) return []

    const repos: GitHubRepo[] = await res.json()
    return repos.filter((r) => !r.fork).slice(0, 12)
  } catch {
    return []
  }
}

export const langColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Go: '#00add8',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  HTML: '#e34c26',
  CSS: '#563d7c',
}
