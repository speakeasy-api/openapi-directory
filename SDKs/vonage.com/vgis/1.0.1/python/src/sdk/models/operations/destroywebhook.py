import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DestroyWebhookPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DestroyWebhookRequest:
    path_params: DestroyWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DestroyWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
