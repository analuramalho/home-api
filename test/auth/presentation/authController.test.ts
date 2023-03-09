import { AuthController, type EmailValidatorInterface } from '../../../src/auth/presentation/authController'

class EmailValidatorStub implements EmailValidatorInterface {
  valid (email: string): boolean {
    return true
  }
}

const emailValidatorStub = new EmailValidatorStub()

describe('SignUp', () => {
  test('Should return status 400 when name was not provided', () => {
    const sut = new AuthController(emailValidatorStub)
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

  test('Should return status 400 when email was not provided', () => {
    const sut = new AuthController(emailValidatorStub)
    const requestBody = {
      body: {
        name: 'test_name',
        password: 'test_password',
        passwordConfirm: 'test_password'
      }
    }
    const response = sut.signUp(requestBody)

    expect(response.status).toBe(400)
  })

  test('Should return status 400 when email is not valid', () => {
    jest.spyOn(emailValidatorStub, 'valid').mockReturnValueOnce(false)
    const sut = new AuthController(emailValidatorStub)
    const requestBody = {
      body: {
        name: 'test_name',
        email: 'test_invalid_email',
        password: 'test_password',
        passwordConfirm: 'test_password'
      }
    }
    const response = sut.signUp(requestBody)

    expect(response.status).toBe(400)
  })

  test('Should return status 400 when password was not provided', () => {
    const sut = new AuthController(emailValidatorStub)
    const requestBody = {
      body: {
        name: 'test_name',
        email: 'test_email',
        passwordConfirm: 'test_password'
      }
    }
    const response = sut.signUp(requestBody)

    expect(response.status).toBe(400)
  })

  test('Should return status 400 when passwordConfirm was not provided', () => {
    const sut = new AuthController(emailValidatorStub)
    const requestBody = {
      body: {
        name: 'test_name',
        email: 'test_email',
        password: 'test_password'
      }
    }
    const response = sut.signUp(requestBody)

    expect(response.status).toBe(400)
  })
  test('Should return status 400 when password and passwordConfirm was different', () => {
    const sut = new AuthController(emailValidatorStub)
    const requestBody = {
      body: {
        name: 'test_name',
        email: 'test_email',
        password: 'test_password',
        passwordConfirm: 'test_different_password'
      }
    }
    const response = sut.signUp(requestBody)

    expect(response.status).toBe(400)
  })
})
