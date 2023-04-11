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