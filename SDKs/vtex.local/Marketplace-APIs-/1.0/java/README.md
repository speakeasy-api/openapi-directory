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
import org.openapis.openapi.models.operations.GetSuggestionRequest;
import org.openapis.openapi.models.operations.GetSuggestionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuggestionRequest req = new GetSuggestionRequest() {{
                accept = "corrupti";
                contentType = "provident";
                accountName = "distinctio";
                sellerId = "quibusdam";
                sellerSkuId = "unde";
            }}            

            GetSuggestionResponse res = sdk.getSuggestions.getSuggestion(req);

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


### getSuggestions

* `getSuggestion` - Get SKU Suggestion by ID
* `getsuggestions` - Get all SKU suggestions

### getVersions

* `getSuggestionbyversion` - Get Version by ID
* `getVersions` - Get all Versions

### manageSuggestions

* `deleteSuggestion` - Delete SKU Suggestion
* `saveSuggestion` - Send SKU Suggestion

### matchReceivedSKUs

* `match` - Match Received SKUs individually
* `matchMultiple` - Match Multiple Received SKUs

### skuApprovalSettings

* `getaccountconfig` - Get Account's Approval Settings
* `getautoApprovevaluefromconfig` - Get autoApprove Status in Account Settings
* `getselleraccountconfig` - Get Seller's Approval Settings
* `putselleraccountconfig` - Save Seller's Approval Settings
* `saveaccountconfig` - Save Account's Approval Settings
* `saveautoapproveforaccount` - Activate autoApprove in Marketplace's Account
* `saveautoapproveforaccountseller` - Activate autoApprove Setting for a Seller
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
