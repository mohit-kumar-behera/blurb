// import components
import Input from './Input';

const inputComponents = {
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
