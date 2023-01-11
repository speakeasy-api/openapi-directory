import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CallDirectionEnum(str, Enum):
    INBOUND = "INBOUND"
    OUTBOUND = "OUTBOUND"

class CallStateEnum(str, Enum):
    INITIALIZING = "INITIALIZING"
    RINGING = "RINGING"
    ACTIVE = "ACTIVE"
    HELD = "HELD"
    REMOTE_HELD = "REMOTE_HELD"
    DETACHED = "DETACHED"
    REJECTED = "REJECTED"
    CANCELLED = "CANCELLED"
    ANSWERED = "ANSWERED"
    MISSED = "MISSED"

class CallTypeEnum(str, Enum):
    CALL = "CALL"


@dataclass_json
@dataclasses.dataclass
class Call:
    account_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    direction: CallDirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    duration: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    phone_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    start_time: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: CallStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: CallTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uci_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uciId') }})
    user_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    answer_time: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerTime'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    caller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerId') }})
    end_time: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    
