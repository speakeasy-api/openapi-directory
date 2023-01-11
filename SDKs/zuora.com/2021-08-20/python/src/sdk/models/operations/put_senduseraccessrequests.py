import dataclasses
from typing import Optional
from ..shared import putsenduseraccessrequesttype as shared_putsenduseraccessrequesttype
from ..shared import putsenduseraccessrequestresponsetype as shared_putsenduseraccessrequestresponsetype


@dataclasses.dataclass
class PutSendUserAccessRequestsPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSendUserAccessRequestsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSendUserAccessRequestsRequest:
    headers: PutSendUserAccessRequestsHeaders = dataclasses.field()
    path_params: PutSendUserAccessRequestsPathParams = dataclasses.field()
    request: shared_putsenduseraccessrequesttype.PutSendUserAccessRequestType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSendUserAccessRequestsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_send_user_access_request_response_type: Optional[shared_putsenduseraccessrequestresponsetype.PutSendUserAccessRequestResponseType] = dataclasses.field(default=None)
    
