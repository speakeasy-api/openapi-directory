import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class RecordingSettingUpdatePathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RecordingSettingUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class RecordingSettingUpdateRecordingSettingsShareRecordingEnum(str, Enum):
    PUBLICLY = "publicly"
    INTERNALLY = "internally"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class RecordingSettingUpdateRecordingSettings:
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    on_demand: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_demand') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recording_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_authentication') }})
    send_email_to_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('send_email_to_host') }})
    share_recording: Optional[RecordingSettingUpdateRecordingSettingsShareRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_recording') }})
    show_social_share_buttons: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_social_share_buttons') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    viewer_download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewer_download') }})
    

@dataclasses.dataclass
class RecordingSettingUpdateRequest:
    path_params: RecordingSettingUpdatePathParams = dataclasses.field()
    security: RecordingSettingUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RecordingSettingUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    recording_settings: Optional[RecordingSettingUpdateRecordingSettings] = dataclasses.field(default=None)
    
