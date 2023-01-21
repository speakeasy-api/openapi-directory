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