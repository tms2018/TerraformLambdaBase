import {ConnectContactFlowEvent, Context} from 'aws-lambda';
import pino from 'pino';
import {Config} from '../config';

export class Example {
  constructor(
    private event: ConnectContactFlowEvent,
    private context: Context,
    private logger: pino.Logger,
    private config: Config
  ) {}

  async processEvent(): Promise<{[key: string]: string}> {
    return {
      result: 'success'
    };
  }
}
