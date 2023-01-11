import dataclasses
from typing import Optional
from ..shared import proxyactionqueryrequest as shared_proxyactionqueryrequest
from ..shared import proxyactionqueryresponse as shared_proxyactionqueryresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ActionPosTqueryQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActionPosTqueryHeaders:
    x_zuora_wsdl_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Zuora-WSDL-Version', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionPosTqueryRequest:
    headers: ActionPosTqueryHeaders = dataclasses.field()
    query_params: ActionPosTqueryQueryParams = dataclasses.field()
    request: shared_proxyactionqueryrequest.ProxyActionqueryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionPosTqueryResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_actionquery_response: Optional[shared_proxyactionqueryresponse.ProxyActionqueryResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
