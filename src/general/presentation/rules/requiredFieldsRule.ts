import { type Rule } from './rule'

export class RequiredFieldsRule implements Rule {
  constructor (
    private readonly fields: string[]
  ) {}

  public validate (requestBody: any): Error | null {
    for (const field of this.fields) {
      if (requestBody[field] === undefined || requestBody[field] === null) {
        return new Error('Missing field ' + field)
      }
    }

    return null
  }
}
