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

            GetVCustomPricesSessionSchemaRequest req = new GetVCustomPricesSessionSchemaRequest("corrupti", "provident");            

            GetVCustomPricesSessionSchemaResponse res = sdk.customPrices.getVCustomPricesSessionSchema(req);

            if (res.requestBody != null) {
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


### [customPrices](docs/customprices/README.md)

* [getVCustomPricesSessionSchema](docs/customprices/README.md#getvcustompricessessionschema) - Get custom prices schema
* [postVCustomPricesSessionSchema](docs/customprices/README.md#postvcustompricessessionschema) - Create or Update custom prices schema

### [priceAssociation](docs/priceassociation/README.md)

* [deleteVCustomPricesRulesPriceAssociationId](docs/priceassociation/README.md#deletevcustompricesrulespriceassociationid) - Disassociate price association by ID
* [getVCustomPricesRulesPriceAssociationId](docs/priceassociation/README.md#getvcustompricesrulespriceassociationid) - Get price association by ID
* [postVCustomPricesRules](docs/priceassociation/README.md#postvcustompricesrules) - Create price association
* [putVCustomPricesRulesPriceAssociationId](docs/priceassociation/README.md#putvcustompricesrulespriceassociationid) - Update price association by ID

### [sessionManagement](docs/sessionmanagement/README.md)

* [postSessions](docs/sessionmanagement/README.md#postsessions) - Update Order Configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
