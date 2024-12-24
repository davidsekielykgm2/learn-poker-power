import { useState } from 'react';
import { useAuth } from './useAuth';

import { LoginCredentials } from '../services/auth';
import { useLoginQueries } from './useLoginQueries';

import { validateDTO } from '../validations/utils';
import { LoginDTO } from '../validations/LoginDTO';

export const useLogin = () => {
  const { handleLoginResponse } = useAuth();
  const { mutateAsync, isLoading, loginError } = useLoginQueries();

  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleEmailChange = (email: string) => {
    setFormData(prev => ({ ...prev, email }));
    setValidationErrors([]);
  };

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    setValidationErrors([]);
  };

  const handleLogin = async () => {
    try {
      setValidationErrors([]);

      const loginDTO = new LoginDTO(formData);
      const { isValid, errors: dtoErrors } = await validateDTO(loginDTO);

      if(!isValid) {
        setValidationErrors(dtoErrors);
        console.error(dtoErrors);
        return;
      }

      const response = await mutateAsync(formData);
      console.log({response});

      handleLoginResponse(response);
    } catch (error) {
      console.error(error);
      setValidationErrors([ 'An unexpected error occurred' ]);
    }
  };

  return {
    formData,
    validationErrors,

    isLoading,
    loginError,

    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
};
