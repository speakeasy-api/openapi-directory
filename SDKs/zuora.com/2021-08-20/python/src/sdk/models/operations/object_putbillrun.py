import dataclasses
from typing import Optional
from ..shared import proxymodifybillrun as shared_proxymodifybillrun
from ..shared import proxycreateormodifyresponse as shared_proxycreateormodifyresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectPutBillRunPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectPutBillRunQueryParams:
    reject_unknown_fields: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rejectUnknownFields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectPutBillRunHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectPutBillRunRequest:
    headers: ObjectPutBillRunHeaders = dataclasses.field()
    path_params: ObjectPutBillRunPathParams = dataclasses.field()
    query_params: ObjectPutBillRunQueryParams = dataclasses.field()
    request: shared_proxymodifybillrun.ProxyModifyBillRun = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ObjectPutBillRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_create_or_modify_response: Optional[shared_proxycreateormodifyresponse.ProxyCreateOrModifyResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
