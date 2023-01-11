import dataclasses
from typing import Optional
from ..shared import postbillingpreviewparam as shared_postbillingpreviewparam
from ..shared import billingpreviewresult as shared_billingpreviewresult


@dataclasses.dataclass
class PostBillingPreviewHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostBillingPreviewRequest:
    headers: PostBillingPreviewHeaders = dataclasses.field()
    request: shared_postbillingpreviewparam.PostBillingPreviewParam = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostBillingPreviewResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    billing_preview_result: Optional[shared_billingpreviewresult.BillingPreviewResult] = dataclasses.field(default=None)
    
