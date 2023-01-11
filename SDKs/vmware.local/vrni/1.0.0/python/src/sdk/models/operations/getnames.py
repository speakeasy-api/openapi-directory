import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import namesrequest as shared_namesrequest
from ..shared import namesresponse as shared_namesresponse


@dataclasses.dataclass
class GetNamesSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNamesRequest:
    request: shared_namesrequest.NamesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetNamesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    names_response: Optional[shared_namesresponse.NamesResponse] = dataclasses.field(default=None)
    
