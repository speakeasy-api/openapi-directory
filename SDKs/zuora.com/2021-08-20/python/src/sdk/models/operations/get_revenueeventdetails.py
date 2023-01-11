import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetRevenueEventDetailsPathParams:
    event_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueEventDetailsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueEventDetailsRequest:
    headers: GetRevenueEventDetailsHeaders = dataclasses.field()
    path_params: GetRevenueEventDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevenueEventDetailsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_revenue_event_detail_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
