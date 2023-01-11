import dataclasses
from typing import Any,Optional
from ..shared import putrevenuescheduleresponsetype as shared_putrevenuescheduleresponsetype


@dataclasses.dataclass
class PutRevenueAcrossApPathParams:
    rs_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rs-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRevenueAcrossApHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRevenueAcrossApRequest:
    headers: PutRevenueAcrossApHeaders = dataclasses.field()
    path_params: PutRevenueAcrossApPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRevenueAcrossApResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_revenue_schedule_response_type: Optional[shared_putrevenuescheduleresponsetype.PutRevenueScheduleResponseType] = dataclasses.field(default=None)
    
