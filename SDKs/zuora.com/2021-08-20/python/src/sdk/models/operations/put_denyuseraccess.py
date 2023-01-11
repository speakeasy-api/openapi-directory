import dataclasses
from typing import Optional
from ..shared import putdenyuseraccessresponsetype as shared_putdenyuseraccessresponsetype


@dataclasses.dataclass
class PutDenyUserAccessPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDenyUserAccessHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDenyUserAccessRequest:
    headers: PutDenyUserAccessHeaders = dataclasses.field()
    path_params: PutDenyUserAccessPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutDenyUserAccessResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_deny_user_access_response_type: Optional[shared_putdenyuseraccessresponsetype.PutDenyUserAccessResponseType] = dataclasses.field(default=None)
    
