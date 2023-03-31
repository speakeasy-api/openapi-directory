<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreatePodcastRequestBody(
    file_logo=operations.CreatePodcastRequestBodyFileLogo(
        content="corrupti".encode(),
        file_logo="provident",
    ),
    podcast=shared.Podcast(
        author="distinctio",
        block=False,
        categories=[
            "unde",
            "nulla",
            "corrupti",
            "illum",
        ],
        copyright="vel",
        country="Netherlands Antilles",
        description="deserunt",
        explicit=False,
        image="suscipit",
        key="iure",
        keywords=[
            "debitis",
            "ipsa",
        ],
        language="delectus",
        link="tempora",
        owner_email="suscipit",
        owner_name="molestiae",
        show_type="minus",
        subtitle="placeat",
        summary="voluptatum",
        title="Ms.",
    ),
)
    
res = s.api_v2.create_podcast(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->