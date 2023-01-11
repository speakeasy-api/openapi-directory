<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    azureAuth = new SchemeAzureAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ApplicationsCreateRequest req = new ApplicationsCreateRequest() {{
                pathParams = new ApplicationsCreatePathParams() {{
                    tenantID = "voluptatem";
                }};
                queryParams = new ApplicationsCreateQueryParams() {{
                    apiVersion = "velit";
                }};
                request = new ApplicationsCreateRequests() {{
                    applicationCreateParameters = new ApplicationCreateParameters() {{
                        allowGuestsSignIn = true;
                        allowPassthroughUsers = false;
                        appLogoUrl = "dignissimos";
                        appPermissions = new String[]() {{
                            add("accusantium"),
                            add("dolores"),
                            add("et"),
                        }};
                        appRoles = new openapisdk.models.shared.AppRole[]() {{
                            add(new AppRole() {{
                                allowedMemberTypes = new String[]() {{
                                    add("sit"),
                                }};
                                description = "sint";
                                displayName = "aperiam";
                                id = "nulla";
                                isEnabled = true;
                                value = "qui";
                            }}),
                        }};
                        availableToOtherTenants = false;
                        displayName = "mollitia";
                        errorUrl = "eveniet";
                        groupMembershipClaims = "All";
                        homepage = "velit";
                        identifierUris = new String[]() {{
                            add("quam"),
                            add("sequi"),
                            add("ut"),
                        }};
                        informationalUrls = new InformationalUrl() {{
                            marketing = "aperiam";
                            privacy = "vel";
                            support = "reprehenderit";
                            termsOfService = "nesciunt";
                        }};
                        isDeviceOnlyAuthSupported = false;
                        keyCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("dolor", new java.util.HashMap<String, Object>() {{
                                    put("animi", "ut");
                                    put("sit", "maiores");
                                    put("in", "est");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("ea", new java.util.HashMap<String, Object>() {{
                                    put("pariatur", "id");
                                    put("voluptatem", "esse");
                                }});
                                put("in", new java.util.HashMap<String, Object>() {{
                                    put("consectetur", "et");
                                    put("nesciunt", "ab");
                                    put("aut", "sapiente");
                                }});
                            }}),
                        }};
                        knownClientApplications = new String[]() {{
                            add("autem"),
                            add("placeat"),
                            add("velit"),
                        }};
                        logoutUrl = "minus";
                        oauth2AllowImplicitFlow = true;
                        oauth2AllowUrlPathMatching = false;
                        oauth2Permissions = new openapisdk.models.shared.OAuth2Permission[]() {{
                            add(new OAuth2Permission() {{
                                adminConsentDescription = "consequatur";
                                adminConsentDisplayName = "aut";
                                id = "et";
                                isEnabled = false;
                                type = "atque";
                                userConsentDescription = "praesentium";
                                userConsentDisplayName = "perferendis";
                                value = "ab";
                            }}),
                            add(new OAuth2Permission() {{
                                adminConsentDescription = "cumque";
                                adminConsentDisplayName = "minus";
                                id = "quo";
                                isEnabled = true;
                                type = "eaque";
                                userConsentDescription = "qui";
                                userConsentDisplayName = "maxime";
                                value = "libero";
                            }}),
                            add(new OAuth2Permission() {{
                                adminConsentDescription = "qui";
                                adminConsentDisplayName = "ea";
                                id = "porro";
                                isEnabled = true;
                                type = "dolore";
                                userConsentDescription = "sint";
                                userConsentDisplayName = "non";
                                value = "et";
                            }}),
                        }};
                        oauth2RequirePostResponse = true;
                        optionalClaims = new OptionalClaims() {{
                            accessToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("hic", "qui");
                                    }};
                                    essential = false;
                                    name = "facilis";
                                    source = "consequatur";
                                }}),
                            }};
                            idToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("tempore", "est");
                                    }};
                                    essential = false;
                                    name = "quibusdam";
                                    source = "ut";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("porro", "praesentium");
                                    }};
                                    essential = false;
                                    name = "ipsa";
                                    source = "rerum";
                                }}),
                            }};
                            samlToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("dolore", "doloribus");
                                        put("necessitatibus", "aliquam");
                                    }};
                                    essential = false;
                                    name = "sint";
                                    source = "eos";
                                }}),
                            }};
                        }};
                        orgRestrictions = new String[]() {{
                            add("vitae"),
                            add("sit"),
                            add("asperiores"),
                        }};
                        passwordCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("assumenda", new java.util.HashMap<String, Object>() {{
                                    put("alias", "in");
                                    put("repellendus", "repudiandae");
                                    put("sed", "praesentium");
                                }});
                            }}),
                        }};
                        preAuthorizedApplications = new openapisdk.models.shared.PreAuthorizedApplication[]() {{
                            add(new PreAuthorizedApplication() {{
                                appId = "sunt";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("voluptas"),
                                        }};
                                    }}),
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("ratione"),
                                            add("dolore"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("et"),
                                            add("ea"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                }};
                            }}),
                        }};
                        publicClient = true;
                        publisherDomain = "odit";
                        replyUrls = new String[]() {{
                            add("voluptate"),
                            add("ut"),
                            add("inventore"),
                        }};
                        requiredResourceAccess = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("minima", new java.util.HashMap<String, Object>() {{
                                    put("cumque", "quia");
                                    put("quasi", "inventore");
                                    put("aut", "rerum");
                                }});
                                put("nisi", new java.util.HashMap<String, Object>() {{
                                    put("quia", "debitis");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("vel", new java.util.HashMap<String, Object>() {{
                                    put("non", "a");
                                }});
                                put("mollitia", new java.util.HashMap<String, Object>() {{
                                    put("at", "sunt");
                                }});
                            }}),
                        }};
                        samlMetadataUrl = "aut";
                        signInAudience = "voluptate";
                        wwwHomepage = "excepturi";
                    }};
                    applicationCreateParameters1 = new ApplicationCreateParameters() {{
                        allowGuestsSignIn = true;
                        allowPassthroughUsers = false;
                        appLogoUrl = "nihil";
                        appPermissions = new String[]() {{
                            add("quo"),
                            add("asperiores"),
                            add("maxime"),
                        }};
                        appRoles = new openapisdk.models.shared.AppRole[]() {{
                            add(new AppRole() {{
                                allowedMemberTypes = new String[]() {{
                                    add("sit"),
                                    add("eum"),
                                }};
                                description = "sed";
                                displayName = "expedita";
                                id = "et";
                                isEnabled = false;
                                value = "quia";
                            }}),
                        }};
                        availableToOtherTenants = false;
                        displayName = "nulla";
                        errorUrl = "ratione";
                        groupMembershipClaims = "None";
                        homepage = "ipsam";
                        identifierUris = new String[]() {{
                            add("facilis"),
                            add("ipsa"),
                        }};
                        informationalUrls = new InformationalUrl() {{
                            marketing = "sunt";
                            privacy = "doloremque";
                            support = "minus";
                            termsOfService = "ex";
                        }};
                        isDeviceOnlyAuthSupported = true;
                        keyCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("harum", new java.util.HashMap<String, Object>() {{
                                    put("natus", "quibusdam");
                                    put("ullam", "veniam");
                                }});
                                put("expedita", new java.util.HashMap<String, Object>() {{
                                    put("omnis", "aliquid");
                                }});
                                put("et", new java.util.HashMap<String, Object>() {{
                                    put("commodi", "tenetur");
                                    put("et", "sed");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("sit", new java.util.HashMap<String, Object>() {{
                                    put("voluptate", "tenetur");
                                    put("exercitationem", "animi");
                                }});
                                put("facere", new java.util.HashMap<String, Object>() {{
                                    put("ipsum", "hic");
                                    put("amet", "quasi");
                                }});
                                put("nostrum", new java.util.HashMap<String, Object>() {{
                                    put("eum", "aut");
                                    put("beatae", "incidunt");
                                    put("est", "a");
                                }});
                            }}),
                        }};
                        knownClientApplications = new String[]() {{
                            add("sit"),
                            add("quaerat"),
                            add("pariatur"),
                        }};
                        logoutUrl = "sunt";
                        oauth2AllowImplicitFlow = false;
                        oauth2AllowUrlPathMatching = true;
                        oauth2Permissions = new openapisdk.models.shared.OAuth2Permission[]() {{
                            add(new OAuth2Permission() {{
                                adminConsentDescription = "non";
                                adminConsentDisplayName = "veniam";
                                id = "ex";
                                isEnabled = true;
                                type = "eos";
                                userConsentDescription = "quas";
                                userConsentDisplayName = "et";
                                value = "temporibus";
                            }}),
                        }};
                        oauth2RequirePostResponse = false;
                        optionalClaims = new OptionalClaims() {{
                            accessToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("deleniti", "eum");
                                        put("ut", "dolorum");
                                    }};
                                    essential = true;
                                    name = "ab";
                                    source = "inventore";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("voluptas", "neque");
                                        put("libero", "sit");
                                        put("quibusdam", "dolore");
                                    }};
                                    essential = true;
                                    name = "deserunt";
                                    source = "est";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("culpa", "est");
                                        put("veniam", "qui");
                                        put("doloribus", "ad");
                                    }};
                                    essential = true;
                                    name = "sit";
                                    source = "est";
                                }}),
                            }};
                            idToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("ipsum", "dolor");
                                        put("nihil", "error");
                                        put("sunt", "quia");
                                    }};
                                    essential = false;
                                    name = "dolores";
                                    source = "quae";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("eaque", "et");
                                        put("et", "ea");
                                    }};
                                    essential = false;
                                    name = "voluptate";
                                    source = "beatae";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("reprehenderit", "nostrum");
                                        put("velit", "necessitatibus");
                                        put("illo", "aut");
                                    }};
                                    essential = true;
                                    name = "quia";
                                    source = "ab";
                                }}),
                            }};
                            samlToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("id", "placeat");
                                        put("error", "odio");
                                    }};
                                    essential = false;
                                    name = "ea";
                                    source = "ad";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("nemo", "illo");
                                        put("animi", "earum");
                                        put("neque", "vero");
                                    }};
                                    essential = false;
                                    name = "quam";
                                    source = "iste";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("eos", "aut");
                                        put("ut", "enim");
                                    }};
                                    essential = false;
                                    name = "cupiditate";
                                    source = "aperiam";
                                }}),
                            }};
                        }};
                        orgRestrictions = new String[]() {{
                            add("molestiae"),
                            add("explicabo"),
                            add("cumque"),
                        }};
                        passwordCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("sunt", new java.util.HashMap<String, Object>() {{
                                    put("cum", "placeat");
                                }});
                                put("ullam", new java.util.HashMap<String, Object>() {{
                                    put("exercitationem", "est");
                                }});
                                put("unde", new java.util.HashMap<String, Object>() {{
                                    put("dolor", "omnis");
                                    put("explicabo", "voluptatum");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("perferendis", new java.util.HashMap<String, Object>() {{
                                    put("incidunt", "qui");
                                    put("velit", "voluptatem");
                                    put("maxime", "omnis");
                                }});
                                put("dolor", new java.util.HashMap<String, Object>() {{
                                    put("veniam", "dolorem");
                                    put("minima", "sint");
                                    put("iste", "magni");
                                }});
                                put("cupiditate", new java.util.HashMap<String, Object>() {{
                                    put("iste", "unde");
                                    put("adipisci", "impedit");
                                    put("tempora", "aut");
                                }});
                            }}),
                        }};
                        preAuthorizedApplications = new openapisdk.models.shared.PreAuthorizedApplication[]() {{
                            add(new PreAuthorizedApplication() {{
                                appId = "corrupti";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("architecto"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("distinctio"),
                                            add("dolore"),
                                            add("non"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("consequatur"),
                                        }};
                                        directAccessGrant = true;
                                    }}),
                                }};
                            }}),
                            add(new PreAuthorizedApplication() {{
                                appId = "animi";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("ut"),
                                            add("hic"),
                                            add("veniam"),
                                        }};
                                    }}),
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("ut"),
                                            add("animi"),
                                            add("atque"),
                                        }};
                                    }}),
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("unde"),
                                            add("repellat"),
                                            add("impedit"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("quia"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("consequatur"),
                                            add("explicabo"),
                                        }};
                                        directAccessGrant = true;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("ipsum"),
                                            add("autem"),
                                        }};
                                        directAccessGrant = true;
                                    }}),
                                }};
                            }}),
                        }};
                        publicClient = false;
                        publisherDomain = "odit";
                        replyUrls = new String[]() {{
                            add("et"),
                        }};
                        requiredResourceAccess = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("est", new java.util.HashMap<String, Object>() {{
                                    put("eveniet", "nam");
                                    put("facilis", "omnis");
                                }});
                                put("mollitia", new java.util.HashMap<String, Object>() {{
                                    put("illum", "eum");
                                    put("quo", "et");
                                }});
                            }}),
                        }};
                        samlMetadataUrl = "non";
                        signInAudience = "omnis";
                        wwwHomepage = "tempora";
                    }};
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