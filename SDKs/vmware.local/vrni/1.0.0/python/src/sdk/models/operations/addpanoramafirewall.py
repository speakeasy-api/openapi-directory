import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import switchdatasourcerequest as shared_switchdatasourcerequest
from ..shared import apierror as shared_apierror
from ..shared import switchdatasource as shared_switchdatasource


@dataclasses.dataclass
class AddPanoramaFirewallSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AddPanoramaFirewallRequest:
    security: AddPanoramaFirewallSecurity = dataclasses.field()
    request: Optional[shared_switchdatasourcerequest.SwitchDataSourceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddPanoramaFirewallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    switch_data_source: Optional[shared_switchdatasource.SwitchDataSource] = dataclasses.field(default=None)
    
