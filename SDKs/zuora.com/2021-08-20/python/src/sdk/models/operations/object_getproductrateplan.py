import dataclasses
from typing import Any,Optional
from ..shared import proxynodataresponse as shared_proxynodataresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectGetProductRatePlanPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectGetProductRatePlanQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectGetProductRatePlanHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectGetProductRatePlanRequest:
    headers: ObjectGetProductRatePlanHeaders = dataclasses.field()
    path_params: ObjectGetProductRatePlanPathParams = dataclasses.field()
    query_params: ObjectGetProductRatePlanQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ObjectGetProductRatePlanResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_get_product_rate_plan: Optional[dict[str, Any]] = dataclasses.field(default=None)
    proxy_no_data_response: Optional[shared_proxynodataresponse.ProxyNoDataResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
