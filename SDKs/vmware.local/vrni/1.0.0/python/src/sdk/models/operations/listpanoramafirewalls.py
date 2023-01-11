import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import datasourcelistresponse as shared_datasourcelistresponse


@dataclasses.dataclass
class ListPanoramaFirewallsSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListPanoramaFirewallsRequest:
    security: ListPanoramaFirewallsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPanoramaFirewallsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_source_list_response: Optional[shared_datasourcelistresponse.DataSourceListResponse] = dataclasses.field(default=None)
    
