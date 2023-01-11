import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteRequest:
    security: DeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
