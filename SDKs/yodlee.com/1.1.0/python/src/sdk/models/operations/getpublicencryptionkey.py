import dataclasses
from typing import Optional
from ..shared import configspublickeyresponse as shared_configspublickeyresponse


@dataclasses.dataclass
class GetPublicEncryptionKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    configs_public_key_response: Optional[shared_configspublickeyresponse.ConfigsPublicKeyResponse] = dataclasses.field(default=None)
    
