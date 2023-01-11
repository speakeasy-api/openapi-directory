import dataclasses
from typing import Optional
from ..shared import webhookcreate as shared_webhookcreate
from ..shared import errorresponse as shared_errorresponse
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class CreateWebhookRequest:
    request: shared_webhookcreate.WebhookCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None)
    
