# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/walmart.com/price/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.OptCapProgramInPriceRequest(
    request_body=operations.OptCapProgramInPriceRequestBody(
        subsidy_enrolled=False,
        subsidy_preference=False,
    ),
    wm_consumer_channel_type="corrupti",
    wm_qos_correlation_id="provident",
    wm_sec_access_token="distinctio",
    wm_svc_name="quibusdam",
)
    
res = s.prices.opt_cap_program_in_price(req)

if res.opt_cap_program_in_price_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### prices

* `opt_cap_program_in_price` - Set up CAP SKU All
* `price_bulk_uploads` - Update bulk prices (Multiple)
* `update_price` - Update a price
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
