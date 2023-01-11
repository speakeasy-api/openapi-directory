import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import node as shared_node


@dataclasses.dataclass
class GetNodePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNodeSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNodeRequest:
    path_params: GetNodePathParams = dataclasses.field()
    security: GetNodeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    node: Optional[shared_node.Node] = dataclasses.field(default=None)
    
