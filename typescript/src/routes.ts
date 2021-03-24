import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'luiz@gmail.com',
    password: '123456',
    techs: [
      'Node',
      'React',
      // { title: 'JS', experience: 10 }
    ]
  });

  console.log(user.email);

  return res.json({ message: 'hello world' });
}