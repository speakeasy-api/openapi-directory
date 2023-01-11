import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListPastMeetingPollsPathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPastMeetingPollsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ListPastMeetingPolls200ApplicationJSONQuestionsQuestionDetails:
    answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    polling_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polling_id') }})
    question: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPastMeetingPolls200ApplicationJSONQuestions:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    question_details: Optional[list[ListPastMeetingPolls200ApplicationJSONQuestionsQuestionDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question_details') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPastMeetingPolls200ApplicationJSON:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    questions: Optional[list[ListPastMeetingPolls200ApplicationJSONQuestions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclasses.dataclass
class ListPastMeetingPollsRequest:
    path_params: ListPastMeetingPollsPathParams = dataclasses.field()
    security: ListPastMeetingPollsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListPastMeetingPollsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_past_meeting_polls_200_application_json_object: Optional[ListPastMeetingPolls200ApplicationJSON] = dataclasses.field(default=None)
    
