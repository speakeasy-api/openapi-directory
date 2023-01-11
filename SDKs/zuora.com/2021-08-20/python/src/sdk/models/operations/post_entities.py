import dataclasses
from typing import Optional
from ..shared import createentitytype as shared_createentitytype
from ..shared import createentityresponsetype as shared_createentityresponsetype


@dataclasses.dataclass
class PostEntitiesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostEntitiesRequest:
    headers: PostEntitiesHeaders = dataclasses.field()
    request: shared_createentitytype.CreateEntityType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostEntitiesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_entity_response_type: Optional[shared_createentityresponsetype.CreateEntityResponseType] = dataclasses.field(default=None)
    
