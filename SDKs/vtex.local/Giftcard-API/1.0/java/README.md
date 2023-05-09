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
import org.openapis.openapi.models.operations.CreateGiftCardRequest;
import org.openapis.openapi.models.operations.CreateGiftCardResponse;
import org.openapis.openapi.models.shared.CreateGiftCardRequest;
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

            CreateGiftCardRequest req = new CreateGiftCardRequest("distinctio", "quibusdam",                 new CreateGiftCardRequest("rewards program", "2020-09-01T13:15:30Z", "1234", "insert example here") {{
                                multipleCredits = false;
                                multipleRedemptions = false;
                                restrictedToOwner = false;
                            }};, "unde", "nulla");            

            CreateGiftCardResponse res = sdk.giftCard.createGiftCard(req);

            if (res.response != null) {
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


### [giftCard](docs/giftcard/README.md)

* [createGiftCard](docs/giftcard/README.md#creategiftcard) - Create GiftCard
* [getGiftCardbyID](docs/giftcard/README.md#getgiftcardbyid) - Get GiftCard by ID
* [getGiftCardusingJSON](docs/giftcard/README.md#getgiftcardusingjson) - Get GiftCard using JSON

### [transaction](docs/transaction/README.md)

* [cancelGiftCardTransaction](docs/transaction/README.md#cancelgiftcardtransaction) - Cancel GiftCard Transaction
* [createGiftCardTransaction](docs/transaction/README.md#creategiftcardtransaction) - Create GiftCard Transaction
* [getGiftCardTransactionbyID](docs/transaction/README.md#getgiftcardtransactionbyid) - Get GiftCard Transaction by ID
* [getGiftCardTransactions](docs/transaction/README.md#getgiftcardtransactions) - Get GiftCard Transactions
* [getTransactionAuthorizations](docs/transaction/README.md#gettransactionauthorizations) - Get Transaction Authorizations
* [getTransactionCancellations](docs/transaction/README.md#gettransactioncancellations) - Get Transaction Cancellations
* [getTransactionSettlements](docs/transaction/README.md#gettransactionsettlements) - Get Transaction Settlements
* [settleGiftCardTransaction](docs/transaction/README.md#settlegiftcardtransaction) - Settle GiftCard Transaction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
