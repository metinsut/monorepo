import { mergeDeepObject } from "@repo/shared";
import defaultConfigs from "./default/configs";
// @ts-expect-error
import _configs from "@brands/dir/configs";

export const configs = mergeDeepObject(
  defaultConfigs,
  _configs,
) as typeof defaultConfigs;
