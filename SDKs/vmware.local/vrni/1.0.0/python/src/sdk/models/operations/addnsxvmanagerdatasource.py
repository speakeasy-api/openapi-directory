import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import nsxvmanagerdatasourcerequest as shared_nsxvmanagerdatasourcerequest
from ..shared import apierror as shared_apierror
from ..shared import nsxvmanagerdatasource as shared_nsxvmanagerdatasource


@dataclasses.dataclass
class AddNsxvManagerDatasourceSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AddNsxvManagerDatasourceRequest:
    security: AddNsxvManagerDatasourceSecurity = dataclasses.field()
    request: Optional[shared_nsxvmanagerdatasourcerequest.NsxvManagerDataSourceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddNsxvManagerDatasourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    nsxv_manager_data_source: Optional[shared_nsxvmanagerdatasource.NsxvManagerDataSource] = dataclasses.field(default=None)
    
