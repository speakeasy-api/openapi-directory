import dataclasses
from typing import Optional
from ..shared import postinvoicecollecttype as shared_postinvoicecollecttype
from ..shared import postinvoicecollectresponsetype as shared_postinvoicecollectresponsetype


@dataclasses.dataclass
class PostTransactionInvoicePaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostTransactionInvoicePaymentRequest:
    headers: PostTransactionInvoicePaymentHeaders = dataclasses.field()
    request: shared_postinvoicecollecttype.PostInvoiceCollectType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTransactionInvoicePaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_invoice_collect_response_type: Optional[shared_postinvoicecollectresponsetype.PostInvoiceCollectResponseType] = dataclasses.field(default=None)
    
