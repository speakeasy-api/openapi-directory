# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Subscriptions-API-(v2)/1.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetreportstatusbyIDRequest{
        Accept: "corrupti",
        ContentType: "provident",
        ReportID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Report.GetreportstatusbyID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Report

* `GetreportstatusbyID` - Get report status by ID
* `RequestreportbyStatus` - Retrieve Subscription report by Status
* `Requestreportbydate` - Retrieve Subscription report by date
* `Requestreportbyorderdate` - Retrieve Subscription report by order date
* `Requestreportbyschedule` - Retrieve Subscription report by schedule
* `Requestreportbyupdate` - Request report by update

### Settings

* `EditSettings` - Edit Subscriptions settings
* `GetSettings` - Get Subscriptions Settings

### SubscriptionGroup

* `AdditemsubscriptionGroupID` - Add Subscription item by groupId
* `CancelSubscriptionbygroupID` - Cancel Subscription by groupId
* `GetAllsubscriptiongroup` - List All subscription groups
* `GetConfigsubscriptionsgroup` - List Subscription group's Configuration
* `GetConversationMessagebygroupID` - Get Conversation Message by groupId
* `GetNextpurchase` - Get Next purchase
* `GetSimulatebysubscriptionGroup` - Get Simulation by subscription-group
* `GetSubscriptionbygroupID` - Get Subscription by groupId
* `GetaddressesbygroupID` - Get addresses by groupId
* `GetfrequencyoptionsbygroupID` - Get frequency options by groupId
* `GetpaymentSystembygroupID` - Get payment System by groupId
* `Getsubscriptiongrouplist` - Get subscription group list
* `GetwillcreatebygroupID` - List 'Will create' by groupId
* `InsertAddressesbygroupID` - Insert Addresses by groupId
* `RetrysubscriptionbygroupID` - Retry subscription by groupId
* `UpdateSubscriptionbygroupID` - Update Subscription by groupId

### Subscriptions

* `CancelSubscriptionsbySubscriptionID` - Cancel Subscriptions by SubscriptionId
* `GetSubscriptionList` - Get Subscription List
* `GetfrequencyoptionsbysubscriptionID` - Get frequency options by subscriptionId
* `GetsubscriptionbyID` - Retrieve subscription by ID
* `Getsubscriptionstocustomer` - Retrieve customer's subscriptions
* `InsertAddressesforSubscription` - Insert Addresses for Subscription
* `UpdateSubscriptionsbySubscriptionID` - Update Subscriptions by SubscriptionId
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
