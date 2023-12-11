import { NextjsSite, StackContext } from 'sst/constructs';

export function web({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'Site', {
    path: 'dist/apps/web',
    buildCommand: 'exit 0'
  });

  stack.addOutputs({
    URL: site.url,
  });
}
