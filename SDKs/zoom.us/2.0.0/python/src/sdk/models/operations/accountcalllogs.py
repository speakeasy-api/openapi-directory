import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class AccountCallLogsTimeTypeEnum(str, Enum):
    START_TIME = "startTime"
    END_TIME = "endTime"


@dataclasses.dataclass
class AccountCallLogsQueryParams:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    time_type: Optional[AccountCallLogsTimeTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_type', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AccountCallLogsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum(str, Enum):
    VOIP = "voip"
    PSTN = "pstn"
    TOLLFREE = "tollfree"
    INTERNATIONAL = "international"
    CONTACT_CENTER = "contactCenter"

class AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum(str, Enum):
    USER = "user"
    CALL_QUEUE = "callQueue"
    AUTO_RECEPTIONIST = "autoReceptionist"
    COMMON_AREA_PHONE = "commonAreaPhone"
    SHARED_LINE_GROUP = "sharedLineGroup"


@dataclass_json
@dataclasses.dataclass
class AccountCallLogs200ApplicationJSONCallLogsOwner:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclass_json
@dataclasses.dataclass
class AccountCallLogs200ApplicationJSONCallLogsSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountCallLogs200ApplicationJSONCallLogs:
    answer_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    call_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_id') }})
    call_type: Optional[AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_type') }})
    callee_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_name') }})
    callee_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_number') }})
    callee_number_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_number_type') }})
    caller_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_name') }})
    caller_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_number') }})
    caller_number_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_number_type') }})
    charge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charge') }})
    client_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_code') }})
    date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time') }})
    direction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    owner: Optional[AccountCallLogs200ApplicationJSONCallLogsOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    recording_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_id') }})
    recording_type: Optional[AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_type') }})
    result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    site: Optional[AccountCallLogs200ApplicationJSONCallLogsSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    waiting_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountCallLogs200ApplicationJSON:
    r"""AccountCallLogs200ApplicationJSON
    Account Call Logs
    """
    
    call_logs: Optional[list[AccountCallLogs200ApplicationJSONCallLogs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_logs') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class AccountCallLogsRequest:
    query_params: AccountCallLogsQueryParams = dataclasses.field()
    security: AccountCallLogsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountCallLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_call_logs_200_application_json_object: Optional[AccountCallLogs200ApplicationJSON] = dataclasses.field(default=None)
    
