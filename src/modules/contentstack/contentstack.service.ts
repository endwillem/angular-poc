import { Injectable } from '@angular/core';
import * as contentstack from 'contentstack';
import { Config } from './config';


@Injectable()
export class ContentstackService {
  Stack: any = {};
  stackConfig: any = {};
  apiHost: string | undefined = undefined;
  constructor(private config: Config) {
    this.stackConfig = {
      api_key: config.api_key,
      delivery_token: config.delivery_token,
      environment: config.environment
    }
    this.apiHost = config.api_host;
    this.Stack = contentstack.Stack(this.stackConfig);

  }

  public stack() {
    this.Stack = contentstack.Stack(this.stackConfig);
    this.apiHost && (this.Stack.setHost(this.apiHost));
    return this.Stack
  }
}
