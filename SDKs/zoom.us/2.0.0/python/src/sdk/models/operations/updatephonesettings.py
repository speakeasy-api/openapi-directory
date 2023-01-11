import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdatePhoneSettingsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePhoneSettingsApplicationJSONByoc:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePhoneSettingsApplicationJSON:
    byoc: Optional[UpdatePhoneSettingsApplicationJSONByoc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byoc') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePhoneSettingsMultipartFormDataByoc:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclasses.dataclass
class UpdatePhoneSettingsMultipartFormData:
    byoc: Optional[UpdatePhoneSettingsMultipartFormDataByoc] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'byoc', 'json': True }})
    

@dataclasses.dataclass
class UpdatePhoneSettingsRequests:
    object: Optional[UpdatePhoneSettingsApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdatePhoneSettingsMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdatePhoneSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdatePhoneSettingsRequest:
    path_params: UpdatePhoneSettingsPathParams = dataclasses.field()
    security: UpdatePhoneSettingsSecurity = dataclasses.field()
    request: Optional[UpdatePhoneSettingsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdatePhoneSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_phone_settings_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
