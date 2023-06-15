import * as configcat from "configcat-js-ssr";
import { getOrSetCookieId } from "$lib/components/segment.svelte";

const configCatClient = configcat.getClient(
  import.meta.env.VITE_CONFIGCAT_KEY,
  configcat.PollingMode.LazyLoad,
  {
    cacheTimeToLiveSeconds: 3 * 60, // => 3 minutes
    requestTimeoutMs: 2000,
    logger: configcat.createConsoleLogger(configcat.LogLevel.Error),
  }
);
const userId = getOrSetCookieId();

type GetFeatureFlagDone = {
  (flagValue: boolean): void;
};

// getFeatureFlag function retrieves the value of a feature flag from the ConfigCat API.

export const getFeatureFlag = (
  flagName: string,
  defaultValue: boolean,
  done: GetFeatureFlagDone
): boolean => {
  configCatClient
    .getValueAsync(flagName, defaultValue, new configcat.User(userId))
    .then(done)
    .catch((error) => {
      console.error(error);
    });

  // return the default value until the feature flag value is fetched
  return defaultValue;
};

/* The getStartedExampleFlagStatusValue variable stores & exports the value of the home_example_launch_workspaces_card feature flag.
 * The getFeatureFlag() function retrieves the value of the specified feature flag.
 * The feature flag is set to false by default, but is overridden by the value of the feature flag stored in local storage.
 * The value of the feature flag is also set to the value of the exampleFlagValue variable.
 */

export let getStartedExampleFlagStatusValue = getFeatureFlag(
  "home_example_launch_workspaces_card",
  false,
  async (value) => (getStartedExampleFlagStatusValue = value)
);
