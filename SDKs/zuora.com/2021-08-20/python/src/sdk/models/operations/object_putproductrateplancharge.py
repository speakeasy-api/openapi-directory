import dataclasses
from typing import Any,Optional
from ..shared import proxycreateormodifyresponse as shared_proxycreateormodifyresponse
from ..shared import proxynodataresponse as shared_proxynodataresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectPutProductRatePlanChargePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectPutProductRatePlanChargeQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectPutProductRatePlanChargeHeaders:
    x_zuora_wsdl_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Zuora-WSDL-Version', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectPutProductRatePlanChargeRequest:
    headers: ObjectPutProductRatePlanChargeHeaders = dataclasses.field()
    path_params: ObjectPutProductRatePlanChargePathParams = dataclasses.field()
    query_params: ObjectPutProductRatePlanChargeQueryParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ObjectPutProductRatePlanChargeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_create_or_modify_response: Optional[shared_proxycreateormodifyresponse.ProxyCreateOrModifyResponse] = dataclasses.field(default=None)
    proxy_no_data_response: Optional[shared_proxynodataresponse.ProxyNoDataResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
