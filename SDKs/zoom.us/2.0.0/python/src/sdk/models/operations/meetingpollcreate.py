import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingPollCreatePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class MeetingPollCreatePollQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class MeetingPollCreatePollQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[MeetingPollCreatePollQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingPollCreatePoll:
    r"""MeetingPollCreatePoll
    Poll
    """
    
    questions: Optional[list[MeetingPollCreatePollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }, 'multipart_form': { 'field_name': 'questions', 'json': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }, 'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class MeetingPollCreateRequests:
    poll: Optional[MeetingPollCreatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    poll1: Optional[MeetingPollCreatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingPollCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class MeetingPollCreatePollStatusEnum(str, Enum):
    NOTSTART = "notstart"
    STARTED = "started"
    ENDED = "ended"
    SHARING = "sharing"


@dataclass_json
@dataclasses.dataclass
class MeetingPollCreatePoll2:
    r"""MeetingPollCreatePoll2
    Poll
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    questions: Optional[list[MeetingPollCreatePollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    status: Optional[MeetingPollCreatePollStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class MeetingPollCreateRequest:
    path_params: MeetingPollCreatePathParams = dataclasses.field()
    request: MeetingPollCreateRequests = dataclasses.field()
    security: MeetingPollCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingPollCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    poll: Optional[MeetingPollCreatePoll2] = dataclasses.field(default=None)
    
