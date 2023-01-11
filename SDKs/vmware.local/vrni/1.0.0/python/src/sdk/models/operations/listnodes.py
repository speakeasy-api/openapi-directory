import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import nodelistresult as shared_nodelistresult


@dataclasses.dataclass
class ListNodesSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListNodesRequest:
    security: ListNodesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    node_list_result: Optional[shared_nodelistresult.NodeListResult] = dataclasses.field(default=None)
    
