import dataclasses
from typing import Optional
from ..shared import callcreate as shared_callcreate
from ..shared import call as shared_call
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateCallRequest:
    request: shared_callcreate.CallCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calls: Optional[list[shared_call.Call]] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
