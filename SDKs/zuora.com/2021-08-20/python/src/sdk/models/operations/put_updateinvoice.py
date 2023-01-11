import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class PutUpdateInvoicePathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateInvoiceHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUpdateInvoiceRequest:
    headers: PutUpdateInvoiceHeaders = dataclasses.field()
    path_params: PutUpdateInvoicePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutUpdateInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    put_invoice_response_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
