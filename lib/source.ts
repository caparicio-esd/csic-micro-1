import { loader } from 'fumadocs-core/source';
import { resolveFiles } from 'fumadocs-mdx';
import { docs } from '@/.source';

// fumadocs-core@15 expects `files` as an array, but toFumadocsSource() returns
// it as a lazy function. We resolve the array here while keeping the generic
// Source type (which carries the `body` property) via the cast below.
export const source = loader({
  baseUrl: '/docs',
  source: {
    files: resolveFiles({ docs: docs.docs, meta: docs.meta }),
  } as unknown as ReturnType<typeof docs.toFumadocsSource>,
});
