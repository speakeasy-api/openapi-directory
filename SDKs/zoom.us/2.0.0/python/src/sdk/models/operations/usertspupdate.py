import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserTspUpdateTspIDEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclasses.dataclass
class UserTspUpdatePathParams:
    tsp_id: UserTspUpdateTspIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'tspId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserTspUpdateTspAccountDialInNumbersTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"
    MEDIA_LINK = "media_link"


@dataclass_json
@dataclasses.dataclass
class UserTspUpdateTspAccountDialInNumbers:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_label') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[UserTspUpdateTspAccountDialInNumbersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UserTspUpdateTspAccountTspBridgeEnum(str, Enum):
    US_TSP_TB = "US_TSP_TB"
    EU_TSP_TB = "EU_TSP_TB"


@dataclass_json
@dataclasses.dataclass
class UserTspUpdateTspAccount:
    r"""UserTspUpdateTspAccount
    TSP account.
    """
    
    conference_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_code') }, 'multipart_form': { 'field_name': 'conference_code' }})
    leader_pin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leader_pin') }, 'multipart_form': { 'field_name': 'leader_pin' }})
    dial_in_numbers: Optional[list[UserTspUpdateTspAccountDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial_in_numbers') }, 'multipart_form': { 'field_name': 'dial_in_numbers', 'json': True }})
    tsp_bridge: Optional[UserTspUpdateTspAccountTspBridgeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_bridge') }, 'multipart_form': { 'field_name': 'tsp_bridge' }})
    

@dataclasses.dataclass
class UserTspUpdateRequests:
    tsp_account: Optional[UserTspUpdateTspAccount] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tsp_account1: Optional[UserTspUpdateTspAccount] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserTspUpdateRequest:
    path_params: UserTspUpdatePathParams = dataclasses.field()
    request: UserTspUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class UserTspUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
