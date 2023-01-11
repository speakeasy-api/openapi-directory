import dataclasses
from typing import Optional
from ..shared import apikeyresponse as shared_apikeyresponse


@dataclasses.dataclass
class GetAPIKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_response: Optional[shared_apikeyresponse.APIKeyResponse] = dataclasses.field(default=None)
    
