import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateADevicePathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateADeviceApplicationJSON:
    assigned_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigned_to') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    

@dataclasses.dataclass
class UpdateADeviceMultipartFormData:
    assigned_to: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'assigned_to' }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'display_name' }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'mac_address' }})
    

@dataclasses.dataclass
class UpdateADeviceRequests:
    object: Optional[UpdateADeviceApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateADeviceMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateADeviceSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateADeviceRequest:
    path_params: UpdateADevicePathParams = dataclasses.field()
    security: UpdateADeviceSecurity = dataclasses.field()
    request: Optional[UpdateADeviceRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateADeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_a_device_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
