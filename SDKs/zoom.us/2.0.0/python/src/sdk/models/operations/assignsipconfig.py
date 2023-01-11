import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AssignSipConfigPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignSipConfigApplicationJSON:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    show_callout_internal_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_callout_internal_number') }})
    show_zoom_provided_callout_countries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_zoom_provided_callout_countries') }})
    show_zoom_provided_numbers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_zoom_provided_numbers') }})
    

@dataclasses.dataclass
class AssignSipConfigMultipartFormData:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'enable' }})
    show_callout_internal_number: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'show_callout_internal_number' }})
    show_zoom_provided_callout_countries: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'show_zoom_provided_callout_countries' }})
    show_zoom_provided_numbers: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'show_zoom_provided_numbers' }})
    

@dataclasses.dataclass
class AssignSipConfigRequests:
    object: Optional[AssignSipConfigApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignSipConfigMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AssignSipConfigSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AssignSipConfigRequest:
    path_params: AssignSipConfigPathParams = dataclasses.field()
    security: AssignSipConfigSecurity = dataclasses.field()
    request: Optional[AssignSipConfigRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignSipConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    assign_sip_config_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
