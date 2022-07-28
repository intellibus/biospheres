import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Biospheres Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'biospheres');
});

export const { run } = test;
