import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPollGetPathParams:
    poll_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pollId', 'style': 'simple', 'explode': False }})
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarPollGetSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class WebinarPollGetPollQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class WebinarPollGetPollQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[WebinarPollGetPollQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarPollGetPollStatusEnum(str, Enum):
    NOTSTART = "notstart"
    STARTED = "started"
    ENDED = "ended"
    SHARING = "sharing"


@dataclass_json
@dataclasses.dataclass
class WebinarPollGetPoll:
    r"""WebinarPollGetPoll
    Poll
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    questions: Optional[list[WebinarPollGetPollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    status: Optional[WebinarPollGetPollStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclasses.dataclass
class WebinarPollGetRequest:
    path_params: WebinarPollGetPathParams = dataclasses.field()
    security: WebinarPollGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPollGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    poll: Optional[WebinarPollGetPoll] = dataclasses.field(default=None)
    
