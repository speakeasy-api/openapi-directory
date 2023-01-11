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
class AccountOptionsUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    
class AccountOptionsUpdateApplicationJSONPayModeEnum(str, Enum):
    MASTER = "master"
    SUB = "sub"


@dataclass_json
@dataclasses.dataclass
class AccountOptionsUpdateApplicationJSON:
    r"""AccountOptionsUpdateApplicationJSON
    Account options object.
    """
    
    billing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_auto_renew') }})
    meeting_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_connector_list') }})
    pay_mode: Optional[AccountOptionsUpdateApplicationJSONPayModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pay_mode') }})
    room_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room_connector_list') }})
    share_mc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_mc') }})
    share_rc: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_rc') }})
    
class AccountOptionsUpdateMultipartFormDataPayModeEnum(str, Enum):
    MASTER = "master"
    SUB = "sub"


@dataclasses.dataclass
class AccountOptionsUpdateMultipartFormData:
    r"""AccountOptionsUpdateMultipartFormData
    Account options object.
    """
    
    billing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'billing_auto_renew' }})
    meeting_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'meeting_connector_list', 'json': True }})
    pay_mode: Optional[AccountOptionsUpdateMultipartFormDataPayModeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'pay_mode' }})
    room_connector_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'room_connector_list', 'json': True }})
    share_mc: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'share_mc' }})
    share_rc: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'share_rc' }})
    

@dataclasses.dataclass
class AccountOptionsUpdateRequests:
    object: Optional[AccountOptionsUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountOptionsUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountOptionsUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AccountOptionsUpdateRequest:
    path_params: AccountOptionsUpdatePathParams = dataclasses.field()
    request: AccountOptionsUpdateRequests = dataclasses.field()
    security: AccountOptionsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountOptionsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
