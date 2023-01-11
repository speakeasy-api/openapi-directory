import dataclasses
from typing import Any,Optional
from ..shared import proxynodataresponse as shared_proxynodataresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectGetInvoiceAdjustmentPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectGetInvoiceAdjustmentQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectGetInvoiceAdjustmentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectGetInvoiceAdjustmentRequest:
    headers: ObjectGetInvoiceAdjustmentHeaders = dataclasses.field()
    path_params: ObjectGetInvoiceAdjustmentPathParams = dataclasses.field()
    query_params: ObjectGetInvoiceAdjustmentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ObjectGetInvoiceAdjustmentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_get_invoice_adjustment: Optional[dict[str, Any]] = dataclasses.field(default=None)
    proxy_no_data_response: Optional[shared_proxynodataresponse.ProxyNoDataResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
