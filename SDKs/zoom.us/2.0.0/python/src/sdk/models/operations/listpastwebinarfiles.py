import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListPastWebinarFilesPathParams:
    webinar_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPastWebinarFilesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ListPastWebinarFiles200ApplicationJSONInMeetingFiles:
    download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    file_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_size') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPastWebinarFiles200ApplicationJSON:
    in_meeting_files: Optional[list[ListPastWebinarFiles200ApplicationJSONInMeetingFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting_files') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListPastWebinarFilesRequest:
    path_params: ListPastWebinarFilesPathParams = dataclasses.field()
    security: ListPastWebinarFilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPastWebinarFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_past_webinar_files_200_application_json_object: Optional[ListPastWebinarFiles200ApplicationJSON] = dataclasses.field(default=None)
    
