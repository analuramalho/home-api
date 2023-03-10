import { type Rule } from './rule'

export class CompareFieldsRule implements Rule {
  constructor (
    private readonly fieldA: string,
    private readonly fieldB: string
  ) {}

  public validate (requestBody: any): Error | null {
    if (requestBody[this.fieldA] !== requestBody[this.fieldB]) {
      return new Error(`the ${this.fieldA} and ${this.fieldB} are different.`)
    }
    return null
  }
}
