import dataclasses
from typing import Optional
from ..shared import getrevenueitemstype as shared_getrevenueitemstype


@dataclasses.dataclass
class GetRevenueItemsByChargeRevenueEventNumberPathParams:
    event_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueItemsByChargeRevenueEventNumberQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRevenueItemsByChargeRevenueEventNumberHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueItemsByChargeRevenueEventNumberRequest:
    headers: GetRevenueItemsByChargeRevenueEventNumberHeaders = dataclasses.field()
    path_params: GetRevenueItemsByChargeRevenueEventNumberPathParams = dataclasses.field()
    query_params: GetRevenueItemsByChargeRevenueEventNumberQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevenueItemsByChargeRevenueEventNumberResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_revenue_items_type: Optional[shared_getrevenueitemstype.GetRevenueItemsType] = dataclasses.field(default=None)
    
