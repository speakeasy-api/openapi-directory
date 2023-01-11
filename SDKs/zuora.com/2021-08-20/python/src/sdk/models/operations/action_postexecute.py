import dataclasses
from typing import Optional
from ..shared import proxyactionexecuterequest as shared_proxyactionexecuterequest
from ..shared import executeresult as shared_executeresult
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ActionPosTexecuteQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActionPosTexecuteHeaders:
    x_zuora_wsdl_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Zuora-WSDL-Version', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionPosTexecuteRequest:
    headers: ActionPosTexecuteHeaders = dataclasses.field()
    query_params: ActionPosTexecuteQueryParams = dataclasses.field()
    request: shared_proxyactionexecuterequest.ProxyActionexecuteRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionPosTexecuteResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    execute_results: Optional[list[shared_executeresult.ExecuteResult]] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
