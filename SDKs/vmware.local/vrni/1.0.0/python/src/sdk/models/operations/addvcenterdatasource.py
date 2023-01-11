import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import vcenterdatasourcerequest as shared_vcenterdatasourcerequest
from ..shared import apierror as shared_apierror
from ..shared import vcenterdatasource as shared_vcenterdatasource


@dataclasses.dataclass
class AddVcenterDatasourceSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AddVcenterDatasourceRequest:
    request: shared_vcenterdatasourcerequest.VCenterDataSourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddVcenterDatasourceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVcenterDatasourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    v_center_data_source: Optional[shared_vcenterdatasource.VCenterDataSource] = dataclasses.field(default=None)
    
