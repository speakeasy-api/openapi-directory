import dataclasses
from typing import Optional
from ..shared import getentitiesresponsetypewithid as shared_getentitiesresponsetypewithid


@dataclasses.dataclass
class GetEntityByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntityByIDHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntityByIDRequest:
    headers: GetEntityByIDHeaders = dataclasses.field()
    path_params: GetEntityByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntityByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_entities_response_type_with_id: Optional[shared_getentitiesresponsetypewithid.GetEntitiesResponseTypeWithID] = dataclasses.field(default=None)
    
