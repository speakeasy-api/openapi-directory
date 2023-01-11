import dataclasses
from typing import Optional
from ..shared import postpublicemailtemplaterequest as shared_postpublicemailtemplaterequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import getpublicemailtemplateresponse as shared_getpublicemailtemplateresponse


@dataclasses.dataclass
class PostCreateEmailTemplateHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCreateEmailTemplateRequest:
    headers: PostCreateEmailTemplateHeaders = dataclasses.field()
    request: shared_postpublicemailtemplaterequest.PostPublicEmailTemplateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCreateEmailTemplateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_public_email_template_response: Optional[shared_getpublicemailtemplateresponse.GetPublicEmailTemplateResponse] = dataclasses.field(default=None)
    
