import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostCreditMemoFromInvoicePathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCreditMemoFromInvoiceHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'zuora-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCreditMemoFromInvoiceRequest:
    headers: PostCreditMemoFromInvoiceHeaders = dataclasses.field()
    path_params: PostCreditMemoFromInvoicePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCreditMemoFromInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_credit_memo_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
