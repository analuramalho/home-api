interface HttpRequest {
  body: any
}

interface HttpResponse {
  status: number
}

export interface EmailValidatorInterface {
  valid: (email: string) => boolean
}

export class AuthController {
  constructor (
    private readonly emailValidator: EmailValidatorInterface
  ) {}

  signUp (request: HttpRequest): HttpResponse {
    if (request.body.name === null || request.body.name === undefined) {
      return { status: 400 }
    }
    if (request.body.email === null || request.body.email === undefined) {
      return { status: 400 }
    }

    if (!this.emailValidator.valid(request.body.email)) {
      return { status: 400 }
    }

    return { status: 200 }
  }
}
