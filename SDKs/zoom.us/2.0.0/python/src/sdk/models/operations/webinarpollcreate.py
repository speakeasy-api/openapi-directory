import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPollCreatePathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    
class WebinarPollCreatePollQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class WebinarPollCreatePollQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[WebinarPollCreatePollQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPollCreatePoll:
    r"""WebinarPollCreatePoll
    Poll
    """
    
    questions: Optional[list[WebinarPollCreatePollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }, 'multipart_form': { 'field_name': 'questions', 'json': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }, 'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class WebinarPollCreateRequests:
    poll: Optional[WebinarPollCreatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    poll1: Optional[WebinarPollCreatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarPollCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class WebinarPollCreatePollStatusEnum(str, Enum):
    NOTSTART = "notstart"
    STARTED = "started"
    ENDED = "ended"
    SHARING = "sharing"


@dataclass_json
@dataclasses.dataclass
class WebinarPollCreatePoll2:
    r"""WebinarPollCreatePoll2
    Poll
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    questions: Optional[list[WebinarPollCreatePollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    status: Optional[WebinarPollCreatePollStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class WebinarPollCreateRequest:
    path_params: WebinarPollCreatePathParams = dataclasses.field()
    request: WebinarPollCreateRequests = dataclasses.field()
    security: WebinarPollCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPollCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    poll: Optional[WebinarPollCreatePoll2] = dataclasses.field(default=None)
    
