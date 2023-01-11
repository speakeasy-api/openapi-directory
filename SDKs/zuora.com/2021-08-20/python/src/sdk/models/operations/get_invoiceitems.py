import dataclasses
from typing import Optional
from ..shared import getinvoiceitemsresponse as shared_getinvoiceitemsresponse


@dataclasses.dataclass
class GetInvoiceItemsPathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceItemsQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInvoiceItemsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceItemsRequest:
    headers: GetInvoiceItemsHeaders = dataclasses.field()
    path_params: GetInvoiceItemsPathParams = dataclasses.field()
    query_params: GetInvoiceItemsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceItemsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoice_items_response: Optional[shared_getinvoiceitemsresponse.GetInvoiceItemsResponse] = dataclasses.field(default=None)
    
