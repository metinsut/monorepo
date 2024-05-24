import { mergeDeepObject } from '@repo/shared';
import defaultConfigs from './default/configs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import _configs from '@brands/dir/configs';

export const configs = mergeDeepObject(defaultConfigs, _configs) as typeof defaultConfigs;
