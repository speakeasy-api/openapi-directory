# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Payments-Gateway-API/1.0/go
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

    req := operations.AffiliationByIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        AffiliationID: "e046d326-5421-45ab-95ae-f13d37f260b5",
    }

    ctx := context.Background()
    res, err := s.Configuration.AffiliationByID(ctx, req)
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


### Configuration

* `AffiliationByID` - Affiliation By Id
* `Affiliations` - Affiliations
* `AvailablePaymentMethods` - Available Payment Methods
* `InsertAffiliation` - Insert Affiliation
* `InsertRule` - Insert Rule
* `PutRuleByID` - Rule By Id
* `Rule` - Delete Rule
* `RuleByID` - Rule By Id
* `Rules` - Rules
* `UpdateAffiliation` - Update Affiliation

### Installments

* `Installmentsoptions` - Installments options

### TransactionFlow

* `Cancelthetransaction` - Cancel the transaction
* `Refundthetransaction` - Refund the transaction
* `Settlethetransaction` - Settle the transaction

### TransactionProcess

* `OneCreateanewtransaction` - 1. Starts a new transaction
* `TwoSendPaymentsPublic` - 2.1 Send Payments Information Public
* `TwoSendPaymentsWithSavedCreditCard` - 2.2 Send Payments With Saved Credit Card
* `ThreeSendAdditionalData` - 3. Send Additional Data
* `FourDoauthorization` - Do authorization
* `PaymentDetails` - Payment Details
* `TransactionDetails` - Transaction Details
* `TransactionSettlementDetails` - Transaction Settlement  Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
