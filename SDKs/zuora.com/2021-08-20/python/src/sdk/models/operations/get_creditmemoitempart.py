import dataclasses
from typing import Optional
from ..shared import getcreditmemoitemparttype as shared_getcreditmemoitemparttype


@dataclasses.dataclass
class GetCreditMemoItemPartPathParams:
    credit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditMemoId', 'style': 'simple', 'explode': False }})
    itempartid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itempartid', 'style': 'simple', 'explode': False }})
    partid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemPartHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditMemoItemPartRequest:
    headers: GetCreditMemoItemPartHeaders = dataclasses.field()
    path_params: GetCreditMemoItemPartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreditMemoItemPartResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credit_memo_item_part_type: Optional[shared_getcreditmemoitemparttype.GetCreditMemoItemPartType] = dataclasses.field(default=None)
    
