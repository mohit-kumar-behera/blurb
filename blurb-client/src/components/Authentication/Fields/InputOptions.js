// import components
import Input from './Input';

const inputComponents = {
  firstname: (
    <Input
      type="text"
      placeholder="John"
      className="user-input"
      spellCheck="false"
      required
    />
  ),
  lastname: (
    <Input
      type="text"
      placeholder="Doe"
      className="user-input"
      spellCheck="false"
      required
    />
  ),
  text: (
    <Input
      type="text"
      placeholder="Enter your text"
      className="user-input"
      spellCheck="false"
      required
    />
  ),
  email: (
    <Input
      type="email"
      placeholder="johndoe567@gmail.com"
      className="user-input"
      spellCheck="false"
      required
    />
  ),
  password: (
    <Input
      type="password"
      placeholder="************"
      className="user-input"
      spellCheck="false"
      required
    />
  ),
};

export default inputComponents;
