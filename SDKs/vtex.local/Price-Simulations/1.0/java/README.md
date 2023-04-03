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

import org.openapis.openapi.models.operations.GetVCustomPricesSessionSchemaRequest;
import org.openapis.openapi.models.operations.GetVCustomPricesSessionSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVCustomPricesSessionSchemaRequest req = new GetVCustomPricesSessionSchemaRequest() {{
                accept = "corrupti";
                contentType = "provident";
            }}            

            GetVCustomPricesSessionSchemaResponse res = sdk.customPrices.getVCustomPricesSessionSchema(req);

            if (res.requestBody.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customPrices

* `getVCustomPricesSessionSchema` - Get custom prices schema
* `postVCustomPricesSessionSchema` - Create or Update custom prices schema

### priceAssociation

* `deleteVCustomPricesRulesPriceAssociationId` - Disassociate price association by ID
* `getVCustomPricesRulesPriceAssociationId` - Get price association by ID
* `postVCustomPricesRules` - Create price association
* `putVCustomPricesRulesPriceAssociationId` - Update price association by ID

### sessionManagement

* `postSessions` - Update Order Configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
