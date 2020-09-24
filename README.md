# PR Approved Action

This action returns the number of approvers a PR has

## Inputs

### `pull_number`

**Required** The pull request to query.

## Outputs

### `approvedReviews`

Number of reviews that have have the state "APPROVED"

## Example usage

```yaml
uses: arup-group/action-pr-approved@main
with:
  pull_number: {{ github.event.pull_request.number }}
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
