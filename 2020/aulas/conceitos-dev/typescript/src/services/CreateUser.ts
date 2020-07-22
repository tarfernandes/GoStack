/**
 * Para criar: name, email, password
 */

 interface TEchObject {
   title: string;
   experience: number;
 }

 interface createUserData {
   name?: string;
   email: string;
   password: string;
   techs: Array<string | TEchObject>;
 }

export default function createUser({ name, email, password }: createUserData) {
  const user = {
    name,
    email,
    password,
  }
  return user;
}