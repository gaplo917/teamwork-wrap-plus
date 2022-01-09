import * as open from 'open'
import { config } from './config'

const openUrlHandler = (event, url) => {
  if (
    url &&
    !url.startsWith(config.teamworkUrl) &&
    !url.startsWith(config.dashboardUrl) &&
    !url.startsWith(config.supportTicketUrl) &&
    !url.startsWith(config.googleOauth)
  ) {
    event.preventDefault()
    return open(url)
  }
  return true
}

export { openUrlHandler }
