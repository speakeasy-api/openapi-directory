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
class MeetingLiveStreamStatusUpdatePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class MeetingLiveStreamStatusUpdateApplicationJSONActionEnum(str, Enum):
    START = "start"
    STOP = "stop"


@dataclass_json
@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateApplicationJSONSettings:
    r"""MeetingLiveStreamStatusUpdateApplicationJSONSettings
    Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
    """
    
    active_speaker_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_speaker_name') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateApplicationJSON:
    r"""MeetingLiveStreamStatusUpdateApplicationJSON
    Meeting live stream status.
    """
    
    action: Optional[MeetingLiveStreamStatusUpdateApplicationJSONActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    settings: Optional[MeetingLiveStreamStatusUpdateApplicationJSONSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum(str, Enum):
    START = "start"
    STOP = "stop"


@dataclass_json
@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateMultipartFormDataSettings:
    r"""MeetingLiveStreamStatusUpdateMultipartFormDataSettings
    Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
    """
    
    active_speaker_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_speaker_name') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    

@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateMultipartFormData:
    r"""MeetingLiveStreamStatusUpdateMultipartFormData
    Meeting live stream status.
    """
    
    action: Optional[MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    settings: Optional[MeetingLiveStreamStatusUpdateMultipartFormDataSettings] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'settings', 'json': True }})
    

@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateRequests:
    object: Optional[MeetingLiveStreamStatusUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingLiveStreamStatusUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateRequest:
    path_params: MeetingLiveStreamStatusUpdatePathParams = dataclasses.field()
    request: MeetingLiveStreamStatusUpdateRequests = dataclasses.field()
    security: MeetingLiveStreamStatusUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingLiveStreamStatusUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
