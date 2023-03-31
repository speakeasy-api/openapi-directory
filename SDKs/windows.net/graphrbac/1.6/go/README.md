# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/windows.net/graphrbac/1.6/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AzureAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.ApplicationsCreateRequest{
        ApplicationCreateParameters: shared.ApplicationCreateParameters{
            AllowGuestsSignIn: false,
            AllowPassthroughUsers: false,
            AppLogoURL: "corrupti",
            AppPermissions: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            AppRoles: []shared.AppRole{
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "illum",
                        "vel",
                        "error",
                    },
                    Description: "deserunt",
                    DisplayName: "suscipit",
                    ID: "iure",
                    IsEnabled: false,
                    Value: "magnam",
                },
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                    Description: "molestiae",
                    DisplayName: "minus",
                    ID: "placeat",
                    IsEnabled: false,
                    Value: "voluptatum",
                },
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "excepturi",
                        "nisi",
                    },
                    Description: "recusandae",
                    DisplayName: "temporibus",
                    ID: "ab",
                    IsEnabled: false,
                    Value: "quis",
                },
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "deserunt",
                    },
                    Description: "perferendis",
                    DisplayName: "ipsam",
                    ID: "repellendus",
                    IsEnabled: false,
                    Value: "sapiente",
                },
            },
            AvailableToOtherTenants: false,
            DisplayName: "quo",
            ErrorURL: "odit",
            GroupMembershipClaims: "All",
            Homepage: "at",
            IdentifierUris: []string{
                "molestiae",
                "quod",
                "quod",
                "esse",
            },
            InformationalUrls: &shared.InformationalURL{
                Marketing: "totam",
                Privacy: "porro",
                Support: "dolorum",
                TermsOfService: "dicta",
            },
            IsDeviceOnlyAuthSupported: false,
            KeyCredentials: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "occaecati": map[string]interface{}{
                        "deleniti": "hic",
                    },
                    "optio": map[string]interface{}{
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    "cum": map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                },
                map[string]map[string]interface{}{
                    "natus": map[string]interface{}{
                        "iste": "dolor",
                    },
                    "natus": map[string]interface{}{
                        "hic": "saepe",
                        "fuga": "in",
                    },
                },
                map[string]map[string]interface{}{
                    "iste": map[string]interface{}{
                        "saepe": "quidem",
                        "architecto": "ipsa",
                    },
                    "reiciendis": map[string]interface{}{
                        "mollitia": "laborum",
                        "dolores": "dolorem",
                        "corporis": "explicabo",
                    },
                },
            },
            KnownClientApplications: []string{
                "enim",
                "omnis",
                "nemo",
                "minima",
            },
            LogoutURL: "excepturi",
            Oauth2AllowImplicitFlow: false,
            Oauth2AllowURLPathMatching: false,
            Oauth2Permissions: []shared.OAuth2Permission{
                shared.OAuth2Permission{
                    AdminConsentDescription: "iure",
                    AdminConsentDisplayName: "culpa",
                    ID: "doloribus",
                    IsEnabled: false,
                    Type: "sapiente",
                    UserConsentDescription: "architecto",
                    UserConsentDisplayName: "mollitia",
                    Value: "dolorem",
                },
            },
            Oauth2RequirePostResponse: false,
            OptionalClaims: &shared.OptionalClaims{
                AccessToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "repellat": "mollitia",
                        },
                        Essential: false,
                        Name: "occaecati",
                        Source: "numquam",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "quam": "molestiae",
                            "velit": "error",
                        },
                        Essential: false,
                        Name: "quia",
                        Source: "quis",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "laborum": "animi",
                        },
                        Essential: false,
                        Name: "enim",
                        Source: "odit",
                    },
                },
                IDToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "tenetur": "ipsam",
                        },
                        Essential: false,
                        Name: "id",
                        Source: "possimus",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "quasi": "error",
                        },
                        Essential: false,
                        Name: "temporibus",
                        Source: "laborum",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "reiciendis": "voluptatibus",
                        },
                        Essential: false,
                        Name: "vero",
                        Source: "nihil",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "voluptatibus": "ipsa",
                            "omnis": "voluptate",
                            "cum": "perferendis",
                        },
                        Essential: false,
                        Name: "doloremque",
                        Source: "reprehenderit",
                    },
                },
                SamlToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "dicta": "corporis",
                            "dolore": "iusto",
                            "dicta": "harum",
                            "enim": "accusamus",
                        },
                        Essential: false,
                        Name: "commodi",
                        Source: "repudiandae",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "ipsum": "quidem",
                        },
                        Essential: false,
                        Name: "molestias",
                        Source: "excepturi",
                    },
                },
            },
            OrgRestrictions: []string{
                "modi",
                "praesentium",
                "rem",
                "voluptates",
            },
            PasswordCredentials: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "sint": map[string]interface{}{
                        "itaque": "incidunt",
                    },
                    "enim": map[string]interface{}{
                        "est": "quibusdam",
                    },
                    "explicabo": map[string]interface{}{
                        "distinctio": "quibusdam",
                        "labore": "modi",
                        "qui": "aliquid",
                    },
                    "cupiditate": map[string]interface{}{
                        "perferendis": "magni",
                        "assumenda": "ipsam",
                        "alias": "fugit",
                    },
                },
            },
            PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                shared.PreAuthorizedApplication{
                    AppID: "excepturi",
                    Extensions: []shared.PreAuthorizedApplicationExtension{
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "tempore",
                                "labore",
                                "delectus",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "non",
                                "eligendi",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "provident",
                                "necessitatibus",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "officia",
                                "dolor",
                                "debitis",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "dolorum",
                                "in",
                                "in",
                                "illum",
                            },
                            DirectAccessGrant: false,
                        },
                    },
                },
                shared.PreAuthorizedApplication{
                    AppID: "maiores",
                    Extensions: []shared.PreAuthorizedApplicationExtension{
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "magnam",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "facere",
                                "ea",
                                "aliquid",
                                "laborum",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "non",
                                "occaecati",
                                "enim",
                                "accusamus",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "provident",
                                "nam",
                                "id",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "deleniti",
                                "sapiente",
                                "amet",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "nisi",
                                "vel",
                                "natus",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "molestiae",
                                "perferendis",
                                "nihil",
                            },
                            DirectAccessGrant: false,
                        },
                    },
                },
                shared.PreAuthorizedApplication{
                    AppID: "magnam",
                    Extensions: []shared.PreAuthorizedApplicationExtension{
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "labore",
                                "labore",
                                "suscipit",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "nobis",
                                "eum",
                                "vero",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "architecto",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "excepturi",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "provident",
                                "quos",
                            },
                            DirectAccessGrant: false,
                        },
                    },
                },
            },
            PublicClient: false,
            PublisherDomain: "sint",
            ReplyUrls: []string{
                "mollitia",
            },
            RequiredResourceAccess: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "ad": map[string]interface{}{
                        "dolor": "necessitatibus",
                        "odit": "nemo",
                    },
                    "quasi": map[string]interface{}{
                        "doloribus": "debitis",
                        "eius": "maxime",
                    },
                    "deleniti": map[string]interface{}{
                        "in": "architecto",
                        "architecto": "repudiandae",
                        "ullam": "expedita",
                    },
                },
                map[string]map[string]interface{}{
                    "repellat": map[string]interface{}{
                        "sed": "saepe",
                        "pariatur": "accusantium",
                        "consequuntur": "praesentium",
                        "natus": "magni",
                    },
                    "sunt": map[string]interface{}{
                        "illum": "pariatur",
                        "maxime": "ea",
                        "excepturi": "odit",
                        "ea": "accusantium",
                    },
                },
                map[string]map[string]interface{}{
                    "maiores": map[string]interface{}{
                        "ipsam": "voluptate",
                        "autem": "nam",
                        "eaque": "pariatur",
                    },
                },
                map[string]map[string]interface{}{
                    "voluptatibus": map[string]interface{}{
                        "fugiat": "amet",
                    },
                    "aut": map[string]interface{}{
                        "corporis": "hic",
                        "libero": "nobis",
                        "dolores": "quis",
                        "totam": "dignissimos",
                    },
                },
            },
            SamlMetadataURL: "eaque",
            SignInAudience: "quis",
            WwwHomepage: "nesciunt",
        },
        APIVersion: "eos",
        TenantID: "perferendis",
    }

    ctx := context.Background()
    res, err := s.Application.ApplicationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Application

