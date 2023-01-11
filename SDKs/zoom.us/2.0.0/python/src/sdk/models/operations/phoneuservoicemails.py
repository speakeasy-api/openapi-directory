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
class PhoneUserVoiceMailsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class PhoneUserVoiceMailsStatusEnum(str, Enum):
    ALL = "all"
    READ = "read"
    UNREAD = "unread"


@dataclasses.dataclass
class PhoneUserVoiceMailsQueryParams:
    to: date = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    from_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    status: Optional[PhoneUserVoiceMailsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PhoneUserVoiceMailsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum(str, Enum):
    READ = "read"
    UNREAD = "unread"


@dataclass_json
@dataclasses.dataclass
class PhoneUserVoiceMails200ApplicationJSONVoiceMails:
    callee_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_name') }})
    callee_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_number') }})
    callee_number_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_number_type') }})
    caller_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_name') }})
    caller_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_number') }})
    caller_number_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_number_type') }})
    date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time') }})
    download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: Optional[PhoneUserVoiceMails200ApplicationJSONVoiceMailsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PhoneUserVoiceMails200ApplicationJSON:
    r"""PhoneUserVoiceMails200ApplicationJSON
    Phone User Voice Mails
    """
    
    from_: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    to: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    voice_mails: Optional[list[PhoneUserVoiceMails200ApplicationJSONVoiceMails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mails') }})
    

@dataclasses.dataclass
class PhoneUserVoiceMailsRequest:
    path_params: PhoneUserVoiceMailsPathParams = dataclasses.field()
    query_params: PhoneUserVoiceMailsQueryParams = dataclasses.field()
    security: PhoneUserVoiceMailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PhoneUserVoiceMailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    phone_user_voice_mails_200_application_json_object: Optional[PhoneUserVoiceMails200ApplicationJSON] = dataclasses.field(default=None)
    
