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
    res, err := s.Configuration.AffiliationByID(ctx, operations.AffiliationByIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        AffiliationID: "e046d326-5421-45ab-95ae-f13d37f260b5",
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


### [Configuration](docs/configuration/README.md)

* [AffiliationByID](docs/configuration/README.md#affiliationbyid) - Affiliation By Id
* [Affiliations](docs/configuration/README.md#affiliations) - Affiliations
* [AvailablePaymentMethods](docs/configuration/README.md#availablepaymentmethods) - Available Payment Methods
* [InsertAffiliation](docs/configuration/README.md#insertaffiliation) - Insert Affiliation
* [InsertRule](docs/configuration/README.md#insertrule) - Insert Rule
* [PutRuleByID](docs/configuration/README.md#putrulebyid) - Rule By Id
* [Rule](docs/configuration/README.md#rule) - Delete Rule
* [RuleByID](docs/configuration/README.md#rulebyid) - Rule By Id
* [Rules](docs/configuration/README.md#rules) - Rules
* [UpdateAffiliation](docs/configuration/README.md#updateaffiliation) - Update Affiliation

### [Installments](docs/installments/README.md)

* [Installmentsoptions](docs/installments/README.md#installmentsoptions) - Installments options

### [TransactionFlow](docs/transactionflow/README.md)

* [Cancelthetransaction](docs/transactionflow/README.md#cancelthetransaction) - Cancel the transaction
* [Refundthetransaction](docs/transactionflow/README.md#refundthetransaction) - Refund the transaction
* [Settlethetransaction](docs/transactionflow/README.md#settlethetransaction) - Settle the transaction

### [TransactionProcess](docs/transactionprocess/README.md)

* [OneCreateanewtransaction](docs/transactionprocess/README.md#onecreateanewtransaction) - 1. Starts a new transaction
* [TwoSendPaymentsPublic](docs/transactionprocess/README.md#twosendpaymentspublic) - 2.1 Send Payments Information Public
* [TwoSendPaymentsWithSavedCreditCard](docs/transactionprocess/README.md#twosendpaymentswithsavedcreditcard) - 2.2 Send Payments With Saved Credit Card
* [ThreeSendAdditionalData](docs/transactionprocess/README.md#threesendadditionaldata) - 3. Send Additional Data
* [FourDoauthorization](docs/transactionprocess/README.md#fourdoauthorization) - Do authorization
* [PaymentDetails](docs/transactionprocess/README.md#paymentdetails) - Payment Details
* [TransactionDetails](docs/transactionprocess/README.md#transactiondetails) - Transaction Details
* [TransactionSettlementDetails](docs/transactionprocess/README.md#transactionsettlementdetails) - Transaction Settlement  Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
