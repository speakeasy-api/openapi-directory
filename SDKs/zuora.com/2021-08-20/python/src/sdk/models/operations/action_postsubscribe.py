import dataclasses
from typing import Optional
from ..shared import proxyactionsubscriberequest as shared_proxyactionsubscriberequest
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse
from ..shared import subscriberesult as shared_subscriberesult


@dataclasses.dataclass
class ActionPosTsubscribeQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActionPosTsubscribeHeaders:
    x_zuora_wsdl_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Zuora-WSDL-Version', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionPosTsubscribeRequest:
    headers: ActionPosTsubscribeHeaders = dataclasses.field()
    query_params: ActionPosTsubscribeQueryParams = dataclasses.field()
    request: shared_proxyactionsubscriberequest.ProxyActionsubscribeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionPosTsubscribeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    subscribe_results: Optional[list[shared_subscriberesult.SubscribeResult]] = dataclasses.field(default=None)
    
