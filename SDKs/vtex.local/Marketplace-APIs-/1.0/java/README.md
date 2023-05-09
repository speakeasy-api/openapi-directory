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
import org.openapis.openapi.models.operations.GetSuggestionRequest;
import org.openapis.openapi.models.operations.GetSuggestionResponse;
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

            GetSuggestionRequest req = new GetSuggestionRequest("distinctio", "quibusdam", "unde", "nulla", "corrupti");            

            GetSuggestionResponse res = sdk.getSuggestions.getSuggestion(req);

            if (res.statusCode == 200) {
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


### [getSuggestions](docs/getsuggestions/README.md)

* [getSuggestion](docs/getsuggestions/README.md#getsuggestion) - Get SKU Suggestion by ID
* [getsuggestions](docs/getsuggestions/README.md#getsuggestions) - Get all SKU suggestions

### [getVersions](docs/getversions/README.md)

* [getSuggestionbyversion](docs/getversions/README.md#getsuggestionbyversion) - Get Version by ID
* [getVersions](docs/getversions/README.md#getversions) - Get all Versions

### [manageSuggestions](docs/managesuggestions/README.md)

* [deleteSuggestion](docs/managesuggestions/README.md#deletesuggestion) - Delete SKU Suggestion
* [saveSuggestion](docs/managesuggestions/README.md#savesuggestion) - Send SKU Suggestion

### [matchReceivedSKUs](docs/matchreceivedskus/README.md)

* [match](docs/matchreceivedskus/README.md#match) - Match Received SKUs individually
* [matchMultiple](docs/matchreceivedskus/README.md#matchmultiple) - Match Multiple Received SKUs

### [skuApprovalSettings](docs/skuapprovalsettings/README.md)

* [getaccountconfig](docs/skuapprovalsettings/README.md#getaccountconfig) - Get Account's Approval Settings
* [getautoApprovevaluefromconfig](docs/skuapprovalsettings/README.md#getautoapprovevaluefromconfig) - Get autoApprove Status in Account Settings
* [getselleraccountconfig](docs/skuapprovalsettings/README.md#getselleraccountconfig) - Get Seller's Approval Settings
* [putselleraccountconfig](docs/skuapprovalsettings/README.md#putselleraccountconfig) - Save Seller's Approval Settings
* [saveaccountconfig](docs/skuapprovalsettings/README.md#saveaccountconfig) - Save Account's Approval Settings
* [saveautoapproveforaccount](docs/skuapprovalsettings/README.md#saveautoapproveforaccount) - Activate autoApprove in Marketplace's Account
* [saveautoapproveforaccountseller](docs/skuapprovalsettings/README.md#saveautoapproveforaccountseller) - Activate autoApprove Setting for a Seller
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
