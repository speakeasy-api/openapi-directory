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
            AzureAuth: shared.SchemeAzureAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.ApplicationsCreateRequest{
        PathParams: operations.ApplicationsCreatePathParams{
            TenantID: "unde",
        },
        QueryParams: operations.ApplicationsCreateQueryParams{
            APIVersion: "deserunt",
        },
        Request: shared.ApplicationCreateParameters{
            AllowGuestsSignIn: false,
            AllowPassthroughUsers: false,
            AppLogoURL: "porro",
            AppPermissions: []string{
                "id",
                "vero",
                "perspiciatis",
                "nulla",
            },
            AppRoles: []shared.AppRole{
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "facilis",
                        "eum",
                        "iusto",
                    },
                    Description: "ullam",
                    DisplayName: "saepe",
                    ID: "inventore",
                    IsEnabled: false,
                    Value: "sapiente",
                },
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "eum",
                        "voluptatum",
                    },
                    Description: "autem",
                    DisplayName: "vel",
                    ID: "non",
                    IsEnabled: false,
                    Value: "deleniti",
                },
            },
            AvailableToOtherTenants: false,
            DisplayName: "similique",
            ErrorURL: "reprehenderit",
            GroupMembershipClaims: "All",
            Homepage: "quo",
            IdentifierUris: []string{
                "laboriosam",
            },
            InformationalUrls: &shared.InformationalURL{
                Marketing: "dicta",
                Privacy: "est",
                Support: "voluptatem",
                TermsOfService: "consequatur",
            },
            IsDeviceOnlyAuthSupported: false,
            KeyCredentials: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "omnis": map[string]interface{}{
                        "accusamus": "accusamus",
                    },
                    "reiciendis": map[string]interface{}{
                        "quibusdam": "et",
                        "praesentium": "occaecati",
                    },
                    "dolor": map[string]interface{}{
                        "sed": "quisquam",
                        "rerum": "culpa",
                        "qui": "sed",
                    },
                    "rerum": map[string]interface{}{
                        "occaecati": "odit",
                        "esse": "rem",
                        "voluptatem": "amet",
                        "est": "id",
                    },
                },
                map[string]map[string]interface{}{
                    "numquam": map[string]interface{}{
                        "dolores": "sit",
                        "quia": "et",
                        "voluptatem": "laborum",
                    },
                    "modi": map[string]interface{}{
                        "iure": "earum",
                        "ut": "soluta",
                        "qui": "ea",
                    },
                },
                map[string]map[string]interface{}{
                    "iusto": map[string]interface{}{
                        "optio": "aspernatur",
                        "inventore": "ut",
                        "libero": "et",
                        "libero": "ipsum",
                    },
                    "non": map[string]interface{}{
                        "magni": "placeat",
                        "ipsam": "est",
                    },
                    "commodi": map[string]interface{}{
                        "similique": "eaque",
                        "odio": "harum",
                    },
                },
                map[string]map[string]interface{}{
                    "a": map[string]interface{}{
                        "et": "non",
                    },
                    "quidem": map[string]interface{}{
                        "asperiores": "et",
                    },
                    "culpa": map[string]interface{}{
                        "esse": "totam",
                        "voluptatum": "et",
                    },
                    "fuga": map[string]interface{}{
                        "laboriosam": "aut",
                    },
                },
            },
            KnownClientApplications: []string{
                "expedita",
                "ipsam",
                "eos",
            },
            LogoutURL: "omnis",
            Oauth2AllowImplicitFlow: false,
            Oauth2AllowURLPathMatching: false,
            Oauth2Permissions: []shared.OAuth2Permission{
                shared.OAuth2Permission{
                    AdminConsentDescription: "hic",
                    AdminConsentDisplayName: "consequatur",
                    ID: "distinctio",
                    IsEnabled: false,
                    Type: "qui",
                    UserConsentDescription: "perferendis",
                    UserConsentDisplayName: "aspernatur",
                    Value: "fuga",
                },
            },
            Oauth2RequirePostResponse: false,
            OptionalClaims: &shared.OptionalClaims{
                AccessToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "explicabo": "aut",
                            "reiciendis": "debitis",
                            "totam": "molestias",
                        },
                        Essential: false,
                        Name: "reiciendis",
                        Source: "illo",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "qui": "quod",
                            "sit": "eaque",
                            "odio": "veniam",
                        },
                        Essential: false,
                        Name: "reiciendis",
                        Source: "sed",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "exercitationem": "deleniti",
                            "sed": "est",
                        },
                        Essential: false,
                        Name: "voluptatem",
                        Source: "aut",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "sint": "veritatis",
                            "numquam": "eligendi",
                        },
                        Essential: false,
                        Name: "error",
                        Source: "similique",
                    },
                },
                IDToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "molestias": "cupiditate",
                            "sint": "explicabo",
                        },
                        Essential: false,
                        Name: "et",
                        Source: "in",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "non": "minima",
                        },
                        Essential: false,
                        Name: "voluptatem",
                        Source: "aut",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "voluptas": "magni",
                            "est": "porro",
                            "voluptas": "nostrum",
                        },
                        Essential: false,
                        Name: "voluptatem",
                        Source: "sit",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "officia": "omnis",
                            "voluptatem": "dolorem",
                        },
                        Essential: false,
                        Name: "eum",
                        Source: "quis",
                    },
                },
                SamlToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "cum": "similique",
                        },
                        Essential: false,
                        Name: "enim",
                        Source: "nihil",
                    },
                },
            },
            OrgRestrictions: []string{
                "quis",
                "sapiente",
                "et",
            },
            PasswordCredentials: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "in": map[string]interface{}{
                        "deserunt": "eveniet",
                        "sunt": "rerum",
                    },
                    "modi": map[string]interface{}{
                        "tenetur": "soluta",
                        "ducimus": "ducimus",
                        "nulla": "reiciendis",
                        "cumque": "fugit",
                    },
                    "ullam": map[string]interface{}{
                        "vel": "velit",
                        "qui": "cum",
                        "aut": "magnam",
                        "culpa": "enim",
                    },
                    "aut": map[string]interface{}{
                        "eligendi": "officia",
                        "est": "distinctio",
                        "et": "provident",
                        "a": "incidunt",
                    },
                },
            },
            PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                shared.PreAuthorizedApplication{
                    AppID: "qui",
                    Extensions: []shared.PreAuthorizedApplicationExtension{
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "id",
                                "voluptatum",
                                "sit",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "corporis",
                                "porro",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "nostrum",
                                "eum",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "placeat",
                                "molestiae",
                                "debitis",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "aut",
                            },
                            DirectAccessGrant: false,
                        },
                    },
                },
                shared.PreAuthorizedApplication{
                    AppID: "ullam",
                    Extensions: []shared.PreAuthorizedApplicationExtension{
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "ex",
                                "deserunt",
                                "omnis",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "et",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "et",
                                "voluptatem",
                                "et",
                                "modi",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "qui",
                                "consequatur",
                                "aspernatur",
                                "iusto",
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
                                "aut",
                                "sed",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "ducimus",
                                "aspernatur",
                                "aspernatur",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "aliquid",
                                "quo",
                                "totam",
                                "repellat",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "voluptatem",
                                "et",
                                "accusamus",
                                "eaque",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "et",
                                "dolorem",
                                "quia",
                            },
                            DirectAccessGrant: false,
                        },
                    },
                },
            },
            PublicClient: false,
            PublisherDomain: "omnis",
            ReplyUrls: []string{
                "et",
                "consequatur",
                "velit",
                "similique",
            },
            RequiredResourceAccess: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "aperiam": map[string]interface{}{
                        "voluptatibus": "optio",
                    },
                    "quis": map[string]interface{}{
                        "quam": "quisquam",
                        "ab": "et",
                    },
                },
            },
            SamlMetadataURL: "consequatur",
            SignInAudience: "aut",
            WwwHomepage: "sit",
        },
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
