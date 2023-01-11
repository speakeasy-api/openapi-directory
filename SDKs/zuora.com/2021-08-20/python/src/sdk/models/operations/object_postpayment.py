import dataclasses
from typing import Any,Optional
from ..shared import proxybadrequestresponse as shared_proxybadrequestresponse
from ..shared import proxycreateormodifyresponse as shared_proxycreateormodifyresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectPostPaymentQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectPostPaymentHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectPostPaymentRequest:
    headers: ObjectPostPaymentHeaders = dataclasses.field()
    query_params: ObjectPostPaymentQueryParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ObjectPostPaymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_bad_request_response: Optional[shared_proxybadrequestresponse.ProxyBadRequestResponse] = dataclasses.field(default=None)
    proxy_create_or_modify_response: Optional[shared_proxycreateormodifyresponse.ProxyCreateOrModifyResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
