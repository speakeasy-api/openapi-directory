import dataclasses
from typing import Optional
from ..shared import putscheduleridetailtype as shared_putscheduleridetailtype
from ..shared import commonresponsetype as shared_commonresponsetype


@dataclasses.dataclass
class PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams:
    rs_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rs-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCustomFieldsonRevenueItemsByRevenueScheduleRequest:
    headers: PutCustomFieldsonRevenueItemsByRevenueScheduleHeaders = dataclasses.field()
    path_params: PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams = dataclasses.field()
    request: shared_putscheduleridetailtype.PutScheduleRiDetailType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCustomFieldsonRevenueItemsByRevenueScheduleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_response_type: Optional[shared_commonresponsetype.CommonResponseType] = dataclasses.field(default=None)
    
