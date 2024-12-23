import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDTO {
  @IsEmail({}, { message: 'Por favor ingrese un email valido' })
  @IsNotEmpty({ message: 'email es requerido' })
  email: string;

  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @IsNotEmpty({ message: 'contraseña es requerida' })
  password: string;

  constructor(data: { email: string; password: string }) {
    this.email = data.email;
    this.password = data.password;
  }
}
