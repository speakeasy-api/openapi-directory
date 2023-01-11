import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetTaxationItemPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaxationItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaxationItemRequest:
    headers: GetTaxationItemHeaders = dataclasses.field()
    path_params: GetTaxationItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTaxationItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_taxation_item_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
