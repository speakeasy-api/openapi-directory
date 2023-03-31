<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAudioRequest(
    limit=548814,
    use_canonical="true",
    word="distinctio",
)
    
res = s.word.get_audio(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->