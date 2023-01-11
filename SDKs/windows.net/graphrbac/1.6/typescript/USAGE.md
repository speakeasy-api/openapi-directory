<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApplicationsCreateRequest, ApplicationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    azureAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: ApplicationsCreateRequest = {
  pathParams: {
    tenantID: "sit",
  },
  queryParams: {
    apiVersion: "voluptas",
  },
  request: {
    applicationCreateParameters: {
      allowGuestsSignIn: true,
      allowPassthroughUsers: false,
      appLogoUrl: "consequuntur",
      appPermissions: [
        "expedita",
        "voluptas",
      ],
      appRoles: [
        {
          allowedMemberTypes: [
            "nihil",
          ],
          description: "rerum",
          displayName: "dicta",
          id: "debitis",
          isEnabled: true,
          value: "et",
        },
      ],
      availableToOtherTenants: false,
      displayName: "dolorem",
      errorUrl: "et",
      groupMembershipClaims: "None",
      homepage: "iste",
      identifierUris: [
        "totam",
      ],
      informationalUrls: {
        marketing: "dolores",
        privacy: "illum",
        support: "debitis",
        termsOfService: "vel",
      },
      isDeviceOnlyAuthSupported: false,
      keyCredentials: [
        {
          "aspernatur": {
            "totam": "commodi",
            "quis": "est",
            "aut": "odit",
          },
          "non": {
            "omnis": "aut",
          },
        },
        {
          "sed": {
            "autem": "consectetur",
            "nobis": "odio",
          },
        },
      ],
      knownClientApplications: [
        "recusandae",
      ],
      logoutUrl: "at",
      oauth2AllowImplicitFlow: false,
      oauth2AllowUrlPathMatching: true,
      oauth2Permissions: [
        {
          adminConsentDescription: "sint",
          adminConsentDisplayName: "inventore",
          id: "ut",
          isEnabled: false,
          type: "aut",
          userConsentDescription: "reprehenderit",
          userConsentDisplayName: "tempore",
          value: "maiores",
        },
        {
          adminConsentDescription: "incidunt",
          adminConsentDisplayName: "dolor",
          id: "beatae",
          isEnabled: true,
          type: "in",
          userConsentDescription: "et",
          userConsentDisplayName: "omnis",
          value: "ipsum",
        },
      ],
      oauth2RequirePostResponse: true,
      optionalClaims: {
        accessToken: [
          {
            additionalProperties: {
              "vel": "rerum",
            },
            essential: true,
            name: "voluptas",
            source: "quam",
          },
          {
            additionalProperties: {
              "qui": "qui",
            },
            essential: false,
            name: "in",
            source: "autem",
          },
          {
            additionalProperties: {
              "ut": "itaque",
            },
            essential: false,
            name: "neque",
            source: "ullam",
          },
        ],
        idToken: [
          {
            additionalProperties: {
              "esse": "architecto",
              "quam": "velit",
              "cumque": "soluta",
            },
            essential: true,
            name: "voluptates",
            source: "magni",
          },
          {
            additionalProperties: {
              "optio": "qui",
              "earum": "illo",
              "omnis": "ut",
            },
            essential: false,
            name: "dolor",
            source: "commodi",
          },
          {
            additionalProperties: {
              "reprehenderit": "consectetur",
            },
            essential: true,
            name: "ut",
            source: "laboriosam",
          },
        ],
        samlToken: [
          {
            additionalProperties: {
              "soluta": "aut",
            },
            essential: true,
            name: "consequuntur",
            source: "laudantium",
          },
          {
            additionalProperties: {
              "ipsa": "expedita",
            },
            essential: false,
            name: "perferendis",
            source: "atque",
          },
          {
            additionalProperties: {
              "quisquam": "explicabo",
            },
            essential: true,
            name: "maxime",
            source: "eum",
          },
        ],
      },
      orgRestrictions: [
        "et",
        "rerum",
      ],
      passwordCredentials: [
        {
          "cumque": {
            "necessitatibus": "est",
          },
          "quis": {
            "labore": "et",
          },
          "impedit": {
            "expedita": "vel",
            "qui": "modi",
            "nihil": "tempora",
          },
        },
        {
          "eaque": {
            "sit": "autem",
            "quis": "vel",
          },
        },
        {
          "placeat": {
            "nisi": "quis",
          },
          "adipisci": {
            "rerum": "et",
            "accusamus": "numquam",
            "laborum": "rerum",
          },
        },
      ],
      preAuthorizedApplications: [
        {
          appId: "laborum",
          extensions: [
            {
              conditions: [
                "minus",
                "soluta",
                "aperiam",
              ],
            },
          ],
          permissions: [
            {
              accessGrants: [
                "mollitia",
              ],
              directAccessGrant: true,
            },
            {
              accessGrants: [
                "ipsa",
              ],
              directAccessGrant: false,
            },
            {
              accessGrants: [
                "ut",
                "aliquam",
              ],
              directAccessGrant: false,
            },
          ],
        },
        {
          appId: "sed",
          extensions: [
            {
              conditions: [
                "consequuntur",
                "non",
                "cupiditate",
              ],
            },
            {
              conditions: [
                "molestiae",
                "pariatur",
                "quasi",
              ],
            },
            {
              conditions: [
                "enim",
                "qui",
                "sit",
              ],
            },
          ],
          permissions: [
            {
              accessGrants: [
                "neque",
                "consequuntur",
              ],
              directAccessGrant: true,
            },
            {
              accessGrants: [
                "est",
                "occaecati",
              ],
              directAccessGrant: false,
            },
            {
              accessGrants: [
                "quia",
                "temporibus",
              ],
              directAccessGrant: false,
            },
          ],
        },
      ],
      publicClient: false,
      publisherDomain: "est",
      replyUrls: [
        "necessitatibus",
        "in",
        "possimus",
      ],
      requiredResourceAccess: [
        {
          "doloribus": {
            "sunt": "earum",
            "et": "ut",
            "asperiores": "et",
          },
        },
        {
          "ipsum": {
            "voluptas": "nihil",
          },
        },
        {
          "suscipit": {
            "non": "magnam",
            "ut": "possimus",
          },
        },
      ],
      samlMetadataUrl: "illo",
      signInAudience: "qui",
      wwwHomepage: "quia",
    },
    applicationCreateParameters1: {
      allowGuestsSignIn: false,
      allowPassthroughUsers: false,
      appLogoUrl: "enim",
      appPermissions: [
        "distinctio",
        "delectus",
      ],
      appRoles: [
        {
          allowedMemberTypes: [
            "repellat",
            "velit",
          ],
          description: "officia",
          displayName: "modi",
          id: "sunt",
          isEnabled: false,
          value: "amet",
        },
        {
          allowedMemberTypes: [
            "a",
            "qui",
            "excepturi",
          ],
          description: "autem",
          displayName: "corporis",
          id: "dicta",
          isEnabled: true,
          value: "doloremque",
        },
      ],
      availableToOtherTenants: false,
      displayName: "nisi",
      errorUrl: "recusandae",
      groupMembershipClaims: "None",
      homepage: "minus",
      identifierUris: [
        "rerum",
        "ut",
        "rem",
      ],
      informationalUrls: {
        marketing: "eos",
        privacy: "et",
        support: "reiciendis",
        termsOfService: "aspernatur",
      },
      isDeviceOnlyAuthSupported: true,
      keyCredentials: [
        {
          "adipisci": {
            "illum": "accusantium",
            "atque": "amet",
            "nisi": "quidem",
          },
        },
        {
          "quo": {
            "alias": "totam",
            "deserunt": "eius",
          },
          "repellat": {
            "omnis": "totam",
            "aut": "et",
            "magni": "necessitatibus",
          },
        },
        {
          "culpa": {
            "voluptas": "ut",
          },
          "veniam": {
            "molestias": "rerum",
            "quo": "et",
          },
        },
      ],
      knownClientApplications: [
        "commodi",
        "in",
        "quibusdam",
      ],
      logoutUrl: "asperiores",
      oauth2AllowImplicitFlow: false,
      oauth2AllowUrlPathMatching: true,
      oauth2Permissions: [
        {
          adminConsentDescription: "tempora",
          adminConsentDisplayName: "commodi",
          id: "blanditiis",
          isEnabled: true,
          type: "in",
          userConsentDescription: "et",
          userConsentDisplayName: "odit",
          value: "est",
        },
      ],
      oauth2RequirePostResponse: true,
      optionalClaims: {
        accessToken: [
          {
            additionalProperties: {
              "perspiciatis": "et",
            },
            essential: true,
            name: "voluptatem",
            source: "ex",
          },
        ],
        idToken: [
          {
            additionalProperties: {
              "distinctio": "cumque",
              "ea": "non",
            },
            essential: false,
            name: "nam",
            source: "beatae",
          },
          {
            additionalProperties: {
              "qui": "magni",
            },
            essential: true,
            name: "sit",
            source: "aut",
          },
          {
            additionalProperties: {
              "iusto": "quia",
            },
            essential: false,
            name: "debitis",
            source: "autem",
          },
        ],
        samlToken: [
          {
            additionalProperties: {
              "ut": "non",
              "nihil": "laborum",
              "recusandae": "nihil",
            },
            essential: false,
            name: "iste",
            source: "perferendis",
          },
          {
            additionalProperties: {
              "autem": "hic",
              "voluptatem": "omnis",
              "libero": "qui",
            },
            essential: false,
            name: "minus",
            source: "nostrum",
          },
        ],
      },
      orgRestrictions: [
        "sit",
        "repellat",
      ],
      passwordCredentials: [
        {
          "laboriosam": {
            "ea": "tempore",
            "fugit": "aut",
          },
        },
      ],
      preAuthorizedApplications: [
        {
          appId: "aliquid",
          extensions: [
            {
              conditions: [
                "magni",
                "recusandae",
                "illum",
              ],
            },
            {
              conditions: [
                "dolores",
                "hic",
              ],
            },
          ],
          permissions: [
            {
              accessGrants: [
                "ex",
                "iure",
                "et",
              ],
              directAccessGrant: false,
            },
            {
              accessGrants: [
                "explicabo",
              ],
              directAccessGrant: false,
            },
          ],
        },
        {
          appId: "veniam",
          extensions: [
            {
              conditions: [
                "odit",
                "molestias",
                "corporis",
              ],
            },
          ],
          permissions: [
            {
              accessGrants: [
                "similique",
                "mollitia",
              ],
              directAccessGrant: false,
            },
            {
              accessGrants: [
                "quam",
                "maiores",
                "totam",
              ],
              directAccessGrant: false,
            },
            {
              accessGrants: [
                "repellendus",
                "sunt",
              ],
              directAccessGrant: true,
            },
          ],
        },
        {
          appId: "earum",
          extensions: [
            {
              conditions: [
                "aut",
                "dolor",
                "quia",
              ],
            },
          ],
          permissions: [
            {
              accessGrants: [
                "et",
                "expedita",
              ],
              directAccessGrant: true,
            },
            {
              accessGrants: [
                "qui",
              ],
              directAccessGrant: false,
            },
          ],
        },
      ],
      publicClient: true,
      publisherDomain: "cupiditate",
      replyUrls: [
        "saepe",
        "sed",
        "voluptatem",
      ],
      requiredResourceAccess: [
        {
          "nesciunt": {
            "qui": "quis",
            "eligendi": "velit",
            "fuga": "aliquid",
          },
          "vero": {
            "et": "voluptatem",
          },
        },
        {
          "quae": {
            "vitae": "rerum",
          },
        },
      ],
      samlMetadataUrl: "officiis",
      signInAudience: "commodi",
      wwwHomepage: "sed",
    },
  },
};

sdk.application.applicationsCreate(req).then((res: ApplicationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->