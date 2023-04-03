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


### configuration

* `affiliationById` - Affiliation By Id
* `affiliations` - Affiliations
* `availablePaymentMethods` - Available Payment Methods
* `insertAffiliation` - Insert Affiliation
* `insertRule` - Insert Rule
* `putRuleById` - Rule By Id
* `rule` - Delete Rule
* `ruleById` - Rule By Id
* `rules` - Rules
* `updateAffiliation` - Update Affiliation

### installments

* `installmentsoptions` - Installments options

### transactionFlow

* `cancelthetransaction` - Cancel the transaction
* `refundthetransaction` - Refund the transaction
* `settlethetransaction` - Settle the transaction

### transactionProcess

* `oneCreateanewtransaction` - 1. Starts a new transaction
* `twoSendPaymentsPublic` - 2.1 Send Payments Information Public
* `twoSendPaymentsWithSavedCreditCard` - 2.2 Send Payments With Saved Credit Card
* `threeSendAdditionalData` - 3. Send Additional Data
* `fourDoauthorization` - Do authorization
* `paymentDetails` - Payment Details
* `transactionDetails` - Transaction Details
* `transactionSettlementDetails` - Transaction Settlement  Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
