import {ActionContext} from './action-context'
import * as util from 'util'
import {getInput} from '@actions/core'

export async function isApproved(actionContext: ActionContext): Promise<void> {
  try {
    const pullNumberString = getInput('pull_number')

    if (!pullNumberString)
      throw Error('This action only works if a PR number is given')

    const pull_number = Number(pullNumberString)

    const reviews = await actionContext.octokit.pulls.listReviews({
      ...actionContext.context.repo,
      pull_number
    })

    actionContext.debug(util.inspect(reviews.data, true, 10))

    actionContext.setOutput(
      'approvedReviews',
      reviews.data
        .filter(review => review.state === 'approved')
        .length.toString()
    )
  } catch (error) {
    actionContext.setFailed(error.message)
  }
}
