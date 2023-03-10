import { type Rule } from './rule'

export class RequestValidator {
  constructor (
    private readonly rules: Rule[]
  ) {}

  public validate (requestBody: any): void {
    for (const rule of this.rules) {
      const error = rule.validate(requestBody)

      if (error !== null) {
        throw error
      }
    }
  }
}
