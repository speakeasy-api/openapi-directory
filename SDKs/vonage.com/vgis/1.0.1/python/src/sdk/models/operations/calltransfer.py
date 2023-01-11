import dataclasses
from typing import Optional
from ..shared import calltransfer as shared_calltransfer
from ..shared import call as shared_call
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CallTransferPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CallTransferRequest:
    path_params: CallTransferPathParams = dataclasses.field()
    request: shared_calltransfer.CallTransfer = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CallTransferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    call: Optional[shared_call.Call] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
