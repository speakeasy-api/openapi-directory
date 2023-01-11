import dataclasses
from typing import Optional
from ..shared import getchargersdetailtype as shared_getchargersdetailtype


@dataclasses.dataclass
class GetCrsByCrsNumberPathParams:
    crs_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'crs-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrsByCrsNumberHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrsByCrsNumberRequest:
    headers: GetCrsByCrsNumberHeaders = dataclasses.field()
    path_params: GetCrsByCrsNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCrsByCrsNumberResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_charge_rs_detail_type: Optional[shared_getchargersdetailtype.GetChargeRsDetailType] = dataclasses.field(default=None)
    
