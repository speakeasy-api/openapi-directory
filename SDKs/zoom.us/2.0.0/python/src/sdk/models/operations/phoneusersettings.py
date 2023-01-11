import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PhoneUserSettingsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PhoneUserSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PhoneUserSettings200ApplicationJSONDeskPhoneKeysPositions:
    primary_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_number') }})
    

@dataclass_json
@dataclasses.dataclass
class PhoneUserSettings200ApplicationJSONDeskPhone:
    r"""PhoneUserSettings200ApplicationJSONDeskPhone
    Contains information on phones or devices provisioned for the user.
    """
    
    keys_positions: Optional[PhoneUserSettings200ApplicationJSONDeskPhoneKeysPositions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys_positions') }})
    

@dataclass_json
@dataclasses.dataclass
class PhoneUserSettings200ApplicationJSONOutboundCaller:
    r"""PhoneUserSettings200ApplicationJSONOutboundCaller
    Outbound Caller Info
    """
    
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class PhoneUserSettings200ApplicationJSONOutboundCallerIds:
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class PhoneUserSettings200ApplicationJSONVoiceMail:
    r"""PhoneUserSettings200ApplicationJSONVoiceMail
    [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
    """
    
    access_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_user_id') }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    shared_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared_id') }})
    

@dataclass_json
@dataclasses.dataclass
class PhoneUserSettings200ApplicationJSON:
    r"""PhoneUserSettings200ApplicationJSON
    Phone User Setting
    """
    
    area_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area_code') }})
    company_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_number') }})
    desk_phone: Optional[PhoneUserSettings200ApplicationJSONDeskPhone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desk_phone') }})
    outbound_caller: Optional[PhoneUserSettings200ApplicationJSONOutboundCaller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_caller') }})
    outbound_caller_ids: Optional[PhoneUserSettings200ApplicationJSONOutboundCallerIds] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_caller_ids') }})
    voice_mail: Optional[PhoneUserSettings200ApplicationJSONVoiceMail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mail') }})
    

@dataclasses.dataclass
class PhoneUserSettingsRequest:
    path_params: PhoneUserSettingsPathParams = dataclasses.field()
    security: PhoneUserSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PhoneUserSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    phone_user_settings_200_application_json_object: Optional[PhoneUserSettings200ApplicationJSON] = dataclasses.field(default=None)
    
