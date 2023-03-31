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