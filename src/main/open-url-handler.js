import * as open from 'open'
import { config } from './config'

const openUrlHandler = (event, url) => {
  if (url && !url.startsWith(config.teamworkUrl)) {
    event.preventDefault()
    return open(url)
  }
  return true
}

export { openUrlHandler }
