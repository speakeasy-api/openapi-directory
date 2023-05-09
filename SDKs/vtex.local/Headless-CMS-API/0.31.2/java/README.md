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
import org.openapis.openapi.models.operations.GetAllContentTypesRequest;
import org.openapis.openapi.models.operations.GetAllContentTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllContentTypesRequest req = new GetAllContentTypesRequest("faststore");            

            GetAllContentTypesResponse res = sdk.pages.getAllContentTypes(req);

            if (res.getAllContentTypes200ApplicationJSONObject != null) {
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


### [pages](docs/pages/README.md)

* [getAllContentTypes](docs/pages/README.md#getallcontenttypes) - Get all Content Types
* [getCMSpage](docs/pages/README.md#getcmspage) - Get CMS page
* [getPagesbyContentType](docs/pages/README.md#getpagesbycontenttype) - Get all CMS pages by Content Type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
