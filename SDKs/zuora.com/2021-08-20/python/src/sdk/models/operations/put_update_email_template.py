import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import putpublicemailtemplaterequest as shared_putpublicemailtemplaterequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import getpublicemailtemplateresponse as shared_getpublicemailtemplateresponse


@dataclasses.dataclass
class PutUpdateEmailTemplatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateEmailTemplateHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateEmailTemplateRequest:
    headers: PutUpdateEmailTemplateHeaders = dataclasses.field()
    path_params: PutUpdateEmailTemplatePathParams = dataclasses.field()
    request: shared_putpublicemailtemplaterequest.PutPublicEmailTemplateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUpdateEmailTemplateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_public_email_template_response: Optional[shared_getpublicemailtemplateresponse.GetPublicEmailTemplateResponse] = dataclasses.field(default=None)
    
