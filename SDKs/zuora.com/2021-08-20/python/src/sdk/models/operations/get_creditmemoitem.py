import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetCreditMemoItemPathParams:
    cmitemid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cmitemid', 'style': 'simple', 'explode': False }})
    credit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemRequest:
    headers: GetCreditMemoItemHeaders = dataclasses.field()
    path_params: GetCreditMemoItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreditMemoItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credit_memo_item_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
