import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tierlistresponse as shared_tierlistresponse


@dataclasses.dataclass
class ListApplicationTiersPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListApplicationTiersSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListApplicationTiersRequest:
    path_params: ListApplicationTiersPathParams = dataclasses.field()
    security: ListApplicationTiersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListApplicationTiersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tier_list_response: Optional[shared_tierlistresponse.TierListResponse] = dataclasses.field(default=None)
    
