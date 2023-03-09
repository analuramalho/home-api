interface HttpRequest {
  body: any
}

interface HttpResponse {
  status: number
}

export class AuthController {
  signUp (requestBody: HttpRequest): HttpResponse {
    if (requestBody.body.name === null || requestBody.body.name === undefined) {
      return { status: 400 }
    }

    return { status: 200 }
  }
}
