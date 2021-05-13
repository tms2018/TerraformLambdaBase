import pino from 'pino';
import {ConnectContactFlowEvent, Context} from 'aws-lambda';
import {Config} from '../config';
import {Example} from './example';

const logger: pino.Logger = pino({
  name: 'CallRecording',
  level: Config.Instance.logLevel
});

export async function handler(event: ConnectContactFlowEvent, context: Context) {
  const lambda = new Example(event, context, logger, Config.Instance);
  return await lambda.processEvent();
}
