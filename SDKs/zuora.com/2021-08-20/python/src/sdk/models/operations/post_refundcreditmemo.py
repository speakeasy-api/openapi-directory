import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostRefundCreditMemoPathParams:
    creditmemo_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'creditmemoId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRefundCreditMemoHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRefundCreditMemoRequest:
    headers: PostRefundCreditMemoHeaders = dataclasses.field()
    path_params: PostRefundCreditMemoPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRefundCreditMemoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_refund_credit_memo_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
