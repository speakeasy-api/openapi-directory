import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetRsPathParams:
    rs_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rs-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRsRequest:
    headers: GetRsHeaders = dataclasses.field()
    path_params: GetRsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    getrs_detail_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
