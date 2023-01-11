import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateUserSettingPathParams:
    setting_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingType', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateUserSettingApplicationJSONVoiceMail:
    r"""UpdateUserSettingApplicationJSONVoiceMail
    Update the voicemail setting.
    """
    
    access_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_user_id') }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    shared_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared_id') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateUserSettingApplicationJSON:
    voice_mail: Optional[UpdateUserSettingApplicationJSONVoiceMail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mail') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateUserSettingMultipartFormDataVoiceMail:
    r"""UpdateUserSettingMultipartFormDataVoiceMail
    Update the voicemail setting.
    """
    
    access_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_user_id') }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    shared_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared_id') }})
    

@dataclasses.dataclass
class UpdateUserSettingMultipartFormData:
    voice_mail: Optional[UpdateUserSettingMultipartFormDataVoiceMail] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'voice_mail', 'json': True }})
    

@dataclasses.dataclass
class UpdateUserSettingRequests:
    object: Optional[UpdateUserSettingApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateUserSettingMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateUserSettingSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateUserSettingRequest:
    path_params: UpdateUserSettingPathParams = dataclasses.field()
    security: UpdateUserSettingSecurity = dataclasses.field()
    request: Optional[UpdateUserSettingRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUserSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_user_setting_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_user_setting_400_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
