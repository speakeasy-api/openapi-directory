# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vonage.com/vgis/1.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.accounts.get_account()

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `get_account` - Account info

### calls

* `call_answer` - Answer call (On supported devices)
* `call_hold` - Put call on hold
* `call_transfer` - Transfer call
* `call_unold` - Unhold
* `call_vm_transfer` - Send call to voicemail
* `create_call` - Place a call
* `destroy_call` - End a call
* `get_calls_count` - Get calls count
* `get_roles` - Get a call
* `list_calls` - List active calls

### events

* `get_event` - Get event
* `get_events_count` - Get events count
* `list_events` - List events

### users

* `get_user` - User info

### webhooks

* `create_webhook` - Create a new webhook subscription
* `destroy_webhook` - Remove a web hook
* `list_webhooks` - List web hooks
* `renew_webhook` - Renews a web hook
* `view_webhook` - Get web hook details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
