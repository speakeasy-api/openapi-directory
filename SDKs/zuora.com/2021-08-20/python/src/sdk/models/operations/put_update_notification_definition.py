import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import putpublicnotificationdefinitionrequest as shared_putpublicnotificationdefinitionrequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import getpublicnotificationdefinitionresponse as shared_getpublicnotificationdefinitionresponse


@dataclasses.dataclass
class PutUpdateNotificationDefinitionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateNotificationDefinitionHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateNotificationDefinitionRequest:
    headers: PutUpdateNotificationDefinitionHeaders = dataclasses.field()
    path_params: PutUpdateNotificationDefinitionPathParams = dataclasses.field()
    request: shared_putpublicnotificationdefinitionrequest.PutPublicNotificationDefinitionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUpdateNotificationDefinitionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_public_notification_definition_response: Optional[shared_getpublicnotificationdefinitionresponse.GetPublicNotificationDefinitionResponse] = dataclasses.field(default=None)
    
