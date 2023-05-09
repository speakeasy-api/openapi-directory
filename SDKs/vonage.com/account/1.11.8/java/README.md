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
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDRequest;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDResponse;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCtrlGetAccountServicesByAccountIDRequest req = new AccountCtrlGetAccountServicesByAccountIDRequest(5488.14);            

            AccountCtrlGetAccountServicesByAccountIDResponse res = sdk.accountCtrlGetAccountServicesByAccountID(req, new AccountCtrlGetAccountServicesByAccountIDSecurity("provident") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accountHalResponse != null) {
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

### [SDK](docs/sdk/README.md)

* [accountCtrlGetAccountServicesByAccountID](docs/sdk/README.md#accountctrlgetaccountservicesbyaccountid) - Get account data by ID
* [accountCtrlGetLocationByID](docs/sdk/README.md#accountctrlgetlocationbyid) - Get location data by account ID and location ID
* [accountCtrlGetLocationsByAccountID](docs/sdk/README.md#accountctrlgetlocationsbyaccountid) - Get account locations data by account ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
