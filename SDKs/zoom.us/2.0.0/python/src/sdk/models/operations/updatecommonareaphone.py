import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateCommonAreaPhonePathParams:
    common_area_phone_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commonAreaPhoneId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCommonAreaPhoneApplicationJSON:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    

@dataclasses.dataclass
class UpdateCommonAreaPhoneMultipartFormData:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'display_name' }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'extension_number' }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'mac_address' }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_id' }})
    

@dataclasses.dataclass
class UpdateCommonAreaPhoneRequests:
    object: Optional[UpdateCommonAreaPhoneApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateCommonAreaPhoneMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateCommonAreaPhoneSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateCommonAreaPhoneRequest:
    path_params: UpdateCommonAreaPhonePathParams = dataclasses.field()
    security: UpdateCommonAreaPhoneSecurity = dataclasses.field()
    request: Optional[UpdateCommonAreaPhoneRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCommonAreaPhoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_common_area_phone_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
