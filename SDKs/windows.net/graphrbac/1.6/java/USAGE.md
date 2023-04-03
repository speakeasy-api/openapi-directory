<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    azureAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ApplicationsCreateRequest req = new ApplicationsCreateRequest() {{
                applicationCreateParameters = new ApplicationCreateParameters() {{
                    allowGuestsSignIn = false;
                    allowPassthroughUsers = false;
                    appLogoUrl = "corrupti";
                    appPermissions = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    appRoles = new org.openapis.openapi.models.shared.AppRole[]{{
                        add(new AppRole() {{
                            allowedMemberTypes = new String[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                            description = "deserunt";
                            displayName = "suscipit";
                            id = "iure";
                            isEnabled = false;
                            value = "magnam";
                        }}),
                        add(new AppRole() {{
                            allowedMemberTypes = new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }};
                            description = "molestiae";
                            displayName = "minus";
                            id = "placeat";
                            isEnabled = false;
                            value = "voluptatum";
                        }}),
                        add(new AppRole() {{
                            allowedMemberTypes = new String[]{{
                                add("excepturi"),
                                add("nisi"),
                            }};
                            description = "recusandae";
                            displayName = "temporibus";
                            id = "ab";
                            isEnabled = false;
                            value = "quis";
                        }}),
                        add(new AppRole() {{
                            allowedMemberTypes = new String[]{{
                                add("deserunt"),
                            }};
                            description = "perferendis";
                            displayName = "ipsam";
                            id = "repellendus";
                            isEnabled = false;
                            value = "sapiente";
                        }}),
                    }};
                    availableToOtherTenants = false;
                    displayName = "quo";
                    errorUrl = "odit";
                    groupMembershipClaims = "All";
                    homepage = "at";
                    identifierUris = new String[]{{
                        add("molestiae"),
                        add("quod"),
                        add("quod"),
                        add("esse"),
                    }};
                    informationalUrls = new InformationalUrl() {{
                        marketing = "totam";
                        privacy = "porro";
                        support = "dolorum";
                        termsOfService = "dicta";
                    }};
                    isDeviceOnlyAuthSupported = false;
                    keyCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]{{
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("occaecati", new java.util.HashMap<String, Object>() {{
                                put("deleniti", "hic");
                            }});
                            put("optio", new java.util.HashMap<String, Object>() {{
                                put("beatae", "commodi");
                                put("molestiae", "modi");
                                put("qui", "impedit");
                            }});
                            put("cum", new java.util.HashMap<String, Object>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("natus", new java.util.HashMap<String, Object>() {{
                                put("iste", "dolor");
                            }});
                            put("natus", new java.util.HashMap<String, Object>() {{
                                put("hic", "saepe");
                                put("fuga", "in");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("iste", new java.util.HashMap<String, Object>() {{
                                put("saepe", "quidem");
                                put("architecto", "ipsa");
                            }});
                            put("reiciendis", new java.util.HashMap<String, Object>() {{
                                put("mollitia", "laborum");
                                put("dolores", "dolorem");
                                put("corporis", "explicabo");
                            }});
                        }}),
                    }};
                    knownClientApplications = new String[]{{
                        add("enim"),
                        add("omnis"),
                        add("nemo"),
                        add("minima"),
                    }};
                    logoutUrl = "excepturi";
                    oauth2AllowImplicitFlow = false;
                    oauth2AllowUrlPathMatching = false;
                    oauth2Permissions = new org.openapis.openapi.models.shared.OAuth2Permission[]{{
                        add(new OAuth2Permission() {{
                            adminConsentDescription = "iure";
                            adminConsentDisplayName = "culpa";
                            id = "doloribus";
                            isEnabled = false;
                            type = "sapiente";
                            userConsentDescription = "architecto";
                            userConsentDisplayName = "mollitia";
                            value = "dolorem";
                        }}),
                    }};
                    oauth2RequirePostResponse = false;
                    optionalClaims = new OptionalClaims() {{
                        accessToken = new org.openapis.openapi.models.shared.OptionalClaim[]{{
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("repellat", "mollitia");
                                }};
                                essential = false;
                                name = "occaecati";
                                source = "numquam";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("quam", "molestiae");
                                    put("velit", "error");
                                }};
                                essential = false;
                                name = "quia";
                                source = "quis";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("laborum", "animi");
                                }};
                                essential = false;
                                name = "enim";
                                source = "odit";
                            }}),
                        }};
                        idToken = new org.openapis.openapi.models.shared.OptionalClaim[]{{
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("tenetur", "ipsam");
                                }};
                                essential = false;
                                name = "id";
                                source = "possimus";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("quasi", "error");
                                }};
                                essential = false;
                                name = "temporibus";
                                source = "laborum";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("reiciendis", "voluptatibus");
                                }};
                                essential = false;
                                name = "vero";
                                source = "nihil";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("voluptatibus", "ipsa");
                                    put("omnis", "voluptate");
                                    put("cum", "perferendis");
                                }};
                                essential = false;
                                name = "doloremque";
                                source = "reprehenderit";
                            }}),
                        }};
                        samlToken = new org.openapis.openapi.models.shared.OptionalClaim[]{{
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("dicta", "corporis");
                                    put("dolore", "iusto");
                                    put("dicta", "harum");
                                    put("enim", "accusamus");
                                }};
                                essential = false;
                                name = "commodi";
                                source = "repudiandae";
                            }}),
                            add(new OptionalClaim() {{
                                additionalProperties = new java.util.HashMap<String, Object>() {{
                                    put("ipsum", "quidem");
                                }};
                                essential = false;
                                name = "molestias";
                                source = "excepturi";
                            }}),
                        }};
                    }};
                    orgRestrictions = new String[]{{
                        add("modi"),
                        add("praesentium"),
                        add("rem"),
                        add("voluptates"),
                    }};
                    passwordCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]{{
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("sint", new java.util.HashMap<String, Object>() {{
                                put("itaque", "incidunt");
                            }});
                            put("enim", new java.util.HashMap<String, Object>() {{
                                put("est", "quibusdam");
                            }});
                            put("explicabo", new java.util.HashMap<String, Object>() {{
                                put("distinctio", "quibusdam");
                                put("labore", "modi");
                                put("qui", "aliquid");
                            }});
                            put("cupiditate", new java.util.HashMap<String, Object>() {{
                                put("perferendis", "magni");
                                put("assumenda", "ipsam");
                                put("alias", "fugit");
                            }});
                        }}),
                    }};
                    preAuthorizedApplications = new org.openapis.openapi.models.shared.PreAuthorizedApplication[]{{
                        add(new PreAuthorizedApplication() {{
                            appId = "excepturi";
                            extensions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationExtension[]{{
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("tempore"),
                                        add("labore"),
                                        add("delectus"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("non"),
                                        add("eligendi"),
                                    }};
                                }}),
                            }};
                            permissions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationPermission[]{{
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("provident"),
                                        add("necessitatibus"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("officia"),
                                        add("dolor"),
                                        add("debitis"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("dolorum"),
                                        add("in"),
                                        add("in"),
                                        add("illum"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                            }};
                        }}),
                        add(new PreAuthorizedApplication() {{
                            appId = "maiores";
                            extensions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationExtension[]{{
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("magnam"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("facere"),
                                        add("ea"),
                                        add("aliquid"),
                                        add("laborum"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("non"),
                                        add("occaecati"),
                                        add("enim"),
                                        add("accusamus"),
                                    }};
                                }}),
                            }};
                            permissions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationPermission[]{{
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("provident"),
                                        add("nam"),
                                        add("id"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("deleniti"),
                                        add("sapiente"),
                                        add("amet"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("nisi"),
                                        add("vel"),
                                        add("natus"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("molestiae"),
                                        add("perferendis"),
                                        add("nihil"),
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
                                        add("labore"),
                                        add("labore"),
                                        add("suscipit"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("nobis"),
                                        add("eum"),
                                        add("vero"),
                                    }};
                                }}),
                                add(new PreAuthorizedApplicationExtension() {{
                                    conditions = new String[]{{
                                        add("architecto"),
                                    }};
                                }}),
                            }};
                            permissions = new org.openapis.openapi.models.shared.PreAuthorizedApplicationPermission[]{{
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("excepturi"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                                add(new PreAuthorizedApplicationPermission() {{
                                    accessGrants = new String[]{{
                                        add("provident"),
                                        add("quos"),
                                    }};
                                    directAccessGrant = false;
                                }}),
                            }};
                        }}),
                    }};
                    publicClient = false;
                    publisherDomain = "sint";
                    replyUrls = new String[]{{
                        add("mollitia"),
                    }};
                    requiredResourceAccess = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]{{
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("ad", new java.util.HashMap<String, Object>() {{
                                put("dolor", "necessitatibus");
                                put("odit", "nemo");
                            }});
                            put("quasi", new java.util.HashMap<String, Object>() {{
                                put("doloribus", "debitis");
                                put("eius", "maxime");
                            }});
                            put("deleniti", new java.util.HashMap<String, Object>() {{
                                put("in", "architecto");
                                put("architecto", "repudiandae");
                                put("ullam", "expedita");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("repellat", new java.util.HashMap<String, Object>() {{
                                put("sed", "saepe");
                                put("pariatur", "accusantium");
                                put("consequuntur", "praesentium");
                                put("natus", "magni");
                            }});
                            put("sunt", new java.util.HashMap<String, Object>() {{
                                put("illum", "pariatur");
                                put("maxime", "ea");
                                put("excepturi", "odit");
                                put("ea", "accusantium");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("maiores", new java.util.HashMap<String, Object>() {{
                                put("ipsam", "voluptate");
                                put("autem", "nam");
                                put("eaque", "pariatur");
                            }});
                        }}),
                        add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                            put("voluptatibus", new java.util.HashMap<String, Object>() {{
                                put("fugiat", "amet");
                            }});
                            put("aut", new java.util.HashMap<String, Object>() {{
                                put("corporis", "hic");
                                put("libero", "nobis");
                                put("dolores", "quis");
                                put("totam", "dignissimos");
                            }});
                        }}),
                    }};
                    samlMetadataUrl = "eaque";
                    signInAudience = "quis";
                    wwwHomepage = "nesciunt";
                }};
                apiVersion = "eos";
                tenantID = "perferendis";
            }}            

            ApplicationsCreateResponse res = sdk.application.applicationsCreate(req);

            if (res.application.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->