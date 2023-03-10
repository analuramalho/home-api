export interface Rule {
  validate: (requestBody: any) => Error | null
}
