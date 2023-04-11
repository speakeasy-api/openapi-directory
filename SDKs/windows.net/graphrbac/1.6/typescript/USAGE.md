<!-- Start SDK Example Usage -->
```typescript
import {
  ApplicationsCreateRequest,
  ApplicationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  GroupMembershipClaimsEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    azureAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ApplicationsCreateRequest = {
  applicationCreateParameters: {
    allowGuestsSignIn: false,
    allowPassthroughUsers: false,
    appLogoUrl: "corrupti",
    appPermissions: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    appRoles: [
      {
        allowedMemberTypes: [
          "illum",
          "vel",
          "error",
        ],
        description: "deserunt",
        displayName: "suscipit",
        id: "iure",
        isEnabled: false,
        value: "magnam",
      },
      {
        allowedMemberTypes: [
          "ipsa",
          "delectus",
          "tempora",
          "suscipit",
        ],
        description: "molestiae",
        displayName: "minus",
        id: "placeat",
        isEnabled: false,
        value: "voluptatum",
      },
      {
        allowedMemberTypes: [
          "excepturi",
          "nisi",
        ],
        description: "recusandae",
        displayName: "temporibus",
        id: "ab",
        isEnabled: false,
        value: "quis",
      },
      {
        allowedMemberTypes: [
          "deserunt",
        ],
        description: "perferendis",
        displayName: "ipsam",
        id: "repellendus",
        isEnabled: false,
        value: "sapiente",
      },
    ],
    availableToOtherTenants: false,
    displayName: "quo",
    errorUrl: "odit",
    groupMembershipClaims: GroupMembershipClaimsEnum.All,
    homepage: "at",
    identifierUris: [
      "molestiae",
      "quod",
      "quod",
      "esse",
    ],
    informationalUrls: {
      marketing: "totam",
      privacy: "porro",
      support: "dolorum",
      termsOfService: "dicta",
    },
    isDeviceOnlyAuthSupported: false,
    keyCredentials: [
      {
        "occaecati": {
          "deleniti": "hic",
        },
        "optio": {
          "beatae": "commodi",
          "molestiae": "modi",
          "qui": "impedit",
        },
        "cum": {
          "ipsum": "excepturi",
          "aspernatur": "perferendis",
        },
      },
      {
        "natus": {
          "iste": "dolor",
        },
        "natus": {
          "hic": "saepe",
          "fuga": "in",
        },
      },
      {
        "iste": {
          "saepe": "quidem",
          "architecto": "ipsa",
        },
        "reiciendis": {
          "mollitia": "laborum",
          "dolores": "dolorem",
          "corporis": "explicabo",
        },
      },
    ],
    knownClientApplications: [
      "enim",
      "omnis",
      "nemo",
      "minima",
    ],
    logoutUrl: "excepturi",
    oauth2AllowImplicitFlow: false,
    oauth2AllowUrlPathMatching: false,
    oauth2Permissions: [
      {
        adminConsentDescription: "iure",
        adminConsentDisplayName: "culpa",
        id: "doloribus",
        isEnabled: false,
        type: "sapiente",
        userConsentDescription: "architecto",
        userConsentDisplayName: "mollitia",
        value: "dolorem",
      },
    ],
    oauth2RequirePostResponse: false,
    optionalClaims: {
      accessToken: [
        {
          additionalProperties: {
            "repellat": "mollitia",
          },
          essential: false,
          name: "occaecati",
          source: "numquam",
        },
        {
          additionalProperties: {
            "quam": "molestiae",
            "velit": "error",
          },
          essential: false,
          name: "quia",
          source: "quis",
        },
        {
          additionalProperties: {
            "laborum": "animi",
          },
          essential: false,
          name: "enim",
          source: "odit",
        },
      ],
      idToken: [
        {
          additionalProperties: {
            "tenetur": "ipsam",
          },
          essential: false,
          name: "id",
          source: "possimus",
        },
        {
          additionalProperties: {
            "quasi": "error",
          },
          essential: false,
          name: "temporibus",
          source: "laborum",
        },
        {
          additionalProperties: {
            "reiciendis": "voluptatibus",
          },
          essential: false,
          name: "vero",
          source: "nihil",
        },
        {
          additionalProperties: {
            "voluptatibus": "ipsa",
            "omnis": "voluptate",
            "cum": "perferendis",
          },
          essential: false,
          name: "doloremque",
          source: "reprehenderit",
        },
      ],
      samlToken: [
        {
          additionalProperties: {
            "dicta": "corporis",
            "dolore": "iusto",
            "dicta": "harum",
            "enim": "accusamus",
          },
          essential: false,
          name: "commodi",
          source: "repudiandae",
        },
        {
          additionalProperties: {
            "ipsum": "quidem",
          },
          essential: false,
          name: "molestias",
          source: "excepturi",
        },
      ],
    },
    orgRestrictions: [
      "modi",
      "praesentium",
      "rem",
      "voluptates",
    ],
    passwordCredentials: [
      {
        "sint": {
          "itaque": "incidunt",
        },
        "enim": {
          "est": "quibusdam",
        },
        "explicabo": {
          "distinctio": "quibusdam",
          "labore": "modi",
          "qui": "aliquid",
        },
        "cupiditate": {
          "perferendis": "magni",
          "assumenda": "ipsam",
          "alias": "fugit",
        },
      },
    ],
    preAuthorizedApplications: [
      {
        appId: "excepturi",
        extensions: [
          {
            conditions: [
              "tempore",
              "labore",
              "delectus",
            ],
          },
          {
            conditions: [
              "non",
              "eligendi",
            ],
          },
        ],
        permissions: [
          {
            accessGrants: [
              "provident",
              "necessitatibus",
            ],
            directAccessGrant: false,
          },
          {
            accessGrants: [
              "officia",
              "dolor",
              "debitis",
            ],
            directAccessGrant: false,
          },
          {
            accessGrants: [
              "dolorum",
              "in",
              "in",
              "illum",
            ],
            directAccessGrant: false,
          },
        ],
      },
      {
        appId: "maiores",
        extensions: [
          {
            conditions: [
              "magnam",
            ],
          },
          {
            conditions: [
              "facere",
              "ea",
              "aliquid",
              "laborum",
            ],
          },
          {
            conditions: [
              "non",
              "occaecati",
              "enim",
              "accusamus",
            ],
          },
        ],
        permissions: [
          {
            accessGrants: [
              "provident",
              "nam",
              "id",
            ],
            directAccessGrant: false,
          },
          {
            accessGrants: [
              "deleniti",
              "sapiente",
              "amet",
            ],
            directAccessGrant: false,
          },
          {
            accessGrants: [
              "nisi",
              "vel",
              "natus",
            ],
            directAccessGrant: false,
          },
          {
            accessGrants: [
              "molestiae",
              "perferendis",
              "nihil",
            ],
            directAccessGrant: false,
          },
        ],
      },
      {
        appId: "magnam",
        extensions: [
          {
            conditions: [
              "labore",
              "labore",
              "suscipit",
            ],
          },
          {
            conditions: [
              "nobis",
              "eum",
              "vero",
            ],
          },
          {
            conditions: [
              "architecto",
            ],
          },
        ],
        permissions: [
          {
            accessGrants: [
              "excepturi",
            ],
            directAccessGrant: false,
          },
          {
            accessGrants: [
              "provident",
              "quos",
            ],
            directAccessGrant: false,
          },
        ],
      },
    ],
    publicClient: false,
    publisherDomain: "sint",
    replyUrls: [
      "mollitia",
    ],
    requiredResourceAccess: [
      {
        "ad": {
          "dolor": "necessitatibus",
          "odit": "nemo",
        },
        "quasi": {
          "doloribus": "debitis",
          "eius": "maxime",
        },
        "deleniti": {
          "in": "architecto",
          "architecto": "repudiandae",
          "ullam": "expedita",
        },
      },
      {
        "repellat": {
          "sed": "saepe",
          "pariatur": "accusantium",
          "consequuntur": "praesentium",
          "natus": "magni",
        },
        "sunt": {
          "illum": "pariatur",
          "maxime": "ea",
          "excepturi": "odit",
          "ea": "accusantium",
        },
      },
      {
        "maiores": {
          "ipsam": "voluptate",
          "autem": "nam",
          "eaque": "pariatur",
        },
      },
      {
        "voluptatibus": {
          "fugiat": "amet",
        },
        "aut": {
          "corporis": "hic",
          "libero": "nobis",
          "dolores": "quis",
          "totam": "dignissimos",
        },
      },
    ],
    samlMetadataUrl: "eaque",
    signInAudience: "quis",
    wwwHomepage: "nesciunt",
  },
  apiVersion: "eos",
  tenantID: "perferendis",
};

sdk.application.applicationsCreate(req).then((res: ApplicationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->