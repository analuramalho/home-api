import { RequiredFieldsRule } from '../../general/presentation/rules/requiredFieldsRule'
import { RequestValidator } from '../../general/presentation/rules/requestValidator'
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
    const requestNameRule = new RequiredFieldsRule(['name', 'email', 'password', 'passwordConfirm'])
    const requestValidator = new RequestValidator([
      requestNameRule
    ])

    try {
      requestValidator.validate(request.body)
    } catch (error) {
      return { status: 400 }
    }

    if (!this.emailValidator.valid(request.body.email)) {
      return { status: 400 }
    }

    if (request.body.password !== request.body.passwordConfirm) {
      return { status: 400 }
    }

    return { status: 200 }
  }
}
