# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/License-Manager-API/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/License-Manager-API/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

sdk.account.getAccount().then((res: GetAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account

* `getAccount` - Get information about account

### appKeys

* `createnewappkey` - Create new appkey
* `getappkeysfromaccount` - Get appKeys from account
* `updateappkey` - Update appkey

### roles

* `getListRoles` - Get List of Roles
* `getRolesbyUser` - Get Roles by User/appKey
* `putRolesinUser` - Put Roles in User/appKey
* `removeRolefromUser` - Remove Role from User/appKey

### store

* `getByAccount` - Get Stores

### user

* `createUser` - Create User
* `getListUsers` - Get List of Users
* `getUser` - Get User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

