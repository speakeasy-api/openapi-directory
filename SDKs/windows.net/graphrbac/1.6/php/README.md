# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

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
