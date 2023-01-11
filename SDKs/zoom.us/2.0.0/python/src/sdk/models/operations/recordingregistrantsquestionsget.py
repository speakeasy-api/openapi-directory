import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class RecordingRegistrantsQuestionsGetPathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RecordingRegistrantsQuestionsGetSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum(str, Enum):
    SHORT = "short"
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum(str, Enum):
    LAST_NAME = "last_name"
    ADDRESS = "address"
    CITY = "city"
    COUNTRY = "country"
    ZIP = "zip"
    STATE = "state"
    PHONE = "phone"
    INDUSTRY = "industry"
    ORG = "org"
    JOB_TITLE = "job_title"
    PURCHASING_TIME_FRAME = "purchasing_time_frame"
    ROLE_IN_PURCHASE_PROCESS = "role_in_purchase_process"
    NO_OF_EMPLOYEES = "no_of_employees"
    COMMENTS = "comments"


@dataclass_json
@dataclasses.dataclass
class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions:
    field_name: Optional[RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_name') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclasses.dataclass
class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions:
    r"""RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions
    Recording Registrant Questions
    """
    
    custom_questions: Optional[list[RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }})
    questions: Optional[list[RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    

@dataclasses.dataclass
class RecordingRegistrantsQuestionsGetRequest:
    path_params: RecordingRegistrantsQuestionsGetPathParams = dataclasses.field()
    security: RecordingRegistrantsQuestionsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RecordingRegistrantsQuestionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    recording_registrant_questions: Optional[RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions] = dataclasses.field(default=None)
    
