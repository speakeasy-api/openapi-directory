import dataclasses
from typing import Optional
from ..shared import call as shared_call
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CallAnswerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CallAnswerRequest:
    path_params: CallAnswerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CallAnswerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    call: Optional[shared_call.Call] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
