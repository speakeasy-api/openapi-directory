import dataclasses
from typing import Optional
from ..shared import apikeyrequest as shared_apikeyrequest
from ..shared import apikeyresponse as shared_apikeyresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GenerateAPIKeyRequest:
    request: shared_apikeyrequest.APIKeyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenerateAPIKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_response: Optional[shared_apikeyresponse.APIKeyResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
