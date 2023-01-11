import dataclasses
from typing import Optional
from ..shared import putreverseinvoicetype as shared_putreverseinvoicetype
from ..shared import putreverseinvoiceresponsetype as shared_putreverseinvoiceresponsetype


@dataclasses.dataclass
class PutReverseInvoicePathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutReverseInvoiceHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutReverseInvoiceRequest:
    headers: PutReverseInvoiceHeaders = dataclasses.field()
    path_params: PutReverseInvoicePathParams = dataclasses.field()
    request: shared_putreverseinvoicetype.PutReverseInvoiceType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutReverseInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_reverse_invoice_response_type: Optional[shared_putreverseinvoiceresponsetype.PutReverseInvoiceResponseType] = dataclasses.field(default=None)
    
