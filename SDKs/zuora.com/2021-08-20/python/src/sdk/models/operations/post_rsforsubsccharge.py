import dataclasses
from typing import Any,Optional
from ..shared import postrevenueschedulebychargeresponsetype as shared_postrevenueschedulebychargeresponsetype


@dataclasses.dataclass
class PostRSforSubscChargePathParams:
    charge_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'charge-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRSforSubscChargeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRSforSubscChargeRequest:
    headers: PostRSforSubscChargeHeaders = dataclasses.field()
    path_params: PostRSforSubscChargePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRSforSubscChargeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_revenue_schedule_by_charge_response_type: Optional[shared_postrevenueschedulebychargeresponsetype.PostRevenueScheduleByChargeResponseType] = dataclasses.field(default=None)
    
