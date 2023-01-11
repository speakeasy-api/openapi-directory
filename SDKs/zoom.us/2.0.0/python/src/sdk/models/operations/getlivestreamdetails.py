import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetLiveStreamDetailsPathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetLiveStreamDetails200ApplicationJSON:
    page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_url') }})
    stream_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_key') }})
    stream_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_url') }})
    

@dataclasses.dataclass
class GetLiveStreamDetailsRequest:
    path_params: GetLiveStreamDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLiveStreamDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_live_stream_details_200_application_json_object: Optional[GetLiveStreamDetails200ApplicationJSON] = dataclasses.field(default=None)
    
