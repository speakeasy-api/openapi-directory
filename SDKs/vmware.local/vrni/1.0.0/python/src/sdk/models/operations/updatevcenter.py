import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import vcenterdatasource as shared_vcenterdatasource
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class UpdateVcenterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateVcenterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateVcenterRequest:
    path_params: UpdateVcenterPathParams = dataclasses.field()
    security: UpdateVcenterSecurity = dataclasses.field()
    request: Optional[shared_vcenterdatasource.VCenterDataSource] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateVcenterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    v_center_data_source: Optional[shared_vcenterdatasource.VCenterDataSource] = dataclasses.field(default=None)
    
