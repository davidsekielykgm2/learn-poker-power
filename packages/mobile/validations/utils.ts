import { validate } from 'class-validator';

export async function validateDTO<T extends object>(
  instance: T
): Promise<{ isValid: boolean; errors: string[] }> {

  const validationErrors = await validate(instance);

  if (validationErrors.length > 0) {
    const errors = validationErrors.map(error =>
      Object.values(error.constraints || {}).join(', ')
    );

    return {
      isValid: false,
      errors
    };
  }

  return {
    isValid: true,
    errors: []
  };
}
