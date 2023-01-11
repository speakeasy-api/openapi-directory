import dataclasses
from typing import Any,Optional
from ..shared import putrevenuescheduleresponsetype as shared_putrevenuescheduleresponsetype


@dataclasses.dataclass
class PutRevenueSpecificDatePathParams:
    rs_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rs-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRevenueSpecificDateHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRevenueSpecificDateRequest:
    headers: PutRevenueSpecificDateHeaders = dataclasses.field()
    path_params: PutRevenueSpecificDatePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRevenueSpecificDateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_revenue_schedule_response_type: Optional[shared_putrevenuescheduleresponsetype.PutRevenueScheduleResponseType] = dataclasses.field(default=None)
    
