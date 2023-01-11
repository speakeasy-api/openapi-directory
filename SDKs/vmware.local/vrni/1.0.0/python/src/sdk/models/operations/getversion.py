import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import versionresponse as shared_versionresponse


@dataclasses.dataclass
class GetVersionSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetVersionRequest:
    security: GetVersionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    version_response: Optional[shared_versionresponse.VersionResponse] = dataclasses.field(default=None)
    
