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
            TenantID: "sit",
        },
        QueryParams: operations.ApplicationsCreateQueryParams{
            APIVersion: "voluptas",
        },
        Request: operations.ApplicationsCreateRequests{
            ApplicationCreateParameters: &shared.ApplicationCreateParameters{
                AllowGuestsSignIn: true,
                AllowPassthroughUsers: false,
                AppLogoURL: "consequuntur",
                AppPermissions: []string{
                    "expedita",
                    "voluptas",
                },
                AppRoles: []shared.AppRole{
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "nihil",
                        },
                        Description: "rerum",
                        DisplayName: "dicta",
                        ID: "debitis",
                        IsEnabled: true,
                        Value: "et",
                    },
                },
                AvailableToOtherTenants: false,
                DisplayName: "dolorem",
                ErrorURL: "et",
                GroupMembershipClaims: "None",
                Homepage: "iste",
                IdentifierUris: []string{
                    "totam",
                },
                InformationalUrls: &shared.InformationalURL{
                    Marketing: "dolores",
                    Privacy: "illum",
                    Support: "debitis",
                    TermsOfService: "vel",
                },
                IsDeviceOnlyAuthSupported: false,
                KeyCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "aspernatur": map[string]interface{}{
                            "totam": "commodi",
                            "quis": "est",
                            "aut": "odit",
                        },
                        "non": map[string]interface{}{
                            "omnis": "aut",
                        },
                    },
                    map[string]map[string]interface{}{
                        "sed": map[string]interface{}{
                            "autem": "consectetur",
                            "nobis": "odio",
                        },
                    },
                },
                KnownClientApplications: []string{
                    "recusandae",
                },
                LogoutURL: "at",
                Oauth2AllowImplicitFlow: false,
                Oauth2AllowURLPathMatching: true,
                Oauth2Permissions: []shared.OAuth2Permission{
                    shared.OAuth2Permission{
                        AdminConsentDescription: "sint",
                        AdminConsentDisplayName: "inventore",
                        ID: "ut",
                        IsEnabled: false,
                        Type: "aut",
                        UserConsentDescription: "reprehenderit",
                        UserConsentDisplayName: "tempore",
                        Value: "maiores",
                    },
                    shared.OAuth2Permission{
                        AdminConsentDescription: "incidunt",
                        AdminConsentDisplayName: "dolor",
                        ID: "beatae",
                        IsEnabled: true,
                        Type: "in",
                        UserConsentDescription: "et",
                        UserConsentDisplayName: "omnis",
                        Value: "ipsum",
                    },
                },
                Oauth2RequirePostResponse: true,
                OptionalClaims: &shared.OptionalClaims{
                    AccessToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "vel": "rerum",
                            },
                            Essential: true,
                            Name: "voluptas",
                            Source: "quam",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "qui": "qui",
                            },
                            Essential: false,
                            Name: "in",
                            Source: "autem",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "ut": "itaque",
                            },
                            Essential: false,
                            Name: "neque",
                            Source: "ullam",
                        },
                    },
                    IDToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "esse": "architecto",
                                "quam": "velit",
                                "cumque": "soluta",
                            },
                            Essential: true,
                            Name: "voluptates",
                            Source: "magni",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "optio": "qui",
                                "earum": "illo",
                                "omnis": "ut",
                            },
                            Essential: false,
                            Name: "dolor",
                            Source: "commodi",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "reprehenderit": "consectetur",
                            },
                            Essential: true,
                            Name: "ut",
                            Source: "laboriosam",
                        },
                    },
                    SamlToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "soluta": "aut",
                            },
                            Essential: true,
                            Name: "consequuntur",
                            Source: "laudantium",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "ipsa": "expedita",
                            },
                            Essential: false,
                            Name: "perferendis",
                            Source: "atque",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "quisquam": "explicabo",
                            },
                            Essential: true,
                            Name: "maxime",
                            Source: "eum",
                        },
                    },
                },
                OrgRestrictions: []string{
                    "et",
                    "rerum",
                },
                PasswordCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "cumque": map[string]interface{}{
                            "necessitatibus": "est",
                        },
                        "quis": map[string]interface{}{
                            "labore": "et",
                        },
                        "impedit": map[string]interface{}{
                            "expedita": "vel",
                            "qui": "modi",
                            "nihil": "tempora",
                        },
                    },
                    map[string]map[string]interface{}{
                        "eaque": map[string]interface{}{
                            "sit": "autem",
                            "quis": "vel",
                        },
                    },
                    map[string]map[string]interface{}{
                        "placeat": map[string]interface{}{
                            "nisi": "quis",
                        },
                        "adipisci": map[string]interface{}{
                            "rerum": "et",
                            "accusamus": "numquam",
                            "laborum": "rerum",
                        },
                    },
                },
                PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                    shared.PreAuthorizedApplication{
                        AppID: "laborum",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "minus",
                                    "soluta",
                                    "aperiam",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "mollitia",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "ipsa",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "ut",
                                    "aliquam",
                                },
                                DirectAccessGrant: false,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "sed",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "consequuntur",
                                    "non",
                                    "cupiditate",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "molestiae",
                                    "pariatur",
                                    "quasi",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "enim",
                                    "qui",
                                    "sit",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "neque",
                                    "consequuntur",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "est",
                                    "occaecati",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "quia",
                                    "temporibus",
                                },
                                DirectAccessGrant: false,
                            },
                        },
                    },
                },
                PublicClient: false,
                PublisherDomain: "est",
                ReplyUrls: []string{
                    "necessitatibus",
                    "in",
                    "possimus",
                },
                RequiredResourceAccess: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "doloribus": map[string]interface{}{
                            "sunt": "earum",
                            "et": "ut",
                            "asperiores": "et",
                        },
                    },
                    map[string]map[string]interface{}{
                        "ipsum": map[string]interface{}{
                            "voluptas": "nihil",
                        },
                    },
                    map[string]map[string]interface{}{
                        "suscipit": map[string]interface{}{
                            "non": "magnam",
                            "ut": "possimus",
                        },
                    },
                },
                SamlMetadataURL: "illo",
                SignInAudience: "qui",
                WwwHomepage: "quia",
            },
            ApplicationCreateParameters1: &shared.ApplicationCreateParameters{
                AllowGuestsSignIn: false,
                AllowPassthroughUsers: false,
                AppLogoURL: "enim",
                AppPermissions: []string{
                    "distinctio",
                    "delectus",
                },
                AppRoles: []shared.AppRole{
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "repellat",
                            "velit",
                        },
                        Description: "officia",
                        DisplayName: "modi",
                        ID: "sunt",
                        IsEnabled: false,
                        Value: "amet",
                    },
                    shared.AppRole{
                        AllowedMemberTypes: []string{
                            "a",
                            "qui",
                            "excepturi",
                        },
                        Description: "autem",
                        DisplayName: "corporis",
                        ID: "dicta",
                        IsEnabled: true,
                        Value: "doloremque",
                    },
                },
                AvailableToOtherTenants: false,
                DisplayName: "nisi",
                ErrorURL: "recusandae",
                GroupMembershipClaims: "None",
                Homepage: "minus",
                IdentifierUris: []string{
                    "rerum",
                    "ut",
                    "rem",
                },
                InformationalUrls: &shared.InformationalURL{
                    Marketing: "eos",
                    Privacy: "et",
                    Support: "reiciendis",
                    TermsOfService: "aspernatur",
                },
                IsDeviceOnlyAuthSupported: true,
                KeyCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "adipisci": map[string]interface{}{
                            "illum": "accusantium",
                            "atque": "amet",
                            "nisi": "quidem",
                        },
                    },
                    map[string]map[string]interface{}{
                        "quo": map[string]interface{}{
                            "alias": "totam",
                            "deserunt": "eius",
                        },
                        "repellat": map[string]interface{}{
                            "omnis": "totam",
                            "aut": "et",
                            "magni": "necessitatibus",
                        },
                    },
                    map[string]map[string]interface{}{
                        "culpa": map[string]interface{}{
                            "voluptas": "ut",
                        },
                        "veniam": map[string]interface{}{
                            "molestias": "rerum",
                            "quo": "et",
                        },
                    },
                },
                KnownClientApplications: []string{
                    "commodi",
                    "in",
                    "quibusdam",
                },
                LogoutURL: "asperiores",
                Oauth2AllowImplicitFlow: false,
                Oauth2AllowURLPathMatching: true,
                Oauth2Permissions: []shared.OAuth2Permission{
                    shared.OAuth2Permission{
                        AdminConsentDescription: "tempora",
                        AdminConsentDisplayName: "commodi",
                        ID: "blanditiis",
                        IsEnabled: true,
                        Type: "in",
                        UserConsentDescription: "et",
                        UserConsentDisplayName: "odit",
                        Value: "est",
                    },
                },
                Oauth2RequirePostResponse: true,
                OptionalClaims: &shared.OptionalClaims{
                    AccessToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "perspiciatis": "et",
                            },
                            Essential: true,
                            Name: "voluptatem",
                            Source: "ex",
                        },
                    },
                    IDToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "distinctio": "cumque",
                                "ea": "non",
                            },
                            Essential: false,
                            Name: "nam",
                            Source: "beatae",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "qui": "magni",
                            },
                            Essential: true,
                            Name: "sit",
                            Source: "aut",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "iusto": "quia",
                            },
                            Essential: false,
                            Name: "debitis",
                            Source: "autem",
                        },
                    },
                    SamlToken: []shared.OptionalClaim{
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "ut": "non",
                                "nihil": "laborum",
                                "recusandae": "nihil",
                            },
                            Essential: false,
                            Name: "iste",
                            Source: "perferendis",
                        },
                        shared.OptionalClaim{
                            AdditionalProperties: map[string]interface{}{
                                "autem": "hic",
                                "voluptatem": "omnis",
                                "libero": "qui",
                            },
                            Essential: false,
                            Name: "minus",
                            Source: "nostrum",
                        },
                    },
                },
                OrgRestrictions: []string{
                    "sit",
                    "repellat",
                },
                PasswordCredentials: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "laboriosam": map[string]interface{}{
                            "ea": "tempore",
                            "fugit": "aut",
                        },
                    },
                },
                PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                    shared.PreAuthorizedApplication{
                        AppID: "aliquid",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "magni",
                                    "recusandae",
                                    "illum",
                                },
                            },
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "dolores",
                                    "hic",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "ex",
                                    "iure",
                                    "et",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "explicabo",
                                },
                                DirectAccessGrant: false,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "veniam",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "odit",
                                    "molestias",
                                    "corporis",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "similique",
                                    "mollitia",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "quam",
                                    "maiores",
                                    "totam",
                                },
                                DirectAccessGrant: false,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "repellendus",
                                    "sunt",
                                },
                                DirectAccessGrant: true,
                            },
                        },
                    },
                    shared.PreAuthorizedApplication{
                        AppID: "earum",
                        Extensions: []shared.PreAuthorizedApplicationExtension{
                            shared.PreAuthorizedApplicationExtension{
                                Conditions: []string{
                                    "aut",
                                    "dolor",
                                    "quia",
                                },
                            },
                        },
                        Permissions: []shared.PreAuthorizedApplicationPermission{
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "et",
                                    "expedita",
                                },
                                DirectAccessGrant: true,
                            },
                            shared.PreAuthorizedApplicationPermission{
                                AccessGrants: []string{
                                    "qui",
                                },
                                DirectAccessGrant: false,
                            },
                        },
                    },
                },
                PublicClient: true,
                PublisherDomain: "cupiditate",
                ReplyUrls: []string{
                    "saepe",
                    "sed",
                    "voluptatem",
                },
                RequiredResourceAccess: []map[string]map[string]interface{}{
                    map[string]map[string]interface{}{
                        "nesciunt": map[string]interface{}{
                            "qui": "quis",
                            "eligendi": "velit",
                            "fuga": "aliquid",
                        },
                        "vero": map[string]interface{}{
                            "et": "voluptatem",
                        },
                    },
                    map[string]map[string]interface{}{
                        "quae": map[string]interface{}{
                            "vitae": "rerum",
                        },
                    },
                },
                SamlMetadataURL: "officiis",
                SignInAudience: "commodi",
                WwwHomepage: "sed",
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
