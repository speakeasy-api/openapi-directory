import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import ciscoswitchdatasource as shared_ciscoswitchdatasource
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class UpdateCiscoSwitchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCiscoSwitchSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateCiscoSwitchRequest:
    path_params: UpdateCiscoSwitchPathParams = dataclasses.field()
    security: UpdateCiscoSwitchSecurity = dataclasses.field()
    request: Optional[shared_ciscoswitchdatasource.CiscoSwitchDataSource] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCiscoSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    cisco_switch_data_source: Optional[shared_ciscoswitchdatasource.CiscoSwitchDataSource] = dataclasses.field(default=None)
    
