import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetRSbyDebitMemoItemPathParams:
    dmi_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dmi-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSbyDebitMemoItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRSbyDebitMemoItemRequest:
    headers: GetRSbyDebitMemoItemHeaders = dataclasses.field()
    path_params: GetRSbyDebitMemoItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRSbyDebitMemoItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    getrs_detail_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
