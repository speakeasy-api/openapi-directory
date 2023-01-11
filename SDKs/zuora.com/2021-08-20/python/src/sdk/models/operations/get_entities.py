import dataclasses
from typing import Optional
from ..shared import getentitiesresponsetype as shared_getentitiesresponsetype


@dataclasses.dataclass
class GetEntitiesQueryParams:
    provisioned: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'provisioned', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntitiesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntitiesRequest:
    headers: GetEntitiesHeaders = dataclasses.field()
    query_params: GetEntitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_entities_response_type: Optional[shared_getentitiesresponsetype.GetEntitiesResponseType] = dataclasses.field(default=None)
    
