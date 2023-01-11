import dataclasses
from typing import Any,Optional
from ..shared import putwriteoffinvoiceresponse as shared_putwriteoffinvoiceresponse


@dataclasses.dataclass
class PutWriteOffInvoicePathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWriteOffInvoiceHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWriteOffInvoiceRequest:
    headers: PutWriteOffInvoiceHeaders = dataclasses.field()
    path_params: PutWriteOffInvoicePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWriteOffInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_write_off_invoice_response: Optional[shared_putwriteoffinvoiceresponse.PutWriteOffInvoiceResponse] = dataclasses.field(default=None)
    
