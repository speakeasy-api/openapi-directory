import dataclasses
from typing import Optional
from ..shared import getrsrevenueitemstype as shared_getrsrevenueitemstype


@dataclasses.dataclass
class GetRevenueItemsByRevenueSchedulePathParams:
    rs_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rs-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueItemsByRevenueScheduleQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRevenueItemsByRevenueScheduleHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueItemsByRevenueScheduleRequest:
    headers: GetRevenueItemsByRevenueScheduleHeaders = dataclasses.field()
    path_params: GetRevenueItemsByRevenueSchedulePathParams = dataclasses.field()
    query_params: GetRevenueItemsByRevenueScheduleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevenueItemsByRevenueScheduleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rs_revenue_items_type: Optional[shared_getrsrevenueitemstype.GetRsRevenueItemsType] = dataclasses.field(default=None)
    
