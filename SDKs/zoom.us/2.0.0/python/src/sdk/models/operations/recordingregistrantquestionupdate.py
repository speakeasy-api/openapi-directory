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
class RecordingRegistrantQuestionUpdatePathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum(str, Enum):
    SHORT = "short"
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclasses.dataclass
class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum(str, Enum):
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
class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions:
    field_name: Optional[RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_name') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclasses.dataclass
class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions:
    r"""RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions
    Recording Registrant Questions
    """
    
    custom_questions: Optional[list[RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }, 'multipart_form': { 'field_name': 'custom_questions', 'json': True }})
    questions: Optional[list[RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }, 'multipart_form': { 'field_name': 'questions', 'json': True }})
    

@dataclasses.dataclass
class RecordingRegistrantQuestionUpdateRequests:
    recording_registrant_questions: Optional[RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    recording_registrant_questions1: Optional[RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class RecordingRegistrantQuestionUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RecordingRegistrantQuestionUpdateRequest:
    path_params: RecordingRegistrantQuestionUpdatePathParams = dataclasses.field()
    request: RecordingRegistrantQuestionUpdateRequests = dataclasses.field()
    security: RecordingRegistrantQuestionUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RecordingRegistrantQuestionUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
