# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### application

* `applicationsCreate` - Create a new application.
* `applicationsDelete` - Delete an application.
* `applicationsGet` - Get an application by object ID.
* `applicationsList` - Lists applications by filter parameters.
* `applicationsPatch` - Update an existing application.
* `deletedApplicationsHardDelete` - Hard-delete an application.

### applicationKeyCredentials

* `applicationsListKeyCredentials` - Get the keyCredentials associated with an application.
* `applicationsUpdateKeyCredentials` - Update the keyCredentials associated with an application.

### applicationOwners

* `applicationsAddOwner` - Add an owner to an application.
* `applicationsListOwners` - Directory objects that are owners of the application.
* `applicationsRemoveOwner` - Remove a member from owners.

### applicationPasswordCredentials

* `applicationsListPasswordCredentials` - Get the passwordCredentials associated with an application.
* `applicationsUpdatePasswordCredentials` - Update passwordCredentials associated with an application.

### domain

* `domainsGet` - Gets a specific domain in the current tenant.
* `domainsList` - Gets a list of domains for the current tenant.

### group

* `groupsAddMember` - Add a member to a group.
* `groupsCreate` - Create a group in the directory.
* `groupsDelete` - Delete a group from the directory.
* `groupsGet` - Gets group information from the directory.
* `groupsGetGroupMembers` - Gets the members of a group.
* `groupsGetMemberGroups` - Gets a collection of object IDs of groups of which the specified group is a member.
* `groupsIsMemberOf` - Checks whether the specified user, group, contact, or service principal is a direct or transitive member of the specified group.
* `groupsList` - Gets list of groups for the current tenant.
* `groupsRemoveMember` - Remove a member from a group.

### groupOwners

* `groupsListOwners` - Directory objects that are owners of the group.

### groupsOwners

* `groupsAddOwner` - Add an owner to a group.
* `groupsRemoveOwner` - Remove a member from owners.

### oAuth2PermissionGrantCreate

* `oAuth2PermissionGrantCreate` - Grants OAuth2 permissions for the relevant resource Ids of an app.

### oAuth2PermissionGrantList

* `oAuth2PermissionGrantList` - Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.

### oAuth2PermissionGrantDelete

* `oAuth2PermissionGrantDelete` - Delete a OAuth2 permission grant for the relevant resource Ids of an app.

### objects

* `objectsGetObjectsByObjectIds` - Gets the directory objects specified in a list of object IDs. You can also specify which resource collections (users, groups, etc.) should be searched by specifying the optional types parameter.

### servicePrincipal

* `servicePrincipalsCreate` - Creates a service principal in the directory.
* `servicePrincipalsDelete` - Deletes a service principal from the directory.
* `servicePrincipalsGet` - Gets service principal information from the directory. Query by objectId or pass a filter to query by appId
* `servicePrincipalsList` - Gets a list of service principals from the current tenant.
* `servicePrincipalsUpdate` - Updates a service principal in the directory.

### servicePrincipalAppRoleAssignedTo

* `servicePrincipalsListAppRoleAssignedTo` - Principals (users, groups, and service principals) that are assigned to this service principal.

### servicePrincipalAppRoleAssignments

* `servicePrincipalsListAppRoleAssignments` - Applications that the service principal is assigned to.

### servicePrincipalKeyCredentials

* `servicePrincipalsListKeyCredentials` - Get the keyCredentials associated with the specified service principal.
* `servicePrincipalsUpdateKeyCredentials` - Update the keyCredentials associated with a service principal.

### servicePrincipalOwners

* `servicePrincipalsAddOwner` - Add an owner to a service principal.
* `servicePrincipalsListOwners` - Directory objects that are owners of this service principal.
* `servicePrincipalsRemoveOwner` - Remove a member from owners.

### servicePrincipalPasswordCredentials

* `servicePrincipalsListPasswordCredentials` - Gets the passwordCredentials associated with a service principal.
* `servicePrincipalsUpdatePasswordCredentials` - Updates the passwordCredentials associated with a service principal.

### servicePrincipalsByAppId

* `applicationsGetServicePrincipalsIdByAppId` - Gets an object id for a given application id from the current tenant.

### signedInUser

* `signedInUserGet` - Gets the details for the currently logged-in user.
* `signedInUserListOwnedObjects` - Get the list of directory objects that are owned by the user.

### user

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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
