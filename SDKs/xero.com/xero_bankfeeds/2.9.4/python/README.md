# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/xero.com/xero_bankfeeds/2.9.4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateFeedConnectionsRequest(
    feed_connections=shared.FeedConnections(
        items=[
            shared.FeedConnection(
                account_id="079a88ea-276d-41fb-a1f1-366ef3e22921",
                account_name="Joe's Savings Account",
                account_number="3809087654321500",
                account_token="10000123",
                account_type="BANK",
                country="GB",
                currency="AUD",
                error=shared.Error(
                    detail="The application has not been configured to use these API endpoints.",
                    status=403,
                    title="Invalid Application",
                    type="invalid-application",
                ),
                id="0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
                status="REJECTED",
            ),
            shared.FeedConnection(
                account_id="079a88ea-276d-41fb-a1f1-366ef3e22921",
                account_name="Joe's Savings Account",
                account_number="3809087654321500",
                account_token="10000123",
                account_type="BANK",
                country="GB",
                currency="AUD",
                error=shared.Error(
                    detail="The application has not been configured to use these API endpoints.",
                    status=403,
                    title="Invalid Application",
                    type="invalid-application",
                ),
                id="0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
                status="REJECTED",
            ),
            shared.FeedConnection(
                account_id="079a88ea-276d-41fb-a1f1-366ef3e22921",
                account_name="Joe's Savings Account",
                account_number="3809087654321500",
                account_token="10000123",
                account_type="BANK",
                country="GB",
                currency="AUD",
                error=shared.Error(
                    detail="The application has not been configured to use these API endpoints.",
                    status=403,
                    title="Invalid Application",
                    type="invalid-application",
                ),
                id="0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
                status="REJECTED",
            ),
        ],
        pagination=shared.Pagination(
            item_count=2,
            page=1,
            page_count=1,
            page_size=10,
        ),
    ),
    xero_tenant_id="provident",
)
    
res = s.bank_feeds.create_feed_connections(req, operations.CreateFeedConnectionsSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.feed_connections is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bank_feeds

* `create_feed_connections` - Create one or more new feed connection
* `create_statements` - Creates one or more new statements
* `delete_feed_connections` - Delete an existing feed connection
* `get_feed_connection` - Retrieve single feed connection based on a unique id provided
* `get_feed_connections` - Searches for feed connections
* `get_statement` - Retrieve single statement based on unique id provided
* `get_statements` - Retrieve all statements
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