* `ApplicationsCreate` - Create a new application.
* `ApplicationsDelete` - Delete an application.
* `ApplicationsGet` - Get an application by object ID.
* `ApplicationsList` - Lists applications by filter parameters.
* `ApplicationsPatch` - Update an existing application.
* `DeletedApplicationsHardDelete` - Hard-delete an application.

### ApplicationKeyCredentials

* `ApplicationsListKeyCredentials` - Get the keyCredentials associated with an application.
* `ApplicationsUpdateKeyCredentials` - Update the keyCredentials associated with an application.

### ApplicationOwners

* `ApplicationsAddOwner` - Add an owner to an application.
* `ApplicationsListOwners` - Directory objects that are owners of the application.
* `ApplicationsRemoveOwner` - Remove a member from owners.

### ApplicationPasswordCredentials

* `ApplicationsListPasswordCredentials` - Get the passwordCredentials associated with an application.
* `ApplicationsUpdatePasswordCredentials` - Update passwordCredentials associated with an application.

### Domain

* `DomainsGet` - Gets a specific domain in the current tenant.
* `DomainsList` - Gets a list of domains for the current tenant.

### Group

* `GroupsAddMember` - Add a member to a group.
* `GroupsCreate` - Create a group in the directory.
* `GroupsDelete` - Delete a group from the directory.
* `GroupsGet` - Gets group information from the directory.
* `GroupsGetGroupMembers` - Gets the members of a group.
* `GroupsGetMemberGroups` - Gets a collection of object IDs of groups of which the specified group is a member.
* `GroupsIsMemberOf` - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
* `GroupsList` - Gets list of groups for the current tenant.
* `GroupsRemoveMember` - Remove a member from a group.

