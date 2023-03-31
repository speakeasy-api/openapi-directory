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

import org.openapis.openapi.models.operations.GetAdminRequestsUnmatchedNearMissesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminRequestsUnmatchedNearMissesResponse res = sdk.nearMisses.getAdminRequestsUnmatchedNearMisses();

            if (res.getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### nearMisses

* `getAdminRequestsUnmatchedNearMisses` - Retrieve near-misses for all unmatched requests
* `postAdminNearMissesRequest` - Find near misses matching specific request
* `postAdminNearMissesRequestPattern` - Find near misses matching request pattern

### recordings

* `getAdminRecordingsStatus` - Get recording status
* `postAdminRecordingsSnapshot` - Take a snapshot recording
* `postAdminRecordingsStart` - Start recording
* `postAdminRecordingsStop` - Stop recording

### requests

* `deleteAdminRequests` - Delete all requests in journal
* `deleteAdminRequestsRequestId` - Delete request by ID
* `getAdminRequests` - Get all requests in journal
* `getAdminRequestsUnmatched` - Find unmatched requests
* `getAdminRequestsRequestId` - Get request by ID
* `postAdminRequestsCount` - Count requests by criteria
* `postAdminRequestsFind` - Find requests by criteria
* `postAdminRequestsRemove` - Remove requests by criteria
* `postAdminRequestsRemoveByMetadata` - Delete requests mappings matching metadata
* `postAdminRequestsReset` - Empty the request journal

### scenarios

* `getAdminScenarios` - Get all scenarios
* `postAdminScenariosReset` - Reset the state of all scenarios

### stubMappings

* `deleteAdminMappings` - Delete all stub mappings
* `deleteAdminMappingsStubMappingId` - Delete a stub mapping
* `getAdminMappings` - Get all stub mappings
* `getAdminMappingsStubMappingId` - Get stub mapping by ID
* `postAdminMappings` - Create a new stub mapping
* `postAdminMappingsFindByMetadata` - Find stubs by matching on their metadata
* `postAdminMappingsImport` - Import stub mappings
* `postAdminMappingsRemoveByMetadata` - Delete stub mappings matching metadata
* `postAdminMappingsReset` - Reset stub mappings
* `postAdminMappingsSave` - Persist stub mappings
* `putAdminMappingsStubMappingId` - Update a stub mapping

### system

* `postAdminReset` - Reset mappings and request journal
* `postAdminSettings` - Update global settings
* `postAdminShutdown` - Shutdown the WireMock server
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
