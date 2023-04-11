# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/whapi.com/bets/2.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/whapi.com/bets/2.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CashinRequest,
  CashinResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CashinRequest = {
  apiKey: "corrupti",
  apiSecret: "provident",
  apiTicket: "distinctio",
  betId: "quibusdam",
  cashInValue: 6027.63,
  cashinBetDelayId: "nulla",
};

sdk.bets.cashin(req).then((res: CashinResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bets

* `cashin` - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
* `getBetHistory` - Retrieves the customer’s bet history.
* `getFreeBets` - Returns available free bets
* `placeComplexBet` - Places a multiple or a complex bet.
* `placeSingleBet` - Places a single bet
* `validateBetslip` - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

