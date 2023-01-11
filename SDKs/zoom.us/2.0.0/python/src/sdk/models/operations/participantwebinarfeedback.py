import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ParticipantWebinarFeedbackPathParams:
    webinar_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    
class ParticipantWebinarFeedbackTypeEnum(str, Enum):
    PAST = "past"
    PAST_ONE = "pastOne"
    LIVE = "live"


@dataclasses.dataclass
class ParticipantWebinarFeedbackQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    type: Optional[ParticipantWebinarFeedbackTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    
class ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum(str, Enum):
    GOOD = "GOOD"
    NOT_GOOD = "NOT GOOD"


@dataclass_json
@dataclasses.dataclass
class ParticipantWebinarFeedback200ApplicationJSONParticipants:
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    quality: Optional[ParticipantWebinarFeedback200ApplicationJSONParticipantsQualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass_json
@dataclasses.dataclass
class ParticipantWebinarFeedback200ApplicationJSON:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    participants: Optional[list[ParticipantWebinarFeedback200ApplicationJSONParticipants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclasses.dataclass
class ParticipantWebinarFeedbackRequest:
    path_params: ParticipantWebinarFeedbackPathParams = dataclasses.field()
    query_params: ParticipantWebinarFeedbackQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ParticipantWebinarFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    participant_webinar_feedback_200_application_json_object: Optional[ParticipantWebinarFeedback200ApplicationJSON] = dataclasses.field(default=None)
    
