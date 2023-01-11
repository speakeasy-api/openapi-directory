import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import entityname as shared_entityname


@dataclasses.dataclass
class GetNamePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNameQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNameSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNameRequest:
    path_params: GetNamePathParams = dataclasses.field()
    query_params: GetNameQueryParams = dataclasses.field()
    security: GetNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entity_name: Optional[shared_entityname.EntityName] = dataclasses.field(default=None)
    
