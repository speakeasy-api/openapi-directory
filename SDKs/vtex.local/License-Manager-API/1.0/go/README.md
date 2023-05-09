# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/License-Manager-API/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.GetAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [GetAccount](docs/account/README.md#getaccount) - Get information about account

### [AppKeys](docs/appkeys/README.md)

* [Createnewappkey](docs/appkeys/README.md#createnewappkey) - Create new appkey
* [Getappkeysfromaccount](docs/appkeys/README.md#getappkeysfromaccount) - Get appKeys from account
* [Updateappkey](docs/appkeys/README.md#updateappkey) - Update appkey

### [Roles](docs/roles/README.md)

* [GetListRoles](docs/roles/README.md#getlistroles) - Get List of Roles
* [GetRolesbyUser](docs/roles/README.md#getrolesbyuser) - Get Roles by User/appKey
* [PutRolesinUser](docs/roles/README.md#putrolesinuser) - Put Roles in User/appKey
* [RemoveRolefromUser](docs/roles/README.md#removerolefromuser) - Remove Role from User/appKey

### [Store](docs/store/README.md)

* [GetByAccount](docs/store/README.md#getbyaccount) - Get Stores

### [User](docs/user/README.md)

* [CreateUser](docs/user/README.md#createuser) - Create User
* [GetListUsers](docs/user/README.md#getlistusers) - Get List of Users
* [GetUser](docs/user/README.md#getuser) - Get User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
