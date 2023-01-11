import dataclasses
from typing import Optional
from ..shared import getrsdetailsbychargetype as shared_getrsdetailsbychargetype


@dataclasses.dataclass
class GetRSforSubscChargePathParams:
    charge_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'charge-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSforSubscChargeQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRSforSubscChargeHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSforSubscChargeRequest:
    headers: GetRSforSubscChargeHeaders = dataclasses.field()
    path_params: GetRSforSubscChargePathParams = dataclasses.field()
    query_params: GetRSforSubscChargeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRSforSubscChargeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    getrs_details_by_charge_type: Optional[shared_getrsdetailsbychargetype.GetrsDetailsByChargeType] = dataclasses.field(default=None)
    
