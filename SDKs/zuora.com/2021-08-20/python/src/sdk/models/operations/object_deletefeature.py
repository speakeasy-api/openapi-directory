import dataclasses
from typing import Optional
from ..shared import proxydeleteresponse as shared_proxydeleteresponse
from ..shared import proxyunauthorizedresponse as shared_proxyunauthorizedresponse


@dataclasses.dataclass
class ObjectDeleteFeaturePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectDeleteFeatureHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectDeleteFeatureRequest:
    headers: ObjectDeleteFeatureHeaders = dataclasses.field()
    path_params: ObjectDeleteFeaturePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ObjectDeleteFeatureResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_delete_response: Optional[shared_proxydeleteresponse.ProxyDeleteResponse] = dataclasses.field(default=None)
    proxy_unauthorized_response: Optional[shared_proxyunauthorizedresponse.ProxyUnauthorizedResponse] = dataclasses.field(default=None)
    
