import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    
class Account200ApplicationJSONOptionsPayModeEnum(str, Enum):
    MASTER = "master"
    SUB = "sub"


@dataclass_json
@dataclasses.dataclass
class Account200ApplicationJSONOptions:
    r"""Account200ApplicationJSONOptions
    Account options object.
    """
    
    billing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_auto_renew') }})
    meeting_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_connector_list') }})
    pay_mode: Optional[Account200ApplicationJSONOptionsPayModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pay_mode') }})
    room_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_connector_list') }})
    share_mc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_mc') }})
    share_rc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_rc') }})
    

@dataclass_json
@dataclasses.dataclass
class Account200ApplicationJSON:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    options: Optional[Account200ApplicationJSONOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    owner_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_email') }})
    owner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    vanity_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vanity_url') }})
    

@dataclasses.dataclass
class AccountRequest:
    path_params: AccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_200_application_json_object: Optional[Account200ApplicationJSON] = dataclasses.field(default=None)
    
