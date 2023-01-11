# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    tenantID = "sit";
                }};
                queryParams = new ApplicationsCreateQueryParams() {{
                    apiVersion = "voluptas";
                }};
                request = new ApplicationsCreateRequests() {{
                    applicationCreateParameters = new ApplicationCreateParameters() {{
                        allowGuestsSignIn = true;
                        allowPassthroughUsers = false;
                        appLogoUrl = "consequuntur";
                        appPermissions = new String[]() {{
                            add("expedita"),
                            add("voluptas"),
                        }};
                        appRoles = new openapisdk.models.shared.AppRole[]() {{
                            add(new AppRole() {{
                                allowedMemberTypes = new String[]() {{
                                    add("nihil"),
                                }};
                                description = "rerum";
                                displayName = "dicta";
                                id = "debitis";
                                isEnabled = true;
                                value = "et";
                            }}),
                        }};
                        availableToOtherTenants = false;
                        displayName = "dolorem";
                        errorUrl = "et";
                        groupMembershipClaims = "None";
                        homepage = "iste";
                        identifierUris = new String[]() {{
                            add("totam"),
                        }};
                        informationalUrls = new InformationalUrl() {{
                            marketing = "dolores";
                            privacy = "illum";
                            support = "debitis";
                            termsOfService = "vel";
                        }};
                        isDeviceOnlyAuthSupported = false;
                        keyCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("aspernatur", new java.util.HashMap<String, Object>() {{
                                    put("totam", "commodi");
                                    put("quis", "est");
                                    put("aut", "odit");
                                }});
                                put("non", new java.util.HashMap<String, Object>() {{
                                    put("omnis", "aut");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("sed", new java.util.HashMap<String, Object>() {{
                                    put("autem", "consectetur");
                                    put("nobis", "odio");
                                }});
                            }}),
                        }};
                        knownClientApplications = new String[]() {{
                            add("recusandae"),
                        }};
                        logoutUrl = "at";
                        oauth2AllowImplicitFlow = false;
                        oauth2AllowUrlPathMatching = true;
                        oauth2Permissions = new openapisdk.models.shared.OAuth2Permission[]() {{
                            add(new OAuth2Permission() {{
                                adminConsentDescription = "sint";
                                adminConsentDisplayName = "inventore";
                                id = "ut";
                                isEnabled = false;
                                type = "aut";
                                userConsentDescription = "reprehenderit";
                                userConsentDisplayName = "tempore";
                                value = "maiores";
                            }}),
                            add(new OAuth2Permission() {{
                                adminConsentDescription = "incidunt";
                                adminConsentDisplayName = "dolor";
                                id = "beatae";
                                isEnabled = true;
                                type = "in";
                                userConsentDescription = "et";
                                userConsentDisplayName = "omnis";
                                value = "ipsum";
                            }}),
                        }};
                        oauth2RequirePostResponse = true;
                        optionalClaims = new OptionalClaims() {{
                            accessToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("vel", "rerum");
                                    }};
                                    essential = true;
                                    name = "voluptas";
                                    source = "quam";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("qui", "qui");
                                    }};
                                    essential = false;
                                    name = "in";
                                    source = "autem";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("ut", "itaque");
                                    }};
                                    essential = false;
                                    name = "neque";
                                    source = "ullam";
                                }}),
                            }};
                            idToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("esse", "architecto");
                                        put("quam", "velit");
                                        put("cumque", "soluta");
                                    }};
                                    essential = true;
                                    name = "voluptates";
                                    source = "magni";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("optio", "qui");
                                        put("earum", "illo");
                                        put("omnis", "ut");
                                    }};
                                    essential = false;
                                    name = "dolor";
                                    source = "commodi";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("reprehenderit", "consectetur");
                                    }};
                                    essential = true;
                                    name = "ut";
                                    source = "laboriosam";
                                }}),
                            }};
                            samlToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("soluta", "aut");
                                    }};
                                    essential = true;
                                    name = "consequuntur";
                                    source = "laudantium";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("ipsa", "expedita");
                                    }};
                                    essential = false;
                                    name = "perferendis";
                                    source = "atque";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("quisquam", "explicabo");
                                    }};
                                    essential = true;
                                    name = "maxime";
                                    source = "eum";
                                }}),
                            }};
                        }};
                        orgRestrictions = new String[]() {{
                            add("et"),
                            add("rerum"),
                        }};
                        passwordCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("cumque", new java.util.HashMap<String, Object>() {{
                                    put("necessitatibus", "est");
                                }});
                                put("quis", new java.util.HashMap<String, Object>() {{
                                    put("labore", "et");
                                }});
                                put("impedit", new java.util.HashMap<String, Object>() {{
                                    put("expedita", "vel");
                                    put("qui", "modi");
                                    put("nihil", "tempora");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("eaque", new java.util.HashMap<String, Object>() {{
                                    put("sit", "autem");
                                    put("quis", "vel");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("placeat", new java.util.HashMap<String, Object>() {{
                                    put("nisi", "quis");
                                }});
                                put("adipisci", new java.util.HashMap<String, Object>() {{
                                    put("rerum", "et");
                                    put("accusamus", "numquam");
                                    put("laborum", "rerum");
                                }});
                            }}),
                        }};
                        preAuthorizedApplications = new openapisdk.models.shared.PreAuthorizedApplication[]() {{
                            add(new PreAuthorizedApplication() {{
                                appId = "laborum";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("minus"),
                                            add("soluta"),
                                            add("aperiam"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("mollitia"),
                                        }};
                                        directAccessGrant = true;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("ipsa"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("ut"),
                                            add("aliquam"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                }};
                            }}),
                            add(new PreAuthorizedApplication() {{
                                appId = "sed";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("consequuntur"),
                                            add("non"),
                                            add("cupiditate"),
                                        }};
                                    }}),
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("molestiae"),
                                            add("pariatur"),
                                            add("quasi"),
                                        }};
                                    }}),
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("enim"),
                                            add("qui"),
                                            add("sit"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("neque"),
                                            add("consequuntur"),
                                        }};
                                        directAccessGrant = true;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("est"),
                                            add("occaecati"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("quia"),
                                            add("temporibus"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                }};
                            }}),
                        }};
                        publicClient = false;
                        publisherDomain = "est";
                        replyUrls = new String[]() {{
                            add("necessitatibus"),
                            add("in"),
                            add("possimus"),
                        }};
                        requiredResourceAccess = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("doloribus", new java.util.HashMap<String, Object>() {{
                                    put("sunt", "earum");
                                    put("et", "ut");
                                    put("asperiores", "et");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("ipsum", new java.util.HashMap<String, Object>() {{
                                    put("voluptas", "nihil");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("suscipit", new java.util.HashMap<String, Object>() {{
                                    put("non", "magnam");
                                    put("ut", "possimus");
                                }});
                            }}),
                        }};
                        samlMetadataUrl = "illo";
                        signInAudience = "qui";
                        wwwHomepage = "quia";
                    }};
                    applicationCreateParameters1 = new ApplicationCreateParameters() {{
                        allowGuestsSignIn = false;
                        allowPassthroughUsers = false;
                        appLogoUrl = "enim";
                        appPermissions = new String[]() {{
                            add("distinctio"),
                            add("delectus"),
                        }};
                        appRoles = new openapisdk.models.shared.AppRole[]() {{
                            add(new AppRole() {{
                                allowedMemberTypes = new String[]() {{
                                    add("repellat"),
                                    add("velit"),
                                }};
                                description = "officia";
                                displayName = "modi";
                                id = "sunt";
                                isEnabled = false;
                                value = "amet";
                            }}),
                            add(new AppRole() {{
                                allowedMemberTypes = new String[]() {{
                                    add("a"),
                                    add("qui"),
                                    add("excepturi"),
                                }};
                                description = "autem";
                                displayName = "corporis";
                                id = "dicta";
                                isEnabled = true;
                                value = "doloremque";
                            }}),
                        }};
                        availableToOtherTenants = false;
                        displayName = "nisi";
                        errorUrl = "recusandae";
                        groupMembershipClaims = "None";
                        homepage = "minus";
                        identifierUris = new String[]() {{
                            add("rerum"),
                            add("ut"),
                            add("rem"),
                        }};
                        informationalUrls = new InformationalUrl() {{
                            marketing = "eos";
                            privacy = "et";
                            support = "reiciendis";
                            termsOfService = "aspernatur";
                        }};
                        isDeviceOnlyAuthSupported = true;
                        keyCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("adipisci", new java.util.HashMap<String, Object>() {{
                                    put("illum", "accusantium");
                                    put("atque", "amet");
                                    put("nisi", "quidem");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("quo", new java.util.HashMap<String, Object>() {{
                                    put("alias", "totam");
                                    put("deserunt", "eius");
                                }});
                                put("repellat", new java.util.HashMap<String, Object>() {{
                                    put("omnis", "totam");
                                    put("aut", "et");
                                    put("magni", "necessitatibus");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("culpa", new java.util.HashMap<String, Object>() {{
                                    put("voluptas", "ut");
                                }});
                                put("veniam", new java.util.HashMap<String, Object>() {{
                                    put("molestias", "rerum");
                                    put("quo", "et");
                                }});
                            }}),
                        }};
                        knownClientApplications = new String[]() {{
                            add("commodi"),
                            add("in"),
                            add("quibusdam"),
                        }};
                        logoutUrl = "asperiores";
                        oauth2AllowImplicitFlow = false;
                        oauth2AllowUrlPathMatching = true;
                        oauth2Permissions = new openapisdk.models.shared.OAuth2Permission[]() {{
                            add(new OAuth2Permission() {{
                                adminConsentDescription = "tempora";
                                adminConsentDisplayName = "commodi";
                                id = "blanditiis";
                                isEnabled = true;
                                type = "in";
                                userConsentDescription = "et";
                                userConsentDisplayName = "odit";
                                value = "est";
                            }}),
                        }};
                        oauth2RequirePostResponse = true;
                        optionalClaims = new OptionalClaims() {{
                            accessToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("perspiciatis", "et");
                                    }};
                                    essential = true;
                                    name = "voluptatem";
                                    source = "ex";
                                }}),
                            }};
                            idToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("distinctio", "cumque");
                                        put("ea", "non");
                                    }};
                                    essential = false;
                                    name = "nam";
                                    source = "beatae";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("qui", "magni");
                                    }};
                                    essential = true;
                                    name = "sit";
                                    source = "aut";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("iusto", "quia");
                                    }};
                                    essential = false;
                                    name = "debitis";
                                    source = "autem";
                                }}),
                            }};
                            samlToken = new openapisdk.models.shared.OptionalClaim[]() {{
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("ut", "non");
                                        put("nihil", "laborum");
                                        put("recusandae", "nihil");
                                    }};
                                    essential = false;
                                    name = "iste";
                                    source = "perferendis";
                                }}),
                                add(new OptionalClaim() {{
                                    additionalProperties = new java.util.HashMap<String, Object>() {{
                                        put("autem", "hic");
                                        put("voluptatem", "omnis");
                                        put("libero", "qui");
                                    }};
                                    essential = false;
                                    name = "minus";
                                    source = "nostrum";
                                }}),
                            }};
                        }};
                        orgRestrictions = new String[]() {{
                            add("sit"),
                            add("repellat"),
                        }};
                        passwordCredentials = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("laboriosam", new java.util.HashMap<String, Object>() {{
                                    put("ea", "tempore");
                                    put("fugit", "aut");
                                }});
                            }}),
                        }};
                        preAuthorizedApplications = new openapisdk.models.shared.PreAuthorizedApplication[]() {{
                            add(new PreAuthorizedApplication() {{
                                appId = "aliquid";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("magni"),
                                            add("recusandae"),
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("dolores"),
                                            add("hic"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("ex"),
                                            add("iure"),
                                            add("et"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("explicabo"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                }};
                            }}),
                            add(new PreAuthorizedApplication() {{
                                appId = "veniam";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("odit"),
                                            add("molestias"),
                                            add("corporis"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("similique"),
                                            add("mollitia"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("quam"),
                                            add("maiores"),
                                            add("totam"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("repellendus"),
                                            add("sunt"),
                                        }};
                                        directAccessGrant = true;
                                    }}),
                                }};
                            }}),
                            add(new PreAuthorizedApplication() {{
                                appId = "earum";
                                extensions = new openapisdk.models.shared.PreAuthorizedApplicationExtension[]() {{
                                    add(new PreAuthorizedApplicationExtension() {{
                                        conditions = new String[]() {{
                                            add("aut"),
                                            add("dolor"),
                                            add("quia"),
                                        }};
                                    }}),
                                }};
                                permissions = new openapisdk.models.shared.PreAuthorizedApplicationPermission[]() {{
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("et"),
                                            add("expedita"),
                                        }};
                                        directAccessGrant = true;
                                    }}),
                                    add(new PreAuthorizedApplicationPermission() {{
                                        accessGrants = new String[]() {{
                                            add("qui"),
                                        }};
                                        directAccessGrant = false;
                                    }}),
                                }};
                            }}),
                        }};
                        publicClient = true;
                        publisherDomain = "cupiditate";
                        replyUrls = new String[]() {{
                            add("saepe"),
                            add("sed"),
                            add("voluptatem"),
                        }};
                        requiredResourceAccess = new java.util.HashMap<String, java.util.HashMap<String, Object>>[]() {{
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("nesciunt", new java.util.HashMap<String, Object>() {{
                                    put("qui", "quis");
                                    put("eligendi", "velit");
                                    put("fuga", "aliquid");
                                }});
                                put("vero", new java.util.HashMap<String, Object>() {{
                                    put("et", "voluptatem");
                                }});
                            }}),
                            add(new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                put("quae", new java.util.HashMap<String, Object>() {{
                                    put("vitae", "rerum");
                                }});
                            }}),
                        }};
                        samlMetadataUrl = "officiis";
                        signInAudience = "commodi";
                        wwwHomepage = "sed";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Application

