import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class InMeetingRecordingControlPathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class InMeetingRecordingControlApplicationJSON:
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    

@dataclasses.dataclass
class InMeetingRecordingControlMultipartFormData:
    method: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'method' }})
    

@dataclasses.dataclass
class InMeetingRecordingControlRequests:
    object: Optional[InMeetingRecordingControlApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[InMeetingRecordingControlMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class InMeetingRecordingControlRequest:
    path_params: InMeetingRecordingControlPathParams = dataclasses.field()
    request: Optional[InMeetingRecordingControlRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InMeetingRecordingControlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    in_meeting_recording_control_202_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
