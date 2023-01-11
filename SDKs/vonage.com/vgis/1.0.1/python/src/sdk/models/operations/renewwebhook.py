import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class RenewWebhookPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RenewWebhookRequest:
    path_params: RenewWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RenewWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    
