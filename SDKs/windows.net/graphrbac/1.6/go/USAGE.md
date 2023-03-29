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