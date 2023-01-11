import dataclasses
from typing import Optional
from ..shared import getinvoiceapplicationpartcollectiontype as shared_getinvoiceapplicationpartcollectiontype


@dataclasses.dataclass
class GetInvoiceApplicationPartsPathParams:
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceApplicationPartsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceApplicationPartsRequest:
    headers: GetInvoiceApplicationPartsHeaders = dataclasses.field()
    path_params: GetInvoiceApplicationPartsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceApplicationPartsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoice_application_part_collection_type: Optional[shared_getinvoiceapplicationpartcollectiontype.GetInvoiceApplicationPartCollectionType] = dataclasses.field(default=None)
    
