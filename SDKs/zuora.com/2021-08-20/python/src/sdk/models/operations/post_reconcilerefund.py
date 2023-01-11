import dataclasses
from typing import Optional
from ..shared import postreconcilerefundrequest as shared_postreconcilerefundrequest
from ..shared import postreconcilerefundresponse as shared_postreconcilerefundresponse


@dataclasses.dataclass
class PostReconcileRefundPathParams:
    refund_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'refund-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostReconcileRefundHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostReconcileRefundRequest:
    headers: PostReconcileRefundHeaders = dataclasses.field()
    path_params: PostReconcileRefundPathParams = dataclasses.field()
    request: shared_postreconcilerefundrequest.PostReconcileRefundRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostReconcileRefundResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_reconcile_refund_response: Optional[shared_postreconcilerefundresponse.PostReconcileRefundResponse] = dataclasses.field(default=None)
    
