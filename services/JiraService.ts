import { Version3Client } from 'jira.js'

const client = new Version3Client({
  baseRequestConfig: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  },
  host: 'https://soenergy.atlassian.net',
  authentication: {
    basic: {
      email: 'maciej.toborek@so.energy',
      apiToken:
        'ATATT3xFfGF0lM6988UhhZybO-W6HWmMjQmKgxW0wsCgzSDqEMzh7ZYSeR316yUYDXT301tjL31jUjoRTobME2Dh0Iwpa-j420BqUxtEn_Qa_ZgJu5O9aktUJ_jtrMJS9HI-qfrofq2h1Le47OqmV8WGpLjfo5F7sn-LQB0fNXRzZ-2oTIETZNI=9734D74C',
    },
  },
})

export const JiraService = {
  async getUser() {
    return await client.myself.getCurrentUser()
  },
  async getIssue(issueIdOrKey: string) {
    return await client.issues.getIssue({ issueIdOrKey })
  },
}
