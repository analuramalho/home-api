import { AuthController } from '../../../src/auth/presentation/authController'

describe('SignUp', () => {
  test('Should return status 400 when name was not provided', () => {
    const sut = new AuthController()
    const requestBody = {
      body: {
        email: 'test_email',
        password: 'test_password',
        passwordConfirm: 'test_password'
      }
    }
    const response = sut.signUp(requestBody)

    expect(response.status).toBe(400)
  })
})
