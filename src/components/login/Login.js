import { Component } from "../../core/Component";
import { ComponentClass } from "../../core/ComponentClass";


Component({
  html: `
    <div class="login-comp unknown-user">
      <p>
        please, log in
      </p>
    </div>
  `,
  styles : `
    .login-comp {
      color: red;
    }
  `,
  selector : 'login',
});

export class Login extends ComponentClass {
  constructor() {
    super();
  }
}
