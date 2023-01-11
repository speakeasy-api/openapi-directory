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
class WebinarPollUpdatePathParams:
    poll_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pollId', 'style': 'simple', 'explode': False }})
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    
class WebinarPollUpdatePollQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class WebinarPollUpdatePollQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[WebinarPollUpdatePollQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPollUpdatePoll:
    r"""WebinarPollUpdatePoll
    Poll
    """
    
    questions: Optional[list[WebinarPollUpdatePollQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }, 'multipart_form': { 'field_name': 'questions', 'json': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }, 'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class WebinarPollUpdateRequests:
    poll: Optional[WebinarPollUpdatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    poll1: Optional[WebinarPollUpdatePoll] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarPollUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarPollUpdateRequest:
    path_params: WebinarPollUpdatePathParams = dataclasses.field()
    request: WebinarPollUpdateRequests = dataclasses.field()
    security: WebinarPollUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPollUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
