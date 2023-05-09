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

import(
	"context"
	"log"
	"openapi"
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


### [Accounts](docs/accounts/README.md)

* [GetAccount](docs/accounts/README.md#getaccount) - Account info

### [Calls](docs/calls/README.md)

* [CallAnswer](docs/calls/README.md#callanswer) - Answer call (On supported devices)
* [CallHold](docs/calls/README.md#callhold) - Put call on hold
* [CallTransfer](docs/calls/README.md#calltransfer) - Transfer call
* [CallUnold](docs/calls/README.md#callunold) - Unhold
* [CallVMTransfer](docs/calls/README.md#callvmtransfer) - Send call to voicemail
* [CreateCall](docs/calls/README.md#createcall) - Place a call
* [DestroyCall](docs/calls/README.md#destroycall) - End a call
* [GetCallsCount](docs/calls/README.md#getcallscount) - Get calls count
* [GetRoles](docs/calls/README.md#getroles) - Get a call
* [ListCalls](docs/calls/README.md#listcalls) - List active calls

### [Events](docs/events/README.md)

* [GetEvent](docs/events/README.md#getevent) - Get event
* [GetEventsCount](docs/events/README.md#geteventscount) - Get events count
* [ListEvents](docs/events/README.md#listevents) - List events

### [Users](docs/users/README.md)

* [GetUser](docs/users/README.md#getuser) - User info

### [Webhooks](docs/webhooks/README.md)

* [CreateWebhook](docs/webhooks/README.md#createwebhook) - Create a new webhook subscription
* [DestroyWebhook](docs/webhooks/README.md#destroywebhook) - Remove a web hook
* [ListWebhooks](docs/webhooks/README.md#listwebhooks) - List web hooks
* [RenewWebhook](docs/webhooks/README.md#renewwebhook) - Renews a web hook
* [ViewWebhook](docs/webhooks/README.md#viewwebhook) - Get web hook details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
