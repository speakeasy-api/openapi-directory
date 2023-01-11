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
class MeetingPollUpdatePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    poll_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pollId', 'style': 'simple', 'explode': False }})
    
class MeetingPollUpdatePollQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class MeetingPollUpdatePollQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[MeetingPollUpdatePollQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingPollUpdatePoll:
    r"""MeetingPollUpdatePoll
    Poll
    """
    
    questions: Optional[list[MeetingPollUpdatePollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }, 'multipart_form': { 'field_name': 'questions', 'json': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }, 'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class MeetingPollUpdateRequests:
    poll: Optional[MeetingPollUpdatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    poll1: Optional[MeetingPollUpdatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingPollUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingPollUpdateRequest:
    path_params: MeetingPollUpdatePathParams = dataclasses.field()
    request: MeetingPollUpdateRequests = dataclasses.field()
    security: MeetingPollUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingPollUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