* `applicationsCreate` - Create a new application.
* `applicationsDelete` - Delete an application.
* `applicationsGet` - Get an application by object ID.
* `applicationsList` - Lists applications by filter parameters.
* `applicationsPatch` - Update an existing application.
* `deletedApplicationsHardDelete` - Hard-delete an application.

### ApplicationKeyCredentials

* `applicationsListKeyCredentials` - Get the keyCredentials associated with an application.
* `applicationsUpdateKeyCredentials` - Update the keyCredentials associated with an application.

### ApplicationOwners

* `applicationsAddOwner` - Add an owner to an application.
* `applicationsListOwners` - Directory objects that are owners of the application.
* `applicationsRemoveOwner` - Remove a member from owners.

### ApplicationPasswordCredentials

* `applicationsListPasswordCredentials` - Get the passwordCredentials associated with an application.
* `applicationsUpdatePasswordCredentials` - Update passwordCredentials associated with an application.

### Domain

* `domainsGet` - Gets a specific domain in the current tenant.
* `domainsList` - Gets a list of domains for the current tenant.

### Group

* `groupsAddMember` - Add a member to a group.
* `groupsCreate` - Create a group in the directory.
* `groupsDelete` - Delete a group from the directory.
* `groupsGet` - Gets group information from the directory.
* `groupsGetGroupMembers` - Gets the members of a group.
* `groupsGetMemberGroups` - Gets a collection of object IDs of groups of which the specified group is a member.
* `groupsIsMemberOf` - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
* `groupsList` - Gets list of groups for the current tenant.
* `groupsRemoveMember` - Remove a member from a group.

