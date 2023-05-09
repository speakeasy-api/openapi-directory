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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Report.GetreportstatusbyID(ctx, operations.GetreportstatusbyIDRequest{
        Accept: "corrupti",
        ContentType: "provident",
        ReportID: "distinctio",
    })
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


### [Report](docs/report/README.md)

* [GetreportstatusbyID](docs/report/README.md#getreportstatusbyid) - Get report status by ID
* [RequestreportbyStatus](docs/report/README.md#requestreportbystatus) - Retrieve Subscription report by Status
* [Requestreportbydate](docs/report/README.md#requestreportbydate) - Retrieve Subscription report by date
* [Requestreportbyorderdate](docs/report/README.md#requestreportbyorderdate) - Retrieve Subscription report by order date
* [Requestreportbyschedule](docs/report/README.md#requestreportbyschedule) - Retrieve Subscription report by schedule
* [Requestreportbyupdate](docs/report/README.md#requestreportbyupdate) - Request report by update

### [Settings](docs/settings/README.md)

* [EditSettings](docs/settings/README.md#editsettings) - Edit Subscriptions settings
* [GetSettings](docs/settings/README.md#getsettings) - Get Subscriptions Settings

### [SubscriptionGroup](docs/subscriptiongroup/README.md)

* [AdditemsubscriptionGroupID](docs/subscriptiongroup/README.md#additemsubscriptiongroupid) - Add Subscription item by groupId
* [CancelSubscriptionbygroupID](docs/subscriptiongroup/README.md#cancelsubscriptionbygroupid) - Cancel Subscription by groupId
* [GetAllsubscriptiongroup](docs/subscriptiongroup/README.md#getallsubscriptiongroup) - List All subscription groups
* [GetConfigsubscriptionsgroup](docs/subscriptiongroup/README.md#getconfigsubscriptionsgroup) - List Subscription group's Configuration
* [GetConversationMessagebygroupID](docs/subscriptiongroup/README.md#getconversationmessagebygroupid) - Get Conversation Message by groupId
* [GetNextpurchase](docs/subscriptiongroup/README.md#getnextpurchase) - Get Next purchase
* [GetSimulatebysubscriptionGroup](docs/subscriptiongroup/README.md#getsimulatebysubscriptiongroup) - Get Simulation by subscription-group
* [GetSubscriptionbygroupID](docs/subscriptiongroup/README.md#getsubscriptionbygroupid) - Get Subscription by groupId
* [GetaddressesbygroupID](docs/subscriptiongroup/README.md#getaddressesbygroupid) - Get addresses by groupId
* [GetfrequencyoptionsbygroupID](docs/subscriptiongroup/README.md#getfrequencyoptionsbygroupid) - Get frequency options by groupId
* [GetpaymentSystembygroupID](docs/subscriptiongroup/README.md#getpaymentsystembygroupid) - Get payment System by groupId
* [Getsubscriptiongrouplist](docs/subscriptiongroup/README.md#getsubscriptiongrouplist) - Get subscription group list
* [GetwillcreatebygroupID](docs/subscriptiongroup/README.md#getwillcreatebygroupid) - List 'Will create' by groupId
* [InsertAddressesbygroupID](docs/subscriptiongroup/README.md#insertaddressesbygroupid) - Insert Addresses by groupId
* [RetrysubscriptionbygroupID](docs/subscriptiongroup/README.md#retrysubscriptionbygroupid) - Retry subscription by groupId
* [UpdateSubscriptionbygroupID](docs/subscriptiongroup/README.md#updatesubscriptionbygroupid) - Update Subscription by groupId

### [Subscriptions](docs/subscriptions/README.md)

* [CancelSubscriptionsbySubscriptionID](docs/subscriptions/README.md#cancelsubscriptionsbysubscriptionid) - Cancel Subscriptions by SubscriptionId
* [GetSubscriptionList](docs/subscriptions/README.md#getsubscriptionlist) - Get Subscription List
* [GetfrequencyoptionsbysubscriptionID](docs/subscriptions/README.md#getfrequencyoptionsbysubscriptionid) - Get frequency options by subscriptionId
* [GetsubscriptionbyID](docs/subscriptions/README.md#getsubscriptionbyid) - Retrieve subscription by ID
* [Getsubscriptionstocustomer](docs/subscriptions/README.md#getsubscriptionstocustomer) - Retrieve customer's subscriptions
* [InsertAddressesforSubscription](docs/subscriptions/README.md#insertaddressesforsubscription) - Insert Addresses for Subscription
* [UpdateSubscriptionsbySubscriptionID](docs/subscriptions/README.md#updatesubscriptionsbysubscriptionid) - Update Subscriptions by SubscriptionId
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
