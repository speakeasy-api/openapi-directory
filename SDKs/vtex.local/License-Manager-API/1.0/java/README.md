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
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountResponse res = sdk.account.getAccount();

            if (res.accountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [getAccount](docs/account/README.md#getaccount) - Get information about account

### [appKeys](docs/appkeys/README.md)

* [createnewappkey](docs/appkeys/README.md#createnewappkey) - Create new appkey
* [getappkeysfromaccount](docs/appkeys/README.md#getappkeysfromaccount) - Get appKeys from account
* [updateappkey](docs/appkeys/README.md#updateappkey) - Update appkey

### [roles](docs/roles/README.md)

* [getListRoles](docs/roles/README.md#getlistroles) - Get List of Roles
* [getRolesbyUser](docs/roles/README.md#getrolesbyuser) - Get Roles by User/appKey
* [putRolesinUser](docs/roles/README.md#putrolesinuser) - Put Roles in User/appKey
* [removeRolefromUser](docs/roles/README.md#removerolefromuser) - Remove Role from User/appKey

### [store](docs/store/README.md)

* [getByAccount](docs/store/README.md#getbyaccount) - Get Stores

### [user](docs/user/README.md)

* [createUser](docs/user/README.md#createuser) - Create User
* [getListUsers](docs/user/README.md#getlistusers) - Get List of Users
* [getUser](docs/user/README.md#getuser) - Get User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
