import dataclasses
from typing import Optional
from ..shared import postpublicnotificationdefinitionrequest as shared_postpublicnotificationdefinitionrequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import getpublicnotificationdefinitionresponse as shared_getpublicnotificationdefinitionresponse


@dataclasses.dataclass
class PostCreateNotificationDefinitionHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCreateNotificationDefinitionRequest:
    headers: PostCreateNotificationDefinitionHeaders = dataclasses.field()
    request: shared_postpublicnotificationdefinitionrequest.PostPublicNotificationDefinitionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCreateNotificationDefinitionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_public_notification_definition_response: Optional[shared_getpublicnotificationdefinitionresponse.GetPublicNotificationDefinitionResponse] = dataclasses.field(default=None)
    
