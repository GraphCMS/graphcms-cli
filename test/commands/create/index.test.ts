import {expect, test} from '@oclif/test'

describe('create', () => {
  test
  .stdout()
  .command(['create', 'using-mutations'])
  .it('runs create cmd', ctx => {
    expect(ctx.stdout).to.contain('Downloaded using-mutations')
  })
})
