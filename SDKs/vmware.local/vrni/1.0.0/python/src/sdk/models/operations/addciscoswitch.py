import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ciscoswitchdatasourcerequest as shared_ciscoswitchdatasourcerequest
from ..shared import apierror as shared_apierror
from ..shared import ciscoswitchdatasource as shared_ciscoswitchdatasource


@dataclasses.dataclass
class AddCiscoSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AddCiscoSwitchRequest:
    security: AddCiscoSwitchSecurity = dataclasses.field()
    request: Optional[shared_ciscoswitchdatasourcerequest.CiscoSwitchDataSourceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddCiscoSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    cisco_switch_data_source: Optional[shared_ciscoswitchdatasource.CiscoSwitchDataSource] = dataclasses.field(default=None)
    