### GroupOwners

* `groupsListOwners` - Directory objects that are owners of the group.

### GroupsOwners

* `groupsAddOwner` - Add an owner to a group.
* `groupsRemoveOwner` - Remove a member from owners.

### OAuth2PermissionGrant_Create

* `oAuth2PermissionGrantCreate` - Grants OAuth2 permissions for the relevant resource Ids of an app.

### OAuth2PermissionGrant_List

* `oAuth2PermissionGrantList` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.

### OAuth2PermissionGrant_delete

* `oAuth2PermissionGrantDelete` - Delete a OAuth2 permission grant for the relevant resource Ids of an app.

### Objects

* `objectsGetObjectsByObjectIds` - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.

### ServicePrincipal

* `servicePrincipalsCreate` - Creates a service principal in the directory.
* `servicePrincipalsDelete` - Deletes a service principal from the directory.
* `servicePrincipalsGet` - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
* `servicePrincipalsList` - Gets a list of service principals from the current tenant.
* `servicePrincipalsUpdate` - Updates a service principal in the directory.

### ServicePrincipalAppRoleAssignedTo

* `servicePrincipalsListAppRoleAssignedTo` - Principals (users, groups, and service principals) that are assigned to this service principal.

### ServicePrincipalAppRoleAssignments

* `servicePrincipalsListAppRoleAssignments` - Applications that the service principal is assigned to.

