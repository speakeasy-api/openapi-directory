import dataclasses
from typing import Optional
from ..shared import cobrandpublickeyresponse as shared_cobrandpublickeyresponse


@dataclasses.dataclass
class GetPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cobrand_public_key_response: Optional[shared_cobrandpublickeyresponse.CobrandPublicKeyResponse] = dataclasses.field(default=None)
    
