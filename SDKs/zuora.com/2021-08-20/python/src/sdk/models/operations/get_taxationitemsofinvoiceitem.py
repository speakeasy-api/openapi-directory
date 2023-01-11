import dataclasses
from typing import Optional
from ..shared import getinvoicetaxationitemsresponse as shared_getinvoicetaxationitemsresponse


@dataclasses.dataclass
class GetTaxationItemsOfInvoiceItemPathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    item_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaxationItemsOfInvoiceItemQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTaxationItemsOfInvoiceItemHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaxationItemsOfInvoiceItemRequest:
    headers: GetTaxationItemsOfInvoiceItemHeaders = dataclasses.field()
    path_params: GetTaxationItemsOfInvoiceItemPathParams = dataclasses.field()
    query_params: GetTaxationItemsOfInvoiceItemQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTaxationItemsOfInvoiceItemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoice_taxation_items_response: Optional[shared_getinvoicetaxationitemsresponse.GetInvoiceTaxationItemsResponse] = dataclasses.field(default=None)
    
