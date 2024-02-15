import { type Doc, type SpaceXAPIResponse } from '@interface/api'

export const getLatestLaunches = async (): Promise<Array<Doc>> => {
  const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      options: {
        limit: 10,
        sort: { date_unix: 'asc' }
      }
    })
  })
  const { docs }: SpaceXAPIResponse = await response.json()
  return docs
}

export const getLaunchById = async (id: string): Promise<Doc> => {
  const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
  const doc: Doc = await response.json()
  return doc
}