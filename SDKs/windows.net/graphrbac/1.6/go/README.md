# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                AzureAuth: shared.SchemeAzureAuth{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ApplicationsCreateRequest{
        PathParams: operations.ApplicationsCreatePathParams{
            TenantID: "voluptas",
        },
        QueryParams: operations.ApplicationsCreateQueryParams{
            APIVersion: "corrupti",
        },
        Request: operations.ApplicationsCreateRequests{
            ApplicationCreateParameters: &shared.ApplicationCreateParameters{
                AllowGuestsSignIn: false,
                AllowPassthroughUsers: true,
                AppLogoURL: "sit",
                AppPermissions: []string{
                    "sunt",
                },
                AppRoles: []shared.AppRole{
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "quia",
                            "mollitia",
                            "eaque",
                        },
                        Description: "fugit",
                        DisplayName: "assumenda",
                        ID: "deleniti",
                        IsEnabled: false,
                        Value: "at",
                    },
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "quia",
                            "officia",
                            "consequuntur",
                        },
                        Description: "perspiciatis",
                        DisplayName: "eum",
                        ID: "voluptas",
                        IsEnabled: true,
                        Value: "ab",
                    },
                },
                AvailableToOtherTenants: true,
                ErrorURL: "laudantium",
                GroupMembershipClaims: "None",
                Homepage: "earum",
                InformationalUrls: &shared.InformationalURL{
                    Marketing: "tempora",
                    Privacy: "sapiente",
                    Support: "alias",
                    TermsOfService: "rerum",
                },
                IsDeviceOnlyAuthSupported: true,
                KeyCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "debitis": map[string]interface{}{
                            "aut": "molestiae",
                            "rem": "totam",
                        },
                        "laudantium": map[string]interface{}{
                            "qui": "voluptas",
                            "assumenda": "voluptatem",
                            "sint": "veniam",
                        },
                        "harum": map[string]interface{}{
                            "debitis": "amet",
                            "voluptatem": "quasi",
                            "quae": "necessitatibus",
                        },
                    },
                },
                KnownClientApplications: []string{
                    "eveniet",
                    "omnis",
                    "eos",
                },
                LogoutURL: "aut",
                Oauth2AllowImplicitFlow: false,
                Oauth2AllowURLPathMatching: true,
                Oauth2Permissions: []shared.OAuth2Permission{
                    shared.OAuth2Permission{
                        AdminConsentDescription: "adipisci",
                        AdminConsentDisplayName: "consequatur",
                        ID: "id",
                        IsEnabled: true,
                        Type: "saepe",
                        UserConsentDescription: "consequatur",
                        UserConsentDisplayName: "similique",
                        Value: "eaque",
                    },
                    shared.OAuth2Permission{
                        AdminConsentDescription: "aut",
                        AdminConsentDisplayName: "ipsum",
                        ID: "alias",
                        IsEnabled: false,
                        Type: "et",
                        UserConsentDescription: "aut",
                        UserConsentDisplayName: "sunt",
                        Value: "itaque",
                    },
                },
                Oauth2RequirePostResponse: true,
                OptionalClaims: &shared.OptionalClaims{
                    AccessToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "laboriosam": "sequi",
                            },
                            Essential: false,
                            Name: "qui",
                            Source: "est",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "doloremque": "temporibus",
                                "quia": "illo",
                            },
                            Essential: true,
                            Name: "autem",
                            Source: "corporis",
                        },
                    },
                    IDToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "aspernatur": "aut",
                                "sint": "quis",
                            },
                            Essential: true,
                            Name: "quia",
                            Source: "voluptas",
                        },
                    },
                    SamlToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "possimus": "aspernatur",
                                "aut": "eum",
                            },
                            Essential: true,
                            Name: "cupiditate",
                            Source: "reprehenderit",
                        },
                    },
                },
                OrgRestrictions: []string{
                    "tempore",
                    "quos",
                },
                PasswordCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "fugit": map[string]interface{}{
                            "quidem": "laboriosam",
                            "eos": "laborum",
                            "laborum": "sed",
                        },
                        "et": map[string]interface{}{
                            "cupiditate": "corporis",
                            "dolores": "ab",
                            "perferendis": "omnis",
                        },
                        "sequi": map[string]interface{}{
                            "suscipit": "non",
                            "ipsam": "nihil",
                        },
                    },
                    map[string]map[string]interface{}{
                        "aut": map[string]interface{}{
                            "sit": "sunt",
                        },
                    },
                },
                PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                    shared.PreAuthorizedApplication{
                        AppID: "ut",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "aspernatur",
                                    "voluptas",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "eius",
                                    "facere",
                                    "beatae",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "quibusdam",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "culpa",
                                    "dolore",
                                    "nihil",
                                },
                                DirectAccessGrant: false,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "dignissimos",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "expedita",
                                    "nisi",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "inventore",
                                    "vel",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "accusantium",
                                    "tenetur",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "velit",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "vel",
                                    "libero",
                                    "eligendi",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "aliquid",
                                    "consequatur",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "accusantium",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "odio",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                },
                PublicClient: true,
                PublisherDomain: "ea",
                ReplyUrls: []string{
                    "deserunt",
                    "ab",
                },
                RequiredResourceAccess: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "quisquam": map[string]interface{}{
                            "sit": "ad",
                            "laborum": "et",
                        },
                    },
                    map[string]map[string]interface{}{
                        "architecto": map[string]interface{}{
                            "quibusdam": "praesentium",
                            "architecto": "atque",
                        },
                        "dolorum": map[string]interface{}{
                            "et": "est",
                            "rem": "velit",
                            "et": "ratione",
                        },
                    },
                    map[string]map[string]interface{}{
                        "temporibus": map[string]interface{}{
                            "enim": "et",
                            "doloremque": "dolorem",
                            "accusamus": "harum",
                        },
                    },
                },
                SamlMetadataURL: "omnis",
                SignInAudience: "beatae",
                WwwHomepage: "sequi",
            },
            ApplicationCreateParameters1: &shared.ApplicationCreateParameters{
                AllowGuestsSignIn: true,
                AllowPassthroughUsers: true,
                AppLogoURL: "qui",
                AppPermissions: []string{
                    "ad",
                },
                AppRoles: []shared.AppRole{
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "et",
                            "aut",
                            "nihil",
                        },
                        Description: "possimus",
                        DisplayName: "reiciendis",
                        ID: "in",
                        IsEnabled: false,
                        Value: "expedita",
                    },
                },
                AvailableToOtherTenants: false,
                ErrorURL: "eveniet",
                GroupMembershipClaims: "All",
                Homepage: "a",
                InformationalUrls: &shared.InformationalURL{
                    Marketing: "quidem",
                    Privacy: "blanditiis",
                    Support: "qui",
                    TermsOfService: "quidem",
                },
                IsDeviceOnlyAuthSupported: true,
                KeyCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "recusandae": map[string]interface{}{
                            "repellat": "id",
                            "excepturi": "inventore",
                            "id": "distinctio",
                        },
                        "suscipit": map[string]interface{}{
                            "quidem": "mollitia",
                        },
                    },
                    map[string]map[string]interface{}{
                        "illo": map[string]interface{}{
                            "veritatis": "fugiat",
                            "aut": "soluta",
                        },
                    },
                },
                KnownClientApplications: []string{
                    "consectetur",
                },
                LogoutURL: "aut",
                Oauth2AllowImplicitFlow: true,
                Oauth2AllowURLPathMatching: false,
                Oauth2Permissions: []shared.OAuth2Permission{
                    shared.OAuth2Permission{
                        AdminConsentDescription: "nihil",
                        AdminConsentDisplayName: "consequatur",
                        ID: "vel",
                        IsEnabled: true,
                        Type: "magni",
                        UserConsentDescription: "et",
                        UserConsentDisplayName: "maiores",
                        Value: "molestias",
                    },
                    shared.OAuth2Permission{
                        AdminConsentDescription: "quas",
                        AdminConsentDisplayName: "molestiae",
                        ID: "quo",
                        IsEnabled: false,
                        Type: "unde",
                        UserConsentDescription: "esse",
                        UserConsentDisplayName: "sed",
                        Value: "minus",
                    },
                },
                Oauth2RequirePostResponse: true,
                OptionalClaims: &shared.OptionalClaims{
                    AccessToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "laboriosam": "voluptatem",
                                "eos": "suscipit",
                            },
                            Essential: true,
                            Name: "sapiente",
                            Source: "placeat",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "quod": "omnis",
                                "fugiat": "et",
                            },
                            Essential: false,
                            Name: "autem",
                            Source: "voluptatum",
                        },
                    },
                    IDToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "quis": "reprehenderit",
                            },
                            Essential: true,
                            Name: "quidem",
                            Source: "itaque",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "ut": "architecto",
                            },
                            Essential: true,
                            Name: "qui",
                            Source: "qui",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "beatae": "odit",
                                "tempore": "rerum",
                            },
                            Essential: true,
                            Name: "harum",
                            Source: "sed",
                        },
                    },
                    SamlToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "repudiandae": "cumque",
                                "itaque": "rerum",
                                "quibusdam": "tempore",
                            },
                            Essential: false,
                            Name: "quo",
                            Source: "et",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "sed": "dicta",
                                "eveniet": "eveniet",
                                "eos": "earum",
                            },
                            Essential: true,
                            Name: "veniam",
                            Source: "vitae",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "in": "id",
                                "soluta": "earum",
                            },
                            Essential: true,
                            Name: "velit",
                            Source: "quasi",
                        },
                    },
                },
                OrgRestrictions: []string{
                    "suscipit",
                    "nesciunt",
                },
                PasswordCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "vel": map[string]interface{}{
                            "voluptas": "eum",
                        },
                        "velit": map[string]interface{}{
                            "ipsa": "est",
                        },
                        "deleniti": map[string]interface{}{
                            "voluptatum": "at",
                            "ad": "et",
                            "dolores": "et",
                        },
                    },
                    map[string]map[string]interface{}{
                        "similique": map[string]interface{}{
                            "ut": "debitis",
                            "et": "itaque",
                            "eius": "ea",
                        },
                        "et": map[string]interface{}{
                            "inventore": "unde",
                            "velit": "modi",
                        },
                        "sint": map[string]interface{}{
                            "reprehenderit": "quaerat",
                        },
                    },
                    map[string]map[string]interface{}{
                        "quasi": map[string]interface{}{
                            "earum": "earum",
                            "omnis": "quasi",
                        },
                        "magni": map[string]interface{}{
                            "recusandae": "quis",
                        },
                        "iure": map[string]interface{}{
                            "vel": "et",
                        },
                    },
                },
                PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                    shared.PreAuthorizedApplication{
                        AppID: "sed",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "laboriosam",
                                    "quo",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "qui",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "et",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "animi",
                                    "temporibus",
                                    "officia",
                                },
                                DirectAccessGrant: false,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "quod",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "ea",
                                    "explicabo",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "ut",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "dicta",
                                    "aut",
                                    "sapiente",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "quaerat",
                                    "quaerat",
                                    "et",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "sunt",
                                    "maiores",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                },
                PublicClient: false,
                PublisherDomain: "et",
                ReplyUrls: []string{
                    "et",
                    "dolores",
                },
                RequiredResourceAccess: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "non": map[string]interface{}{
                            "sed": "culpa",
                        },
                    },
                    map[string]map[string]interface{}{
                        "enim": map[string]interface{}{
                            "voluptas": "odit",
                        },
                    },
                },
                SamlMetadataURL: "cumque",
                SignInAudience: "tenetur",
                WwwHomepage: "odit",
            },
        },
    }
    
    res, err := s.Application.ApplicationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
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

### OAuth2PermissionGrant_Create

* `OAuth2PermissionGrantCreate` - Grants OAuth2 permissions for the relevant resource Ids of an app.

### OAuth2PermissionGrant_List

* `OAuth2PermissionGrantList` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.

### OAuth2PermissionGrant_delete

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

### ServicePrincipalsByAppId

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

### deletedApplications

* `DeletedApplicationsList` - Gets a list of deleted applications in the directory.
* `DeletedApplicationsRestore` - Restores the deleted application in the directory.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
