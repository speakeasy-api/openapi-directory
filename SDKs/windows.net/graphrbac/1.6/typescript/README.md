# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/windows.net/graphrbac/1.6/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/windows.net/graphrbac/1.6/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### application

* `applicationsCreate` - Create a new application.
* `applicationsDelete` - Delete an application.
* `applicationsGet` - Get an application by object ID.
* `applicationsList` - Lists applications by filter parameters.
* `applicationsPatch` - Update an existing application.
* `deletedApplicationsHardDelete` - Hard-delete an application.

### applicationKeyCredentials

* `applicationsListKeyCredentials` - Get the keyCredentials associated with an application.
* `applicationsUpdateKeyCredentials` - Update the keyCredentials associated with an application.

### applicationOwners

* `applicationsAddOwner` - Add an owner to an application.
* `applicationsListOwners` - Directory objects that are owners of the application.
* `applicationsRemoveOwner` - Remove a member from owners.

### applicationPasswordCredentials

* `applicationsListPasswordCredentials` - Get the passwordCredentials associated with an application.
* `applicationsUpdatePasswordCredentials` - Update passwordCredentials associated with an application.

### domain

* `domainsGet` - Gets a specific domain in the current tenant.
* `domainsList` - Gets a list of domains for the current tenant.

### group

* `groupsAddMember` - Add a member to a group.
* `groupsCreate` - Create a group in the directory.
* `groupsDelete` - Delete a group from the directory.
* `groupsGet` - Gets group information from the directory.
* `groupsGetGroupMembers` - Gets the members of a group.
* `groupsGetMemberGroups` - Gets a collection of object IDs of groups of which the specified group is a member.
* `groupsIsMemberOf` - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
* `groupsList` - Gets list of groups for the current tenant.
* `groupsRemoveMember` - Remove a member from a group.

### groupOwners

* `groupsListOwners` - Directory objects that are owners of the group.

### groupsOwners

* `groupsAddOwner` - Add an owner to a group.
* `groupsRemoveOwner` - Remove a member from owners.

### oAuth2PermissionGrantCreate

* `oAuth2PermissionGrantCreate` - Grants OAuth2 permissions for the relevant resource Ids of an app.

### oAuth2PermissionGrantList

* `oAuth2PermissionGrantList` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.

### oAuth2PermissionGrantDelete

* `oAuth2PermissionGrantDelete` - Delete a OAuth2 permission grant for the relevant resource Ids of an app.

### objects

* `objectsGetObjectsByObjectIds` - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.

### servicePrincipal

* `servicePrincipalsCreate` - Creates a service principal in the directory.
* `servicePrincipalsDelete` - Deletes a service principal from the directory.
* `servicePrincipalsGet` - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
* `servicePrincipalsList` - Gets a list of service principals from the current tenant.
* `servicePrincipalsUpdate` - Updates a service principal in the directory.

### servicePrincipalAppRoleAssignedTo

* `servicePrincipalsListAppRoleAssignedTo` - Principals (users, groups, and service principals) that are assigned to this service principal.

### servicePrincipalAppRoleAssignments

* `servicePrincipalsListAppRoleAssignments` - Applications that the service principal is assigned to.

### servicePrincipalKeyCredentials

* `servicePrincipalsListKeyCredentials` - Get the keyCredentials associated with the specified service principal.
* `servicePrincipalsUpdateKeyCredentials` - Update the keyCredentials associated with a service principal.

### servicePrincipalOwners

* `servicePrincipalsAddOwner` - Add an owner to a service principal.
* `servicePrincipalsListOwners` - Directory objects that are owners of this service principal.
* `servicePrincipalsRemoveOwner` - Remove a member from owners.

### servicePrincipalPasswordCredentials

* `servicePrincipalsListPasswordCredentials` - Gets the passwordCredentials associated with a service principal.
* `servicePrincipalsUpdatePasswordCredentials` - Updates the passwordCredentials associated with a service principal.

### servicePrincipalsByAppId

* `applicationsGetServicePrincipalsIdByAppId` - Gets an object id for a given application id from the current tenant.

### signedInUser

* `signedInUserGet` - Gets the details for the currently logged-in user.
* `signedInUserListOwnedObjects` - Get the list of directory objects that are owned by the user.

### user

* `usersCreate` - Create a new user.
* `usersDelete` - Delete a user.
* `usersGet` - Gets user information from the directory.
* `usersGetMemberGroups` - Gets a collection that contains the object IDs of the groups of which the user is a member.
* `usersList` - Gets list of users for the current tenant.
* `usersUpdate` - Updates a user.

### deletedApplications

* `deletedApplicationsList` - Gets a list of deleted applications in the directory.
* `deletedApplicationsRestore` - Restores the deleted application in the directory.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

