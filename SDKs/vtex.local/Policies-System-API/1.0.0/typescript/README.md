# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Policies-System-API/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Policies-System-API/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PolicyCreateOrUpdateRequest,
  PolicyCreateOrUpdateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PolicyCreateOrUpdateRequest = {
  accept: "corrupti",
  contentType: "provident",
  policySaveRequest: {
    description: "distinctio",
    name: "quibusdam",
    statements: [
      {
        actions: [
          "corrupti",
          "illum",
          "vel",
          "error",
        ],
        condition: {
          conditions: [
            {
              conditions: [
                "iure",
                "magnam",
              ],
              key: "debitis",
              operation: "ipsa",
              values: [
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
              ],
            },
            {
              conditions: [
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
              ],
              key: "recusandae",
              operation: "temporibus",
              values: [
                "quis",
              ],
            },
            {
              conditions: [
                "deserunt",
              ],
              key: "perferendis",
              operation: "ipsam",
              values: [
                "sapiente",
                "quo",
                "odit",
                "at",
              ],
            },
          ],
        },
        effect: "at",
        operation: "maiores",
        resource: "molestiae",
      },
      {
        actions: [
          "quod",
          "esse",
          "totam",
          "porro",
        ],
        condition: {
          conditions: [
            {
              conditions: [
                "nam",
              ],
              key: "officia",
              operation: "occaecati",
              values: [
                "deleniti",
              ],
            },
            {
              conditions: [
                "optio",
                "totam",
                "beatae",
                "commodi",
              ],
              key: "molestiae",
              operation: "modi",
              values: [
                "impedit",
              ],
            },
            {
              conditions: [
                "esse",
                "ipsum",
                "excepturi",
              ],
              key: "aspernatur",
              operation: "perferendis",
              values: [
                "natus",
                "sed",
              ],
            },
          ],
        },
        effect: "iste",
        operation: "dolor",
        resource: "natus",
      },
      {
        actions: [
          "hic",
          "saepe",
        ],
        condition: {
          conditions: [
            {
              conditions: [
                "corporis",
                "iste",
              ],
              key: "iure",
              operation: "saepe",
              values: [
                "architecto",
                "ipsa",
                "reiciendis",
              ],
            },
            {
              conditions: [
                "mollitia",
                "laborum",
                "dolores",
              ],
              key: "dolorem",
              operation: "corporis",
              values: [
                "nobis",
              ],
            },
            {
              conditions: [
                "omnis",
                "nemo",
              ],
              key: "minima",
              operation: "excepturi",
              values: [
                "iure",
              ],
            },
          ],
        },
        effect: "culpa",
        operation: "doloribus",
        resource: "sapiente",
      },
    ],
  },
  id: "architecto",
};

sdk.policy.policyCreateOrUpdate(req).then((res: PolicyCreateOrUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### policy

* `policyCreateOrUpdate` - Create Policy
* `policyDelete` - Delete Policy by ID
* `policyEvaluate` - Evaluate Policies
* `policyGet` - Get Policy by ID
* `policyList` - Get Policy List
* `putApiPolicyEnginePoliciesId` - Update Policy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

