import { Component } from "../../core/Component";
import { ComponentClass } from "../../core/ComponentClass";



export class Login extends ComponentClass {
  constructor(data) {
    super(data);
  }
}

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
  constructor : Login
});
