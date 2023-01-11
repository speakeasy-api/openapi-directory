import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingPollGetPathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    poll_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pollId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingPollGetSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class MeetingPollGetPollQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class MeetingPollGetPollQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[MeetingPollGetPollQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class MeetingPollGetPollStatusEnum(str, Enum):
    NOTSTART = "notstart"
    STARTED = "started"
    ENDED = "ended"
    SHARING = "sharing"


@dataclass_json
@dataclasses.dataclass
class MeetingPollGetPoll:
    r"""MeetingPollGetPoll
    Poll
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    questions: Optional[list[MeetingPollGetPollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    status: Optional[MeetingPollGetPollStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class MeetingPollGetRequest:
    path_params: MeetingPollGetPathParams = dataclasses.field()
    security: MeetingPollGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingPollGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    poll: Optional[MeetingPollGetPoll] = dataclasses.field(default=None)
    
