import { type RequiredFieldsRule } from './requiredFieldsRule'

export class RequestValidator {
  constructor (
    private readonly rules: RequiredFieldsRule[]
  ) {}

  public validate (requestBody: any): void {
    for (const rule of this.rules) {
      const error = rule.validate(requestBody)
      console.log({ error })

      if (error !== null) {
        throw error
      }
    }
  }
}
