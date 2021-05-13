import {ConnectContactFlowEvent, Context} from 'aws-lambda';
import {handler} from './index';

describe('example', () => {
  it('should return success when...', async () => {
    const response = await handler({} as unknown as ConnectContactFlowEvent, {} as unknown as Context);
    expect(response).toMatchObject({result: 'success'});
  });
});
