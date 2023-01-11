import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPhoneRecordingsQueryParams:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    owner_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'owner_type', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    recording_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recording_type', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPhoneRecordingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum(str, Enum):
    ONE = "1"
    TWO = "2"

class GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum(str, Enum):
    ONE = "1"
    TWO = "2"

class GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum(str, Enum):
    USER = "user"
    CALL_QUEUE = "call queue"


@dataclass_json
@dataclasses.dataclass
class GetPhoneRecordings200ApplicationJSONRecordingsOwner:
    r"""GetPhoneRecordings200ApplicationJSONRecordingsOwner
    The owner of the recording.
    """
    
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPhoneRecordings200ApplicationJSONRecordingsSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPhoneRecordings200ApplicationJSONRecordings:
    callee_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_name') }})
    callee_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_number') }})
    callee_number_type: Optional[GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_number_type') }})
    caller_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_name') }})
    caller_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_number') }})
    caller_number_type: Optional[GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_number_type') }})
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: Optional[GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    owner: Optional[GetPhoneRecordings200ApplicationJSONRecordingsOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    recording_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_type') }})
    site: Optional[GetPhoneRecordings200ApplicationJSONRecordingsSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPhoneRecordings200ApplicationJSON:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    recordings: Optional[list[GetPhoneRecordings200ApplicationJSONRecordings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordings') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class GetPhoneRecordingsRequest:
    query_params: GetPhoneRecordingsQueryParams = dataclasses.field()
    security: GetPhoneRecordingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPhoneRecordingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_phone_recordings_200_application_json_object: Optional[GetPhoneRecordings200ApplicationJSON] = dataclasses.field(default=None)
    get_phone_recordings_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
