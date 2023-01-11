import dataclasses
from typing import Optional
from ..shared import getchargersdetailtype as shared_getchargersdetailtype


@dataclasses.dataclass
class GetCrsByChargeIDPathParams:
    charge_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'charge-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrsByChargeIDHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrsByChargeIDRequest:
    headers: GetCrsByChargeIDHeaders = dataclasses.field()
    path_params: GetCrsByChargeIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCrsByChargeIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_charge_rs_detail_type: Optional[shared_getchargersdetailtype.GetChargeRsDetailType] = dataclasses.field(default=None)
    
