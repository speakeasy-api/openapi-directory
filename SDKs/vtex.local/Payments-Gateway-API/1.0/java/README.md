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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AffiliationByIdRequest;
import org.openapis.openapi.models.operations.AffiliationByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AffiliationByIdRequest req = new AffiliationByIdRequest() {{
                accept = "application/json";
                contentType = "application/json";
                xPROVIDERAPIAppKey = "{{X-PROVIDER-API-AppKey}}";
                xPROVIDERAPIAppToken = "{{X-PROVIDER-API-AppToken}}";
                affiliationId = "e046d326-5421-45ab-95ae-f13d37f260b5";
            }}            

            AffiliationByIdResponse res = sdk.configuration.affiliationById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
