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
            TenantID: "inventore",
        },
        QueryParams: operations.ApplicationsCreateQueryParams{
            APIVersion: "et",
        },
        Request: operations.ApplicationsCreateRequests{
            ApplicationCreateParameters: &shared.ApplicationCreateParameters{
                AllowGuestsSignIn: false,
                AllowPassthroughUsers: false,
                AppLogoURL: "modi",
                AppPermissions: []string{
                    "autem",
                    "cupiditate",
                    "commodi",
                },
                AppRoles: []shared.AppRole{
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "assumenda",
                            "perferendis",
                            "ut",
                        },
                        Description: "atque",
                        DisplayName: "et",
                        ID: "eos",
                        IsEnabled: true,
                        Value: "saepe",
                    },
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "asperiores",
                            "nesciunt",
                            "praesentium",
                        },
                        Description: "natus",
                        DisplayName: "est",
                        ID: "est",
                        IsEnabled: true,
                        Value: "enim",
                    },
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "consequatur",
                            "a",
                            "minima",
                        },
                        Description: "fugiat",
                        DisplayName: "qui",
                        ID: "esse",
                        IsEnabled: true,
                        Value: "ab",
                    },
                },
                AvailableToOtherTenants: false,
                DisplayName: "qui",
                ErrorURL: "excepturi",
                GroupMembershipClaims: "SecurityGroup",
                Homepage: "sed",
                IdentifierUris: []string{
                    "exercitationem",
                },
                InformationalUrls: &shared.InformationalURL{
                    Marketing: "ea",
                    Privacy: "earum",
                    Support: "temporibus",
                    TermsOfService: "a",
                },
                IsDeviceOnlyAuthSupported: true,
                KeyCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "id": map[string]interface{}{
                            "voluptatem": "dolores",
                        },
                        "excepturi": map[string]interface{}{
                            "minima": "non",
                            "consectetur": "asperiores",
                            "reiciendis": "consequatur",
                        },
                        "et": map[string]interface{}{
                            "sunt": "enim",
                            "non": "ipsam",
                        },
                    },
                    map[string]map[string]interface{}{
                        "mollitia": map[string]interface{}{
                            "possimus": "velit",
                            "eveniet": "quidem",
                        },
                    },
                    map[string]map[string]interface{}{
                        "et": map[string]interface{}{
                            "qui": "quia",
                            "pariatur": "aut",
                        },
                        "error": map[string]interface{}{
                            "optio": "voluptates",
                            "nisi": "nostrum",
                        },
                        "omnis": map[string]interface{}{
                            "nesciunt": "est",
                        },
                    },
                },
                KnownClientApplications: []string{
                    "sequi",
                },
                LogoutURL: "fugit",
                Oauth2AllowImplicitFlow: false,
                Oauth2AllowURLPathMatching: true,
                Oauth2Permissions: []shared.OAuth2Permission{
                    shared.OAuth2Permission{
                        AdminConsentDescription: "dolorem",
                        AdminConsentDisplayName: "recusandae",
                        ID: "perferendis",
                        IsEnabled: true,
                        Type: "ipsa",
                        UserConsentDescription: "optio",
                        UserConsentDisplayName: "aut",
                        Value: "placeat",
                    },
                    shared.OAuth2Permission{
                        AdminConsentDescription: "sed",
                        AdminConsentDisplayName: "veniam",
                        ID: "nostrum",
                        IsEnabled: true,
                        Type: "dicta",
                        UserConsentDescription: "sit",
                        UserConsentDisplayName: "dolore",
                        Value: "natus",
                    },
                },
                Oauth2RequirePostResponse: true,
                OptionalClaims: &shared.OptionalClaims{
                    AccessToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "sint": "quibusdam",
                                "modi": "et",
                            },
                            Essential: false,
                            Name: "nesciunt",
                            Source: "aut",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "quia": "quia",
                                "dolores": "culpa",
                                "beatae": "iste",
                            },
                            Essential: true,
                            Name: "tempore",
                            Source: "eum",
                        },
                    },
                    IDToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "quia": "sapiente",
                                "iure": "officia",
                                "veritatis": "quia",
                            },
                            Essential: true,
                            Name: "labore",
                            Source: "nam",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "voluptatum": "quo",
                            },
                            Essential: false,
                            Name: "est",
                            Source: "corporis",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "cumque": "officiis",
                                "est": "ad",
                            },
                            Essential: true,
                            Name: "omnis",
                            Source: "cupiditate",
                        },
                    },
                    SamlToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "molestias": "rerum",
                            },
                            Essential: false,
                            Name: "optio",
                            Source: "fugiat",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "voluptas": "unde",
                            },
                            Essential: true,
                            Name: "recusandae",
                            Source: "quia",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "odio": "sunt",
                                "numquam": "consectetur",
                                "iste": "culpa",
                            },
                            Essential: true,
                            Name: "quis",
                            Source: "delectus",
                        },
                    },
                },
                OrgRestrictions: []string{
                    "ratione",
                    "aut",
                },
                PasswordCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "iste": map[string]interface{}{
                            "id": "est",
                            "similique": "iusto",
                        },
                    },
                    map[string]map[string]interface{}{
                        "soluta": map[string]interface{}{
                            "qui": "sequi",
                        },
                    },
                    map[string]map[string]interface{}{
                        "voluptatem": map[string]interface{}{
                            "sint": "beatae",
                            "non": "minima",
                        },
                        "facilis": map[string]interface{}{
                            "non": "qui",
                        },
                        "enim": map[string]interface{}{
                            "molestiae": "et",
                        },
                    },
                },
                PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                    shared.PreAuthorizedApplication{
                        AppID: "et",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "rerum",
                                    "non",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "consequatur",
                                    "laborum",
                                    "ratione",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "cupiditate",
                                    "est",
                                    "odit",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "sunt",
                                    "ab",
                                    "eum",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "voluptas",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "animi",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "nam",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "non",
                                    "ipsa",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "illum",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "rerum",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "amet",
                                    "quidem",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "sint",
                                    "hic",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                },
                PublicClient: true,
                PublisherDomain: "et",
                ReplyUrls: []string{
                    "accusamus",
                    "quidem",
                },
                RequiredResourceAccess: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "nihil": map[string]interface{}{
                            "suscipit": "commodi",
                            "voluptates": "et",
                        },
                    },
                    map[string]map[string]interface{}{
                        "quo": map[string]interface{}{
                            "quibusdam": "quibusdam",
                        },
                        "ut": map[string]interface{}{
                            "atque": "facere",
                            "rerum": "facilis",
                            "occaecati": "voluptatem",
                        },
                        "debitis": map[string]interface{}{
                            "eligendi": "consequatur",
                            "reprehenderit": "delectus",
                            "ut": "rerum",
                        },
                    },
                    map[string]map[string]interface{}{
                        "porro": map[string]interface{}{
                            "officiis": "at",
                            "repudiandae": "vel",
                        },
                        "recusandae": map[string]interface{}{
                            "deserunt": "consequatur",
                            "iure": "rem",
                            "omnis": "consequatur",
                        },
                    },
                },
                SamlMetadataURL: "dicta",
                SignInAudience: "consequatur",
                WwwHomepage: "iusto",
            },
            ApplicationCreateParameters1: &shared.ApplicationCreateParameters{
                AllowGuestsSignIn: true,
                AllowPassthroughUsers: true,
                AppLogoURL: "quia",
                AppPermissions: []string{
                    "iure",
                },
                AppRoles: []shared.AppRole{
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "molestiae",
                            "soluta",
                            "voluptatem",
                        },
                        Description: "repellat",
                        DisplayName: "ducimus",
                        ID: "et",
                        IsEnabled: false,
                        Value: "magni",
                    },
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "excepturi",
                            "a",
                            "illum",
                        },
                        Description: "provident",
                        DisplayName: "dolorum",
                        ID: "corporis",
                        IsEnabled: true,
                        Value: "iusto",
                    },
                },
                AvailableToOtherTenants: true,
                DisplayName: "repellendus",
                ErrorURL: "et",
                GroupMembershipClaims: "SecurityGroup",
                Homepage: "omnis",
                IdentifierUris: []string{
                    "consequatur",
                    "et",
                },
                InformationalUrls: &shared.InformationalURL{
                    Marketing: "sit",
                    Privacy: "atque",
                    Support: "nemo",
                    TermsOfService: "ut",
                },
                IsDeviceOnlyAuthSupported: false,
                KeyCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "omnis": map[string]interface{}{
                            "numquam": "illo",
                        },
                        "et": map[string]interface{}{
                            "dolor": "soluta",
                            "maxime": "delectus",
                        },
                        "aut": map[string]interface{}{
                            "laborum": "suscipit",
                        },
                    },
                },
                KnownClientApplications: []string{
                    "velit",
                    "dolorem",
                },
                LogoutURL: "delectus",
                Oauth2AllowImplicitFlow: true,
                Oauth2AllowURLPathMatching: false,
                Oauth2Permissions: []shared.OAuth2Permission{
                    shared.OAuth2Permission{
                        AdminConsentDescription: "sapiente",
                        AdminConsentDisplayName: "voluptates",
                        ID: "nam",
                        IsEnabled: false,
                        Type: "eligendi",
                        UserConsentDescription: "est",
                        UserConsentDisplayName: "facilis",
                        Value: "error",
                    },
                    shared.OAuth2Permission{
                        AdminConsentDescription: "aliquam",
                        AdminConsentDisplayName: "sapiente",
                        ID: "voluptas",
                        IsEnabled: false,
                        Type: "repellendus",
                        UserConsentDescription: "doloribus",
                        UserConsentDisplayName: "voluptatem",
                        Value: "autem",
                    },
                    shared.OAuth2Permission{
                        AdminConsentDescription: "delectus",
                        AdminConsentDisplayName: "labore",
                        ID: "corrupti",
                        IsEnabled: false,
                        Type: "animi",
                        UserConsentDescription: "repellendus",
                        UserConsentDisplayName: "et",
                        Value: "excepturi",
                    },
                },
                Oauth2RequirePostResponse: true,
                OptionalClaims: &shared.OptionalClaims{
                    AccessToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "sapiente": "quos",
                                "optio": "autem",
                            },
                            Essential: false,
                            Name: "delectus",
                            Source: "impedit",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "sunt": "itaque",
                            },
                            Essential: true,
                            Name: "tempora",
                            Source: "repellat",
                        },
                    },
                    IDToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "accusamus": "dolor",
                                "asperiores": "vitae",
                                "numquam": "facilis",
                            },
                            Essential: true,
                            Name: "voluptate",
                            Source: "ut",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "quos": "ut",
                                "dicta": "provident",
                            },
                            Essential: true,
                            Name: "blanditiis",
                            Source: "vero",
                        },
                    },
                    SamlToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "vitae": "ducimus",
                            },
                            Essential: true,
                            Name: "repellendus",
                            Source: "rerum",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "consequatur": "eligendi",
                                "reiciendis": "fugit",
                            },
                            Essential: true,
                            Name: "vero",
                            Source: "blanditiis",
                        },
                    },
                },
                OrgRestrictions: []string{
                    "dolor",
                    "ab",
                    "dolores",
                },
                PasswordCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "velit": map[string]interface{}{
                            "et": "voluptas",
                        },
                        "sint": map[string]interface{}{
                            "aut": "cum",
                            "rem": "saepe",
                        },
                        "fugiat": map[string]interface{}{
                            "et": "laborum",
                            "molestiae": "sunt",
                            "in": "enim",
                        },
                    },
                },
                PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                    shared.PreAuthorizedApplication{
                        AppID: "consectetur",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "ducimus",
                                    "unde",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "nihil",
                                    "consequatur",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "necessitatibus",
                                    "sit",
                                    "nulla",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "minima",
                                    "dicta",
                                    "et",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                },
                PublicClient: false,
                PublisherDomain: "ut",
                ReplyUrls: []string{
                    "eius",
                    "necessitatibus",
                },
                RequiredResourceAccess: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "ut": map[string]interface{}{
                            "eligendi": "aut",
                            "quo": "aut",
                            "rerum": "dolorem",
                        },
                        "veniam": map[string]interface{}{
                            "placeat": "aut",
                            "aperiam": "vel",
                        },
                    },
                    map[string]map[string]interface{}{
                        "ex": map[string]interface{}{
                            "facere": "enim",
                            "et": "sit",
                        },
                        "qui": map[string]interface{}{
                            "repudiandae": "rerum",
                            "est": "doloremque",
                            "et": "pariatur",
                        },
                        "architecto": map[string]interface{}{
                            "id": "ipsa",
                            "porro": "pariatur",
                        },
                    },
                    map[string]map[string]interface{}{
                        "odit": map[string]interface{}{
                            "perferendis": "consectetur",
                        },
                        "delectus": map[string]interface{}{
                            "nulla": "aut",
                            "placeat": "est",
                            "officiis": "repellendus",
                        },
                    },
                },
                SamlMetadataURL: "debitis",
                SignInAudience: "minus",
                WwwHomepage: "et",
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
