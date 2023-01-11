import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import dellswitchdatasource as shared_dellswitchdatasource
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class UpdateDellSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDellSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateDellSwitchRequest:
    path_params: UpdateDellSwitchPathParams = dataclasses.field()
    security: UpdateDellSwitchSecurity = dataclasses.field()
    request: Optional[shared_dellswitchdatasource.DellSwitchDataSource] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDellSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    dell_switch_data_source: Optional[shared_dellswitchdatasource.DellSwitchDataSource] = dataclasses.field(default=None)
    
