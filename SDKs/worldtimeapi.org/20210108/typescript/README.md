# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/worldtimeapi.org/20210108/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/worldtimeapi.org/20210108/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetIpResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.getIp().then((res: GetIpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getIp` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getIpTxt` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getIpIpv4` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getIpIpv4Txt` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getTimezone` - a listing of all timezones.
* `getTimezoneTxt` - a listing of all timezones.
* `getTimezoneArea` - a listing of all timezones available for that area.
* `getTimezoneAreaTxt` - a listing of all timezones available for that area.
* `getTimezoneAreaLocation` - request the current time for a timezone.
* `getTimezoneAreaLocationTxt` - request the current time for a timezone.
* `getTimezoneAreaLocationRegion` - request the current time for a timezone.
* `getTimezoneAreaLocationRegionTxt` - request the current time for a timezone.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

