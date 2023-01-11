import dataclasses
from typing import Optional
from ..shared import call as shared_call
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DestroyCallPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DestroyCallRequest:
    path_params: DestroyCallPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DestroyCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calls: Optional[list[shared_call.Call]] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
