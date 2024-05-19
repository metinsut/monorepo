import { mergeDeepObject } from '@repo/shared';
import defaultConfigs from './default/configs';
// @ts-expect-error runtime BRAND file mappings
import _configs from '@brands/dir/configs';

export const configs = mergeDeepObject(
  defaultConfigs,
  _configs
) as typeof defaultConfigs;