### GroupOwners

* `GroupsListOwners` - Directory objects that are owners of the group.

### GroupsOwners

* `GroupsAddOwner` - Add an owner to a group.
* `GroupsRemoveOwner` - Remove a member from owners.

### OAuth2PermissionGrantCreate

* `OAuth2PermissionGrantCreate` - Grants OAuth2 permissions for the relevant resource Ids of an app.

### OAuth2PermissionGrantList

* `OAuth2PermissionGrantList` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.

### OAuth2PermissionGrantDelete

* `OAuth2PermissionGrantDelete` - Delete a OAuth2 permission grant for the relevant resource Ids of an app.

### Objects

* `ObjectsGetObjectsByObjectIds` - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.

### ServicePrincipal

* `ServicePrincipalsCreate` - Creates a service principal in the directory.
* `ServicePrincipalsDelete` - Deletes a service principal from the directory.
* `ServicePrincipalsGet` - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
* `ServicePrincipalsList` - Gets a list of service principals from the current tenant.
* `ServicePrincipalsUpdate` - Updates a service principal in the directory.

### ServicePrincipalAppRoleAssignedTo

* `ServicePrincipalsListAppRoleAssignedTo` - Principals (users, groups, and service principals) that are assigned to this service principal.

### ServicePrincipalAppRoleAssignments

* `ServicePrincipalsListAppRoleAssignments` - Applications that the service principal is assigned to.

### ServicePrincipalKeyCredentials

* `ServicePrincipalsListKeyCredentials` - Get the keyCredentials associated with the specified service principal.
* `ServicePrincipalsUpdateKeyCredentials` - Update the keyCredentials associated with a service principal.

### ServicePrincipalOwners

* `ServicePrincipalsAddOwner` - Add an owner to a service principal.
* `ServicePrincipalsListOwners` - Directory objects that are owners of this service principal.
* `ServicePrincipalsRemoveOwner` - Remove a member from owners.

### ServicePrincipalPasswordCredentials

* `ServicePrincipalsListPasswordCredentials` - Gets the passwordCredentials associated with a service principal.
* `ServicePrincipalsUpdatePasswordCredentials` - Updates the passwordCredentials associated with a service principal.

### ServicePrincipalsByAppID

* `ApplicationsGetServicePrincipalsIDByAppID` - Gets an object id for a given application id from the current tenant.

### SignedInUser

* `SignedInUserGet` - Gets the details for the currently logged-in user.
* `SignedInUserListOwnedObjects` - Get the list of directory objects that are owned by the user.

### User

* `UsersCreate` - Create a new user.
* `UsersDelete` - Delete a user.
* `UsersGet` - Gets user information from the directory.
* `UsersGetMemberGroups` - Gets a collection that contains the object IDs of the groups of which the user is a member.
* `UsersList` - Gets list of users for the current tenant.
* `UsersUpdate` - Updates a user.

### DeletedApplications

* `DeletedApplicationsList` - Gets a list of deleted applications in the directory.
* `DeletedApplicationsRestore` - Restores the deleted application in the directory.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
