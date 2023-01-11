import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AddUserSettingPathParams:
    setting_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingType', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserSettingApplicationJSONVoiceMail:
    r"""AddUserSettingApplicationJSONVoiceMail
    Update the voicemail setting.
    """
    
    access_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_user_id') }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserSettingApplicationJSON:
    voice_mail: Optional[AddUserSettingApplicationJSONVoiceMail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mail') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserSettingMultipartFormDataVoiceMail:
    r"""AddUserSettingMultipartFormDataVoiceMail
    Update the voicemail setting.
    """
    
    access_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_user_id') }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    

@dataclasses.dataclass
class AddUserSettingMultipartFormData:
    voice_mail: Optional[AddUserSettingMultipartFormDataVoiceMail] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'voice_mail', 'json': True }})
    

@dataclasses.dataclass
class AddUserSettingRequests:
    object: Optional[AddUserSettingApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddUserSettingMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddUserSettingSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserSetting201ApplicationJSONVoiceMail:
    access_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_user_id') }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    shared_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared_id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserSetting201ApplicationJSON:
    voice_mail: Optional[AddUserSetting201ApplicationJSONVoiceMail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mail') }})
    

@dataclasses.dataclass
class AddUserSettingRequest:
    path_params: AddUserSettingPathParams = dataclasses.field()
    security: AddUserSettingSecurity = dataclasses.field()
    request: Optional[AddUserSettingRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddUserSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_user_setting_201_application_json_object: Optional[AddUserSetting201ApplicationJSON] = dataclasses.field(default=None)
    add_user_setting_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
