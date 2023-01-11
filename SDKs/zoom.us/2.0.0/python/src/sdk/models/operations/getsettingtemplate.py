import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetSettingTemplatePathParams:
    template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingTemplateQueryParams:
    custom_query_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'custom_query_fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSettingTemplateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONPolicyAdHocCallRecording:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    recording_start_prompt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_start_prompt') }})
    recording_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_transcription') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONPolicyAutoCallRecording:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    recording_calls: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_calls') }})
    recording_start_prompt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_start_prompt') }})
    recording_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_transcription') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONPolicySms:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    international_sms: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('international_sms') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONPolicyVoicemail:
    allow_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_transcription') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONPolicy:
    ad_hoc_call_recording: Optional[GetSettingTemplate200ApplicationJSONPolicyAdHocCallRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ad_hoc_call_recording') }})
    auto_call_recording: Optional[GetSettingTemplate200ApplicationJSONPolicyAutoCallRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_call_recording') }})
    sms: Optional[GetSettingTemplate200ApplicationJSONPolicySms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    voicemail: Optional[GetSettingTemplate200ApplicationJSONPolicyVoicemail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voicemail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONProfile:
    area_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area_code') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    
class GetSettingTemplate200ApplicationJSONTypeEnum(str, Enum):
    USER = "user"
    GROUP = "group"
    AUTO_RECEPTIONIST = "autoReceptionist"
    COMMON_AREA = "commonArea"
    ZR = "zr"
    INTEROP = "interop"

class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum(str, Enum):
    USER = "user"
    ZOOM_ROOM = "zoomRoom"
    COMMON_AREA_PHONE = "commonAreaPhone"
    AUTO_RECEPTIONIST = "autoReceptionist"
    CALL_QUEUE = "callQueue"
    SHARED_LINE_GROUP = "sharedLineGroup"


@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator:
    r"""GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator
    Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    weekday: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekday') }})
    
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"

class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum(str, Enum):
    FIFTEEN = "15"
    TWENTY = "20"
    TWENTY_FIVE = "25"
    THIRTY = "30"
    THIRTY_FIVE = "35"
    FORTY = "40"
    FORTY_FIVE = "45"
    FIFTY = "50"
    FIFTY_FIVE = "55"
    SIXTY = "60"


@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHours:
    business_hour_action: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hour_action') }})
    connect_to_operator: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_to_operator') }})
    custom_hours: Optional[list[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_hours') }})
    ring_type: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ring_type') }})
    ringing_duration: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ringing_duration') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum(str, Enum):
    USER = "user"
    ZOOM_ROOM = "zoomRoom"
    COMMON_AREA_PHONE = "commonAreaPhone"
    AUTO_RECEPTIONIST = "autoReceptionist"
    CALL_QUEUE = "callQueue"
    SHARED_LINE_GROUP = "sharedLineGroup"


@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator:
    r"""GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator
    Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum(str, Enum):
    FIFTEEN = "15"
    TWENTY = "20"
    TWENTY_FIVE = "25"
    THIRTY = "30"
    THIRTY_FIVE = "35"
    FORTY = "40"
    FORTY_FIVE = "45"
    FIFTY = "50"
    FIFTY_FIVE = "55"
    SIXTY = "60"


@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHours:
    close_hour_action: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_hour_action') }})
    connect_to_operator: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_to_operator') }})
    max_wait_time: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_wait_time') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettingsCallHandling:
    business_hours: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hours') }})
    close_hours: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_hours') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettingsDeskPhone:
    pin_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin_code') }})
    
class GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum(str, Enum):
    DEFAULT = "default"
    DISABLE = "disable"


@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSONUserSettings:
    audio_prompt_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_prompt_language') }})
    block_calls_without_caller_id: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_calls_without_caller_id') }})
    call_handling: Optional[GetSettingTemplate200ApplicationJSONUserSettingsCallHandling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_handling') }})
    desk_phone: Optional[GetSettingTemplate200ApplicationJSONUserSettingsDeskPhone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desk_phone') }})
    hold_music: Optional[GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hold_music') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSettingTemplate200ApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy: Optional[GetSettingTemplate200ApplicationJSONPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    profile: Optional[GetSettingTemplate200ApplicationJSONProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    type: Optional[GetSettingTemplate200ApplicationJSONTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_settings: Optional[GetSettingTemplate200ApplicationJSONUserSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_settings') }})
    

@dataclasses.dataclass
class GetSettingTemplateRequest:
    path_params: GetSettingTemplatePathParams = dataclasses.field()
    query_params: GetSettingTemplateQueryParams = dataclasses.field()
    security: GetSettingTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_setting_template_200_application_json_object: Optional[GetSettingTemplate200ApplicationJSON] = dataclasses.field(default=None)
    get_setting_template_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
