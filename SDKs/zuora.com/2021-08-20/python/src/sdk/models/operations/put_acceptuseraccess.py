import dataclasses
from typing import Optional
from ..shared import putacceptuseraccessresponsetype as shared_putacceptuseraccessresponsetype


@dataclasses.dataclass
class PutAcceptUserAccessPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAcceptUserAccessHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAcceptUserAccessRequest:
    headers: PutAcceptUserAccessHeaders = dataclasses.field()
    path_params: PutAcceptUserAccessPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutAcceptUserAccessResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_accept_user_access_response_type: Optional[shared_putacceptuseraccessresponsetype.PutAcceptUserAccessResponseType] = dataclasses.field(default=None)
    
