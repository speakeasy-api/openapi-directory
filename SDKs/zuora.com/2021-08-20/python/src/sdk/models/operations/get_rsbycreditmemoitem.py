import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetRSbyCreditMemoItemPathParams:
    cmi_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cmi-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSbyCreditMemoItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSbyCreditMemoItemRequest:
    headers: GetRSbyCreditMemoItemHeaders = dataclasses.field()
    path_params: GetRSbyCreditMemoItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRSbyCreditMemoItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    getrs_detail_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
