import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class ListWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    webhooks: Optional[list[shared_webhook.Webhook]] = dataclasses.field(default=None)
    