### ServicePrincipalKeyCredentials

* `servicePrincipalsListKeyCredentials` - Get the keyCredentials associated with the specified service principal.
* `servicePrincipalsUpdateKeyCredentials` - Update the keyCredentials associated with a service principal.

### ServicePrincipalOwners

* `servicePrincipalsAddOwner` - Add an owner to a service principal.
* `servicePrincipalsListOwners` - Directory objects that are owners of this service principal.
* `servicePrincipalsRemoveOwner` - Remove a member from owners.

### ServicePrincipalPasswordCredentials

* `servicePrincipalsListPasswordCredentials` - Gets the passwordCredentials associated with a service principal.
* `servicePrincipalsUpdatePasswordCredentials` - Updates the passwordCredentials associated with a service principal.

### ServicePrincipalsByAppId

* `applicationsGetServicePrincipalsIdByAppId` - Gets an object id for a given application id from the current tenant.

### SignedInUser

* `signedInUserGet` - Gets the details for the currently logged-in user.
* `signedInUserListOwnedObjects` - Get the list of directory objects that are owned by the user.

### User

* `usersCreate` - Create a new user.
* `usersDelete` - Delete a user.
* `usersGet` - Gets user information from the directory.
* `usersGetMemberGroups` - Gets a collection that contains the object IDs of the groups of which the user is a member.
* `usersList` - Gets list of users for the current tenant.
* `usersUpdate` - Updates a user.

### deletedApplications

* `deletedApplicationsList` - Gets a list of deleted applications in the directory.
* `deletedApplicationsRestore` - Restores the deleted application in the directory.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
