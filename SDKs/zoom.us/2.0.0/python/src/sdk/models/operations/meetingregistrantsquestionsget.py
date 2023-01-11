import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingRegistrantsQuestionsGetPathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingRegistrantsQuestionsGetSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum(str, Enum):
    SHORT = "short"
    SINGLE = "single"


@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions:
    answers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum(str, Enum):
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
class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions:
    field_name: Optional[MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_name') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions:
    r"""MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions
    Meeting Registrant Questions
    """
    
    custom_questions: Optional[list[MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_questions') }})
    questions: Optional[list[MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    

@dataclasses.dataclass
class MeetingRegistrantsQuestionsGetRequest:
    path_params: MeetingRegistrantsQuestionsGetPathParams = dataclasses.field()
    security: MeetingRegistrantsQuestionsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingRegistrantsQuestionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    meeting_registrant_questions: Optional[MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions] = dataclasses.field(default=None)
    
