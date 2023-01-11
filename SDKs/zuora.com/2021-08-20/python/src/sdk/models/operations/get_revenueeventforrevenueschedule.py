import dataclasses
from typing import Optional
from ..shared import getrevenueeventdetailstype as shared_getrevenueeventdetailstype


@dataclasses.dataclass
class GetRevenueEventForRevenueSchedulePathParams:
    rs_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rs-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueEventForRevenueScheduleQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRevenueEventForRevenueScheduleHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRevenueEventForRevenueScheduleRequest:
    headers: GetRevenueEventForRevenueScheduleHeaders = dataclasses.field()
    path_params: GetRevenueEventForRevenueSchedulePathParams = dataclasses.field()
    query_params: GetRevenueEventForRevenueScheduleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRevenueEventForRevenueScheduleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_revenue_event_details_type: Optional[shared_getrevenueeventdetailstype.GetRevenueEventDetailsType] = dataclasses.field(default=None)
    
