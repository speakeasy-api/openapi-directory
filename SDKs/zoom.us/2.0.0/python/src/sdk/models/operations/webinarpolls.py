import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPollsPathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarPollsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class WebinarPollsPollListPollQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class WebinarPollsPollListPollQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[WebinarPollsPollListPollQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarPollsPollListPollStatusEnum(str, Enum):
    NOTSTART = "notstart"
    STARTED = "started"
    ENDED = "ended"
    SHARING = "sharing"


@dataclass_json
@dataclasses.dataclass
class WebinarPollsPollListPoll:
    r"""WebinarPollsPollListPoll
    Poll
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    questions: Optional[list[WebinarPollsPollListPollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    status: Optional[WebinarPollsPollListPollStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPollsPollList:
    r"""WebinarPollsPollList
    Poll List
    """
    
    polls: Optional[list[WebinarPollsPollListPoll]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polls') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class WebinarPollsRequest:
    path_params: WebinarPollsPathParams = dataclasses.field()
    security: WebinarPollsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPollsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    poll_list: Optional[WebinarPollsPollList] = dataclasses.field(default=None)
    
