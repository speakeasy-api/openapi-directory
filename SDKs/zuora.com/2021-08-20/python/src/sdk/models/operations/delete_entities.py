import dataclasses
from typing import Optional
from ..shared import deletentityresponsetype as shared_deletentityresponsetype


@dataclasses.dataclass
class DeleteEntitiesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEntitiesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEntitiesRequest:
    headers: DeleteEntitiesHeaders = dataclasses.field()
    path_params: DeleteEntitiesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteEntitiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    delet_entity_response_type: Optional[shared_deletentityresponsetype.DeletEntityResponseType] = dataclasses.field(default=None)
    
