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
            TenantID: "corrupti",
        },
        QueryParams: operations.ApplicationsCreateQueryParams{
            APIVersion: "provident",
        },
        Request: shared.ApplicationCreateParameters{
            AllowGuestsSignIn: false,
            AllowPassthroughUsers: false,
            AppLogoURL: "distinctio",
            AppPermissions: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            AppRoles: []shared.AppRole{
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    Description: "magnam",
                    DisplayName: "debitis",
                    ID: "ipsa",
                    IsEnabled: false,
                    Value: "delectus",
                },
                shared.AppRole{
                    AllowedMemberTypes: []string{
                        "suscipit",
                        "molestiae",
                    },
                    Description: "minus",
                    DisplayName: "placeat",
                    ID: "voluptatum",
                    IsEnabled: false,
                    Value: "iusto",
                },
            },
            AvailableToOtherTenants: false,
            DisplayName: "excepturi",
            ErrorURL: "nisi",
            GroupMembershipClaims: "All",
            Homepage: "temporibus",
            IdentifierUris: []string{
                "quis",
            },
            InformationalUrls: &shared.InformationalURL{
                Marketing: "veritatis",
                Privacy: "deserunt",
                Support: "perferendis",
                TermsOfService: "ipsam",
            },
            IsDeviceOnlyAuthSupported: false,
            KeyCredentials: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "quo": map[string]interface{}{
                        "at": "at",
                    },
                    "maiores": map[string]interface{}{
                        "quod": "quod",
                        "esse": "totam",
                    },
                    "porro": map[string]interface{}{
                        "dicta": "nam",
                        "officia": "occaecati",
                        "fugit": "deleniti",
                    },
                    "hic": map[string]interface{}{
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                    },
                },
                map[string]map[string]interface{}{
                    "ipsum": map[string]interface{}{
                        "aspernatur": "perferendis",
                        "ad": "natus",
                        "sed": "iste",
                    },
                    "dolor": map[string]interface{}{
                        "laboriosam": "hic",
                        "saepe": "fuga",
                        "in": "corporis",
                    },
                },
                map[string]map[string]interface{}{
                    "iure": map[string]interface{}{
                        "quidem": "architecto",
                        "ipsa": "reiciendis",
                        "est": "mollitia",
                        "laborum": "dolores",
                    },
                    "dolorem": map[string]interface{}{
                        "explicabo": "nobis",
                        "enim": "omnis",
                    },
                    "nemo": map[string]interface{}{
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                },
                map[string]map[string]interface{}{
                    "sapiente": map[string]interface{}{
                        "mollitia": "dolorem",
                    },
                    "culpa": map[string]interface{}{
                        "repellat": "mollitia",
                    },
                    "occaecati": map[string]interface{}{
                        "commodi": "quam",
                        "molestiae": "velit",
                    },
                    "error": map[string]interface{}{
                        "quis": "vitae",
                    },
                },
            },
            KnownClientApplications: []string{
                "animi",
                "enim",
                "odit",
            },
            LogoutURL: "quo",
            Oauth2AllowImplicitFlow: false,
            Oauth2AllowURLPathMatching: false,
            Oauth2Permissions: []shared.OAuth2Permission{
                shared.OAuth2Permission{
                    AdminConsentDescription: "tenetur",
                    AdminConsentDisplayName: "ipsam",
                    ID: "id",
                    IsEnabled: false,
                    Type: "possimus",
                    UserConsentDescription: "aut",
                    UserConsentDisplayName: "quasi",
                    Value: "error",
                },
            },
            Oauth2RequirePostResponse: false,
            OptionalClaims: &shared.OptionalClaims{
                AccessToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "quasi": "reiciendis",
                            "voluptatibus": "vero",
                            "nihil": "praesentium",
                        },
                        Essential: false,
                        Name: "voluptatibus",
                        Source: "ipsa",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "voluptate": "cum",
                            "perferendis": "doloremque",
                            "reprehenderit": "ut",
                        },
                        Essential: false,
                        Name: "maiores",
                        Source: "dicta",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "dolore": "iusto",
                            "dicta": "harum",
                        },
                        Essential: false,
                        Name: "enim",
                        Source: "accusamus",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "repudiandae": "quae",
                            "ipsum": "quidem",
                        },
                        Essential: false,
                        Name: "molestias",
                        Source: "excepturi",
                    },
                },
                IDToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "praesentium": "rem",
                            "voluptates": "quasi",
                        },
                        Essential: false,
                        Name: "repudiandae",
                        Source: "sint",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "itaque": "incidunt",
                        },
                        Essential: false,
                        Name: "enim",
                        Source: "consequatur",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "quibusdam": "explicabo",
                            "deserunt": "distinctio",
                            "quibusdam": "labore",
                        },
                        Essential: false,
                        Name: "modi",
                        Source: "qui",
                    },
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "cupiditate": "quos",
                            "perferendis": "magni",
                        },
                        Essential: false,
                        Name: "assumenda",
                        Source: "ipsam",
                    },
                },
                SamlToken: []shared.OptionalClaim{
                    shared.OptionalClaim{
                        AdditionalProperties: map[string]interface{}{
                            "dolorum": "excepturi",
                        },
                        Essential: false,
                        Name: "tempora",
                        Source: "facilis",
                    },
                },
            },
            OrgRestrictions: []string{
                "labore",
                "delectus",
                "eum",
            },
            PasswordCredentials: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "sint": map[string]interface{}{
                        "provident": "necessitatibus",
                        "sint": "officia",
                    },
                    "dolor": map[string]interface{}{
                        "a": "dolorum",
                        "in": "in",
                        "illum": "maiores",
                        "rerum": "dicta",
                    },
                    "magnam": map[string]interface{}{
                        "facere": "ea",
                        "aliquid": "laborum",
                        "accusamus": "non",
                        "occaecati": "enim",
                    },
                    "accusamus": map[string]interface{}{
                        "quidem": "provident",
                        "nam": "id",
                        "blanditiis": "deleniti",
                        "sapiente": "amet",
                    },
                },
            },
            PreAuthorizedApplications: []shared.PreAuthorizedApplication{
                shared.PreAuthorizedApplication{
                    AppID: "nisi",
                    Extensions: []shared.PreAuthorizedApplicationExtension{
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "omnis",
                                "molestiae",
                                "perferendis",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "magnam",
                                "distinctio",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "labore",
                                "suscipit",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "nobis",
                                "eum",
                                "vero",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "architecto",
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
                                "ullam",
                                "provident",
                                "quos",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "mollitia",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "mollitia",
                                "ad",
                                "eum",
                                "dolor",
                            },
                            DirectAccessGrant: false,
                        },
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "odit",
                                "nemo",
                                "quasi",
                                "iure",
                            },
                            DirectAccessGrant: false,
                        },
                    },
                },
                shared.PreAuthorizedApplication{
                    AppID: "doloribus",
                    Extensions: []shared.PreAuthorizedApplicationExtension{
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "maxime",
                                "deleniti",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "in",
                                "architecto",
                                "architecto",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "ullam",
                                "expedita",
                                "nihil",
                                "repellat",
                            },
                        },
                        shared.PreAuthorizedApplicationExtension{
                            Conditions: []string{
                                "sed",
                                "saepe",
                                "pariatur",
                                "accusantium",
                            },
                        },
                    },
                    Permissions: []shared.PreAuthorizedApplicationPermission{
                        shared.PreAuthorizedApplicationPermission{
                            AccessGrants: []string{
                                "natus",
                                "magni",
                                "sunt",
                            },
                            DirectAccessGrant: false,
                        },
                    },
                },
            },
            PublicClient: false,
            PublisherDomain: "quo",
            ReplyUrls: []string{
                "pariatur",
                "maxime",
                "ea",
                "excepturi",
            },
            RequiredResourceAccess: []map[string]map[string]interface{}{
                map[string]map[string]interface{}{
                    "accusantium": map[string]interface{}{
                        "maiores": "quidem",
                    },
                    "ipsam": map[string]interface{}{
                        "autem": "nam",
                        "eaque": "pariatur",
                    },
                },
            },
            SamlMetadataURL: "nemo",
            SignInAudience: "voluptatibus",
            WwwHomepage: "perferendis",
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