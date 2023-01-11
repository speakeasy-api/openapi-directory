import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateBatchPollsPathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class CreateBatchPollsApplicationJSONQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class CreateBatchPollsApplicationJSONQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[CreateBatchPollsApplicationJSONQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBatchPollsApplicationJSON:
    questions: Optional[list[CreateBatchPollsApplicationJSONQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class CreateBatchPollsMultipartFormDataQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class CreateBatchPollsMultipartFormDataQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[CreateBatchPollsMultipartFormDataQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class CreateBatchPollsMultipartFormData1:
    questions: Optional[list[CreateBatchPollsMultipartFormDataQuestions]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'questions', 'json': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class CreateBatchPollsRequests:
    object: Optional[CreateBatchPollsApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CreateBatchPollsMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    
class CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class CreateBatchPolls201ApplicationJSONPollsQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[CreateBatchPolls201ApplicationJSONPollsQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class CreateBatchPolls201ApplicationJSONPollsStatusEnum(str, Enum):
    NOTSTART = "notstart"
    STARTED = "started"
    ENDED = "ended"
    SHARING = "sharing"


@dataclass_json
@dataclasses.dataclass
class CreateBatchPolls201ApplicationJSONPolls:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    questions: Optional[list[CreateBatchPolls201ApplicationJSONPollsQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    status: Optional[CreateBatchPolls201ApplicationJSONPollsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBatchPolls201ApplicationJSON:
    polls: Optional[list[CreateBatchPolls201ApplicationJSONPolls]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polls') }})
    

@dataclasses.dataclass
class CreateBatchPollsRequest:
    path_params: CreateBatchPollsPathParams = dataclasses.field()
    request: Optional[CreateBatchPollsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBatchPollsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    create_batch_polls_201_application_json_object: Optional[CreateBatchPolls201ApplicationJSON] = dataclasses.field(default=None)
    
