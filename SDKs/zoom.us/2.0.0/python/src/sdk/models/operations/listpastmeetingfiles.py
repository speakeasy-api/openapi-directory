import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListPastMeetingFilesPathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPastMeetingFilesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ListPastMeetingFiles200ApplicationJSONInMeetingFiles:
    download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    file_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_size') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPastMeetingFiles200ApplicationJSON:
    in_meeting_files: Optional[list[ListPastMeetingFiles200ApplicationJSONInMeetingFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting_files') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListPastMeetingFilesRequest:
    path_params: ListPastMeetingFilesPathParams = dataclasses.field()
    security: ListPastMeetingFilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPastMeetingFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_past_meeting_files_200_application_json_object: Optional[ListPastMeetingFiles200ApplicationJSON] = dataclasses.field(default=None)
    
