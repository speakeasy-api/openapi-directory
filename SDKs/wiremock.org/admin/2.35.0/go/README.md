# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/wiremock.org/admin/2.35.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NearMisses.GetAdminRequestsUnmatchedNearMisses(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminRequestsUnmatchedNearMisses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [NearMisses](docs/nearmisses/README.md)

* [GetAdminRequestsUnmatchedNearMisses](docs/nearmisses/README.md#getadminrequestsunmatchednearmisses) - Retrieve near-misses for all unmatched requests
* [PostAdminNearMissesRequest](docs/nearmisses/README.md#postadminnearmissesrequest) - Find near misses matching specific request
* [PostAdminNearMissesRequestPattern](docs/nearmisses/README.md#postadminnearmissesrequestpattern) - Find near misses matching request pattern

### [Recordings](docs/recordings/README.md)

* [GetAdminRecordingsStatus](docs/recordings/README.md#getadminrecordingsstatus) - Get recording status
* [PostAdminRecordingsSnapshot](docs/recordings/README.md#postadminrecordingssnapshot) - Take a snapshot recording
* [PostAdminRecordingsStart](docs/recordings/README.md#postadminrecordingsstart) - Start recording
* [PostAdminRecordingsStop](docs/recordings/README.md#postadminrecordingsstop) - Stop recording

### [Requests](docs/requests/README.md)

* [DeleteAdminRequests](docs/requests/README.md#deleteadminrequests) - Delete all requests in journal
* [DeleteAdminRequestsRequestID](docs/requests/README.md#deleteadminrequestsrequestid) - Delete request by ID
* [GetAdminRequests](docs/requests/README.md#getadminrequests) - Get all requests in journal
* [GetAdminRequestsUnmatched](docs/requests/README.md#getadminrequestsunmatched) - Find unmatched requests
* [GetAdminRequestsRequestID](docs/requests/README.md#getadminrequestsrequestid) - Get request by ID
* [PostAdminRequestsCount](docs/requests/README.md#postadminrequestscount) - Count requests by criteria
* [PostAdminRequestsFind](docs/requests/README.md#postadminrequestsfind) - Find requests by criteria
* [PostAdminRequestsRemove](docs/requests/README.md#postadminrequestsremove) - Remove requests by criteria
* [PostAdminRequestsRemoveByMetadata](docs/requests/README.md#postadminrequestsremovebymetadata) - Delete requests mappings matching metadata
* [~~PostAdminRequestsReset~~](docs/requests/README.md#postadminrequestsreset) - Empty the request journal :warning: **Deprecated**

### [Scenarios](docs/scenarios/README.md)

* [GetAdminScenarios](docs/scenarios/README.md#getadminscenarios) - Get all scenarios
* [PostAdminScenariosReset](docs/scenarios/README.md#postadminscenariosreset) - Reset the state of all scenarios

### [StubMappings](docs/stubmappings/README.md)

* [DeleteAdminMappings](docs/stubmappings/README.md#deleteadminmappings) - Delete all stub mappings
* [DeleteAdminMappingsStubMappingID](docs/stubmappings/README.md#deleteadminmappingsstubmappingid) - Delete a stub mapping
* [GetAdminMappings](docs/stubmappings/README.md#getadminmappings) - Get all stub mappings
* [GetAdminMappingsStubMappingID](docs/stubmappings/README.md#getadminmappingsstubmappingid) - Get stub mapping by ID
* [PostAdminMappings](docs/stubmappings/README.md#postadminmappings) - Create a new stub mapping
* [PostAdminMappingsFindByMetadata](docs/stubmappings/README.md#postadminmappingsfindbymetadata) - Find stubs by matching on their metadata
* [PostAdminMappingsImport](docs/stubmappings/README.md#postadminmappingsimport) - Import stub mappings
* [PostAdminMappingsRemoveByMetadata](docs/stubmappings/README.md#postadminmappingsremovebymetadata) - Delete stub mappings matching metadata
* [PostAdminMappingsReset](docs/stubmappings/README.md#postadminmappingsreset) - Reset stub mappings
* [PostAdminMappingsSave](docs/stubmappings/README.md#postadminmappingssave) - Persist stub mappings
* [PutAdminMappingsStubMappingID](docs/stubmappings/README.md#putadminmappingsstubmappingid) - Update a stub mapping

### [System](docs/system/README.md)

* [PostAdminReset](docs/system/README.md#postadminreset) - Reset mappings and request journal
* [PostAdminSettings](docs/system/README.md#postadminsettings) - Update global settings
* [PostAdminShutdown](docs/system/README.md#postadminshutdown) - Shutdown the WireMock server
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
