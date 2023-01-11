import dataclasses
from typing import Any,Optional
from ..shared import applycreditmemotype as shared_applycreditmemotype


@dataclasses.dataclass
class PutApplyCreditMemoPathParams:
    credit_memo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditMemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutApplyCreditMemoHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutApplyCreditMemoRequest:
    headers: PutApplyCreditMemoHeaders = dataclasses.field()
    path_params: PutApplyCreditMemoPathParams = dataclasses.field()
    request: shared_applycreditmemotype.ApplyCreditMemoType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutApplyCreditMemoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credit_memo_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
