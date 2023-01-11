import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingLiveStreamUpdatePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingLiveStreamUpdateApplicationJSON:
    r"""MeetingLiveStreamUpdateApplicationJSON
    Meeting live stream.
    """
    
    stream_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_key') }})
    stream_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_url') }})
    page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_url') }})
    

@dataclasses.dataclass
class MeetingLiveStreamUpdateMultipartFormData:
    r"""MeetingLiveStreamUpdateMultipartFormData
    Meeting live stream.
    """
    
    stream_key: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'stream_key' }})
    stream_url: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'stream_url' }})
    page_url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'page_url' }})
    

@dataclasses.dataclass
class MeetingLiveStreamUpdateRequests:
    object: Optional[MeetingLiveStreamUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingLiveStreamUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingLiveStreamUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingLiveStreamUpdateRequest:
    path_params: MeetingLiveStreamUpdatePathParams = dataclasses.field()
    request: MeetingLiveStreamUpdateRequests = dataclasses.field()
    security: MeetingLiveStreamUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingLiveStreamUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
