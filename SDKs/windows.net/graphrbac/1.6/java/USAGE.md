<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ApplicationsCreatePathParams;
import org.openapis.openapi.models.operations.ApplicationsCreateQueryParams;
import org.openapis.openapi.models.operations.ApplicationsCreateRequest;
import org.openapis.openapi.models.operations.ApplicationsCreateResponse;
import org.openapis.openapi.models.shared.ApplicationCreateParameters;
import org.openapis.openapi.models.shared.PreAuthorizedApplication;
import org.openapis.openapi.models.shared.PreAuthorizedApplicationPermission;
import org.openapis.openapi.models.shared.PreAuthorizedApplicationExtension;
import org.openapis.openapi.models.shared.OptionalClaims;
import org.openapis.openapi.models.shared.OptionalClaim;
import org.openapis.openapi.models.shared.OAuth2Permission;
import org.openapis.openapi.models.shared.InformationalUrl;
import org.openapis.openapi.models.shared.GroupMembershipClaimsEnum;
import org.openapis.openapi.models.shared.AppRole;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    azureAuth = new SchemeAzureAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            ApplicationsCreateRequest req = new ApplicationsCreateRequest() {{
                pathParams = new ApplicationsCreatePathParams() {{
                    tenantID = "corrupti";
                }};
                queryParams = new ApplicationsCreateQueryParams() {{
                    apiVersion = "provident";
                }};
                request = new ApplicationCreateParameters() {{
                    allowGuestsSignIn = false;
                    allowPassthroughUsers = false;
                    appLogoUrl = "distinctio";
                    appPermissions = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    appRoles = new org.openapis.openapi.models.shared.AppRole[]{{
                        add(new AppRole() {{
                            allowedMemberTypes = new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }};
                            description = "magnam";
                            displayName = "debitis";
                            id = "ipsa";
                            isEnabled = false;
                            value = "delectus";
                        }}),
                        add(new AppRole() {{
                            allowedMemberTypes = new String[]{{
                                add("suscipit"),
                                add("molestiae"),
                            }};
                            description = "minus";
                            displayName = "placeat";
                            id = "voluptatum";
                            isEnabled = false;
                            value = "iusto";
                        }}),
                    }};
                    availableToOtherTenants = false;
                    displayName = "excepturi";
                    errorUrl = "nisi";
                    groupMembershipClaims = "All";
                    homepage = "temporibus";
                    identifierUris = new String[]{{
                        add("quis"),
                    }};
                    informationalUrls = new InformationalUrl() {{
                        marketing = "veritatis";
                        privacy = "deserunt";
                        support = "perferendis";
                        termsOfService = "ipsam";
                    }};
                    isDeviceOnlyAuthSupported = false;
                    keyCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]{{
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("quo", new java.util.HashMap<String, Object>() {{
                                put("at", "at");
                            }});
                            put("maiores", new java.util.HashMap<String, Object>() {{
                                put("quod", "quod");
                                put("esse", "totam");
                            }});
                            put("porro", new java.util.HashMap<String, Object>() {{
                                put("dicta", "nam");
                                put("officia", "occaecati");
                                put("fugit", "deleniti");
                            }});
                            put("hic", new java.util.HashMap<String, Object>() {{
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                                put("modi", "qui");
                                put("impedit", "cum");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("ipsum", new java.util.HashMap<String, Object>() {{
                                put("aspernatur", "perferendis");
                                put("ad", "natus");
                                put("sed", "iste");
                            }});
                            put("dolor", new java.util.HashMap<String, Object>() {{
                                put("laboriosam", "hic");
                                put("saepe", "fuga");
                                put("in", "corporis");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("iure", new java.util.HashMap<String, Object>() {{
                                put("quidem", "architecto");
                                put("ipsa", "reiciendis");
                                put("est", "mollitia");
                                put("laborum", "dolores");
                            }});
                            put("dolorem", new java.util.HashMap<String, Object>() {{
                                put("explicabo", "nobis");
                                put("enim", "omnis");
                            }});
                            put("nemo", new java.util.HashMap<String, Object>() {{
                                put("excepturi", "accusantium");
                                put("iure", "culpa");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("sapiente", new java.util.HashMap<String, Object>() {{
                                put("mollitia", "dolorem");
                            }});
                            put("culpa", new java.util.HashMap<String, Object>() {{
                                put("repellat", "mollitia");
                            }});
                            put("occaecati", new java.util.HashMap<String, Object>() {{
                                put("commodi", "quam");
                                put("molestiae", "velit");
                            }});
                            put("error", new java.util.HashMap<String, Object>() {{
                                put("quis", "vitae");
                            }});
                        }}),
                    }};
                    knownClientApplications = new String[]{{
                        add("animi"),
                        add("enim"),
                        add("odit"),
                    }};
                    logoutUrl = "quo";
                    oauth2AllowImplicitFlow = false;
                    oauth2AllowUrlPathMatching = false;
                    oauth2Permissions = new org.openapis.openapi.models.shared.OAuth2Permission[]{{
                        add(new OAuth2Permission() {{
                            adminConsentDescription = "tenetur";
                            adminConsentDisplayName = "ipsam";
                            id = "id";
                            isEnabled = false;
                            type = "possimus";
                            userConsentDescription = "aut";
                            userConsentDisplayName = "quasi";
                            value = "error";
                        }}),
                    }};
                    oauth2RequirePostResponse = false;
                    optionalClaims = new OptionalClaims() {{
                        accessToken = new org.openapis.openapi.models.shared.OptionalClaim[]{{
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("quasi", "reiciendis");
                                    put("voluptatibus", "vero");
                                    put("nihil", "praesentium");
                                }};
                                essential = false;
                                name = "voluptatibus";
                                source = "ipsa";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("voluptate", "cum");
                                    put("perferendis", "doloremque");
                                    put("reprehenderit", "ut");
                                }};
                                essential = false;
                                name = "maiores";
                                source = "dicta";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("dolore", "iusto");
                                    put("dicta", "harum");
                                }};
                                essential = false;
                                name = "enim";
                                source = "accusamus";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("repudiandae", "quae");
                                    put("ipsum", "quidem");
                                }};
                                essential = false;
                                name = "molestias";
                                source = "excepturi";
                            }}),
                        }};
                        idToken = new org.openapis.openapi.models.shared.OptionalClaim[]{{
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("praesentium", "rem");
                                    put("voluptates", "quasi");
                                }};
                                essential = false;
                                name = "repudiandae";
                                source = "sint";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("itaque", "incidunt");
                                }};
                                essential = false;
                                name = "enim";
                                source = "consequatur";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("quibusdam", "explicabo");
                                    put("deserunt", "distinctio");
                                    put("quibusdam", "labore");
                                }};
                                essential = false;
                                name = "modi";
                                source = "qui";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("cupiditate", "quos");
                                    put("perferendis", "magni");
                                }};
                                essential = false;
                                name = "assumenda";
                                source = "ipsam";
                            }}),
                        }};
                        samlToken = new org.openapis.openapi.models.shared.OptionalClaim[]{{
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("dolorum", "excepturi");
                                }};
                                essential = false;
                                name = "tempora";
                                source = "facilis";
                            }}),
                        }};
                    }};
                    orgRestrictions = new String[]{{
                        add("labore"),
                        add("delectus"),
                        add("eum"),
                    }};
                    passwordCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]{{
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("sint", new java.util.HashMap<String, Object>() {{
                                put("provident", "necessitatibus");
                                put("sint", "officia");
                            }});
                            put("dolor", new java.util.HashMap<String, Object>() {{
                                put("a", "dolorum");
                                put("in", "in");
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }});
                            put("magnam", new java.util.HashMap<String, Object>() {{
                                put("facere", "ea");
                                put("aliquid", "laborum");
                                put("accusamus", "non");
                                put("occaecati", "enim");
                            }});
                            put("accusamus", new java.util.HashMap<String, Object>() {{
                                put("quidem", "provident");
                                put("nam", "id");
                                put("blanditiis", "deleniti");
                                put("sapiente", "amet");
                            }});
                        }}),
                    }};
                    preAuthorizedApplications = new org.openapis.openapi.models.shared.PreAuthorizedApplication[]{{
                        add(new PreAuthorizedApplication() {{
                            appId = "nisi";
                            extensions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationExtension[]{{
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("omnis"),
                                        add("molestiae"),
                                        add("perferendis"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("magnam"),
                                        add("distinctio"),
                                    }};
                                }}),
                            }};
                            permissions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationPermission[]{{
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("labore"),
                                        add("suscipit"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("nobis"),
                                        add("eum"),
                                        add("vero"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("architecto"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                            }};
                        }}),
                        add(new PreAuthorizedApplication() {{
                            appId = "magnam";
                            extensions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationExtension[]{{
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("ullam"),
                                        add("provident"),
                                        add("quos"),
                                    }};
                                }}),
                            }};
                            permissions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationPermission[]{{
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("mollitia"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("mollitia"),
                                        add("ad"),
                                        add("eum"),
                                        add("dolor"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("odit"),
                                        add("nemo"),
                                        add("quasi"),
                                        add("iure"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                            }};
                        }}),
                        add(new PreAuthorizedApplication() {{
                            appId = "doloribus";
                            extensions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationExtension[]{{
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("maxime"),
                                        add("deleniti"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("in"),
                                        add("architecto"),
                                        add("architecto"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("ullam"),
                                        add("expedita"),
                                        add("nihil"),
                                        add("repellat"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("sed"),
                                        add("saepe"),
                                        add("pariatur"),
                                        add("accusantium"),
                                    }};
                                }}),
                            }};
                            permissions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationPermission[]{{
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("natus"),
                                        add("magni"),
                                        add("sunt"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                            }};
                        }}),
                    }};
                    publicClient = false;
                    publisherDomain = "quo";
                    replyUrls = new String[]{{
                        add("pariatur"),
                        add("maxime"),
                        add("ea"),
                        add("excepturi"),
                    }};
                    requiredResourceAccess = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]{{
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("accusantium", new java.util.HashMap<String, Object>() {{
                                put("maiores", "quidem");
                            }});
                            put("ipsam", new java.util.HashMap<String, Object>() {{
                                put("autem", "nam");
                                put("eaque", "pariatur");
                            }});
                        }}),
                    }};
                    samlMetadataUrl = "nemo";
                    signInAudience = "voluptatibus";
                    wwwHomepage = "perferendis";
                }};
            }};            

            ApplicationsCreateResponse res = sdk.application.applicationsCreate(req);

            if (res.application.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->