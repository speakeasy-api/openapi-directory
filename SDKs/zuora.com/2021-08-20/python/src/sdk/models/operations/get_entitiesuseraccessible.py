import dataclasses
from typing import Optional
from ..shared import getentitiesuseraccessibleresponsetype as shared_getentitiesuseraccessibleresponsetype


@dataclasses.dataclass
class GetEntitiesUserAccessiblePathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntitiesUserAccessibleHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntitiesUserAccessibleRequest:
    headers: GetEntitiesUserAccessibleHeaders = dataclasses.field()
    path_params: GetEntitiesUserAccessiblePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitiesUserAccessibleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_entities_user_accessible_response_type: Optional[shared_getentitiesuseraccessibleresponsetype.GetEntitiesUserAccessibleResponseType] = dataclasses.field(default=None)
    
