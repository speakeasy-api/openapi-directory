# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vonage.com/vgis/1.0.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.GetAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Accounts

* `GetAccount` - Account info

### Calls

* `CallAnswer` - Answer call (On supported devices)
* `CallHold` - Put call on hold
* `CallTransfer` - Transfer call
* `CallUnold` - Unhold
* `CallVMTransfer` - Send call to voicemail
* `CreateCall` - Place a call
* `DestroyCall` - End a call
* `GetCallsCount` - Get calls count
* `GetRoles` - Get a call
* `ListCalls` - List active calls

### Events

* `GetEvent` - Get event
* `GetEventsCount` - Get events count
* `ListEvents` - List events

### Users

* `GetUser` - User info

### Webhooks

* `CreateWebhook` - Create a new webhook subscription
* `DestroyWebhook` - Remove a web hook
* `ListWebhooks` - List web hooks
* `RenewWebhook` - Renews a web hook
* `ViewWebhook` - Get web hook details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
