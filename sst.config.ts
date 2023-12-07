import { SSTConfig } from 'sst';
import { web } from './stacks/web';

export default {
  config(_input) {
    return {
      name: 'nx-sst-open-next',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(web);
  },
} satisfies SSTConfig;
