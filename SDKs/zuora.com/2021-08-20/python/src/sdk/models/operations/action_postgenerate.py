import dataclasses
from typing import Optional
from ..shared import proxyactiongeneraterequest as shared_proxyactiongeneraterequest
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse
from ..shared import saveresult as shared_saveresult


@dataclasses.dataclass
class ActionPosTgenerateQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActionPosTgenerateHeaders:
    x_zuora_wsdl_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Zuora-WSDL-Version', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionPosTgenerateRequest:
    headers: ActionPosTgenerateHeaders = dataclasses.field()
    query_params: ActionPosTgenerateQueryParams = dataclasses.field()
    request: shared_proxyactiongeneraterequest.ProxyActiongenerateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionPosTgenerateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    save_results: Optional[list[shared_saveresult.SaveResult]] = dataclasses.field(default=None)
    
