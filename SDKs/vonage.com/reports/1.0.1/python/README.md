# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vonage.com/reports/1.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCallLogsRequest(
    account_id="corrupti",
    destination_user="provident",
    direction="Outbound",
    end_gte="quibusdam",
    end_lte="unde",
    from_="nulla",
    page=5448.83,
    page_size=8472.52,
    source_user="vel",
    start_gte="error",
    start_lte="deserunt",
    to="suscipit",
)
    
res = s.get_call_logs(req, operations.GetCallLogsSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.call_logs_hal_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_call_logs` - Retrieve call logs for your account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
