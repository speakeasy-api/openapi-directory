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
import org.openapis.openapi.models.operations.CashinRequest;
import org.openapis.openapi.models.operations.CashinResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashinRequest req = new CashinRequest("corrupti", "provident", "distinctio", "quibusdam", 6027.63, "nulla");            

            CashinResponse res = sdk.bets.cashin(req);

            if (res.cashInResponse != null) {
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


### [bets](docs/bets/README.md)

* [cashin](docs/bets/README.md#cashin) - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
* [getBetHistory](docs/bets/README.md#getbethistory) - Retrieves the customer’s bet history.
* [getFreeBets](docs/bets/README.md#getfreebets) - Returns available free bets
* [placeComplexBet](docs/bets/README.md#placecomplexbet) - Places a multiple or a complex bet.
* [placeSingleBet](docs/bets/README.md#placesinglebet) - Places a single bet
* [validateBetslip](docs/bets/README.md#validatebetslip) - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
