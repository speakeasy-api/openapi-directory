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

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
