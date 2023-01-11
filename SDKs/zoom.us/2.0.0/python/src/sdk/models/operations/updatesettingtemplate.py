import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateSettingTemplatePathParams:
    template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONPolicyAdHocCallRecording:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    recording_start_prompt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_start_prompt') }})
    recording_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_transcription') }})
    
class UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    BOTH = "both"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONPolicyAutoCallRecording:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    recording_calls: Optional[UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_calls') }})
    recording_start_prompt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_start_prompt') }})
    recording_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_transcription') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONPolicySms:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    international_sms: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('international_sms') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONPolicyVoicemail:
    allow_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_transcription') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONPolicy:
    ad_hoc_call_recording: Optional[UpdateSettingTemplateApplicationJSONPolicyAdHocCallRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ad_hoc_call_recording') }})
    auto_call_recording: Optional[UpdateSettingTemplateApplicationJSONPolicyAutoCallRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_call_recording') }})
    sms: Optional[UpdateSettingTemplateApplicationJSONPolicySms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    voicemail: Optional[UpdateSettingTemplateApplicationJSONPolicyVoicemail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voicemail') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONProfile:
    area_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area_code') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum(str, Enum):
    USER = "user"
    ZOOM_ROOM = "zoomRoom"
    COMMON_AREA_PHONE = "commonAreaPhone"
    AUTO_RECEPTIONIST = "autoReceptionist"
    CALL_QUEUE = "callQueue"
    SHARED_LINE_GROUP = "sharedLineGroup"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator:
    r"""UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator
    Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    weekday: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekday') }})
    
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"

class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum(str, Enum):
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
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHours:
    business_hour_action: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hour_action') }})
    connect_to_operator: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_to_operator') }})
    custom_hours: Optional[list[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_hours') }})
    ring_type: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ring_type') }})
    ringing_duration: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ringing_duration') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum(str, Enum):
    USER = "user"
    ZOOM_ROOM = "zoomRoom"
    COMMON_AREA_PHONE = "commonAreaPhone"
    AUTO_RECEPTIONIST = "autoReceptionist"
    CALL_QUEUE = "callQueue"
    SHARED_LINE_GROUP = "sharedLineGroup"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator:
    r"""UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator
    Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum(str, Enum):
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
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHours:
    close_hour_action: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_hour_action') }})
    connect_to_operator: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_to_operator') }})
    max_wait_time: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_wait_time') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONUserSettingsCallHandling:
    business_hours: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hours') }})
    close_hours: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_hours') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONUserSettingsDeskPhone:
    pin_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin_code') }})
    
class UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum(str, Enum):
    DEFAULT = "default"
    DISABLE = "disable"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSONUserSettings:
    audio_prompt_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_prompt_language') }})
    block_calls_without_caller_id: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_calls_without_caller_id') }})
    call_handling: Optional[UpdateSettingTemplateApplicationJSONUserSettingsCallHandling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_handling') }})
    desk_phone: Optional[UpdateSettingTemplateApplicationJSONUserSettingsDeskPhone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desk_phone') }})
    hold_music: Optional[UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hold_music') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy: Optional[UpdateSettingTemplateApplicationJSONPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    profile: Optional[UpdateSettingTemplateApplicationJSONProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    user_settings: Optional[UpdateSettingTemplateApplicationJSONUserSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_settings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    recording_start_prompt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_start_prompt') }})
    recording_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_transcription') }})
    
class UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    BOTH = "both"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    recording_calls: Optional[UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_calls') }})
    recording_start_prompt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_start_prompt') }})
    recording_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_transcription') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataPolicySms:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    international_sms: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('international_sms') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataPolicyVoicemail:
    allow_transcription: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_transcription') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataPolicy:
    ad_hoc_call_recording: Optional[UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ad_hoc_call_recording') }})
    auto_call_recording: Optional[UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_call_recording') }})
    sms: Optional[UpdateSettingTemplateMultipartFormDataPolicySms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    voicemail: Optional[UpdateSettingTemplateMultipartFormDataPolicyVoicemail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voicemail') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataProfile:
    area_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area_code') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum(str, Enum):
    USER = "user"
    ZOOM_ROOM = "zoomRoom"
    COMMON_AREA_PHONE = "commonAreaPhone"
    AUTO_RECEPTIONIST = "autoReceptionist"
    CALL_QUEUE = "callQueue"
    SHARED_LINE_GROUP = "sharedLineGroup"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator:
    r"""UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator
    Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    weekday: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekday') }})
    
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"

class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum(str, Enum):
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
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours:
    business_hour_action: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hour_action') }})
    connect_to_operator: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_to_operator') }})
    custom_hours: Optional[list[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_hours') }})
    ring_type: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ring_type') }})
    ringing_duration: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ringing_duration') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum(str, Enum):
    USER = "user"
    ZOOM_ROOM = "zoomRoom"
    COMMON_AREA_PHONE = "commonAreaPhone"
    AUTO_RECEPTIONIST = "autoReceptionist"
    CALL_QUEUE = "callQueue"
    SHARED_LINE_GROUP = "sharedLineGroup"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator:
    r"""UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator
    Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum(str, Enum):
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
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours:
    close_hour_action: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_hour_action') }})
    connect_to_operator: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_to_operator') }})
    max_wait_time: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_wait_time') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling:
    business_hours: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hours') }})
    close_hours: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_hours') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone:
    pin_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin_code') }})
    
class UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum(str, Enum):
    DEFAULT = "default"
    DISABLE = "disable"


@dataclass_json
@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormDataUserSettings:
    audio_prompt_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_prompt_language') }})
    block_calls_without_caller_id: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_calls_without_caller_id') }})
    call_handling: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_handling') }})
    desk_phone: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desk_phone') }})
    hold_music: Optional[UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hold_music') }})
    

@dataclasses.dataclass
class UpdateSettingTemplateMultipartFormData:
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    policy: Optional[UpdateSettingTemplateMultipartFormDataPolicy] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'policy', 'json': True }})
    profile: Optional[UpdateSettingTemplateMultipartFormDataProfile] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'profile', 'json': True }})
    user_settings: Optional[UpdateSettingTemplateMultipartFormDataUserSettings] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_settings', 'json': True }})
    

@dataclasses.dataclass
class UpdateSettingTemplateRequests:
    object: Optional[UpdateSettingTemplateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateSettingTemplateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateSettingTemplateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateSettingTemplateRequest:
    path_params: UpdateSettingTemplatePathParams = dataclasses.field()
    security: UpdateSettingTemplateSecurity = dataclasses.field()
    request: Optional[UpdateSettingTemplateRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSettingTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_setting_template_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
