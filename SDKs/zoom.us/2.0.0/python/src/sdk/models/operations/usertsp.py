import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserTspTspIDEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclasses.dataclass
class UserTspPathParams:
    tsp_id: UserTspTspIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'tspId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserTspTspAccountDialInNumbersTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"
    MEDIA_LINK = "media_link"


@dataclass_json
@dataclasses.dataclass
class UserTspTspAccountDialInNumbers:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_label') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[UserTspTspAccountDialInNumbersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UserTspTspAccountTspBridgeEnum(str, Enum):
    US_TSP_TB = "US_TSP_TB"
    EU_TSP_TB = "EU_TSP_TB"


@dataclass_json
@dataclasses.dataclass
class UserTspTspAccount:
    r"""UserTspTspAccount
    TSP account of the user.
    """
    
    conference_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_code') }})
    leader_pin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leader_pin') }})
    dial_in_numbers: Optional[list[UserTspTspAccountDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial_in_numbers') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    tsp_bridge: Optional[UserTspTspAccountTspBridgeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_bridge') }})
    

@dataclasses.dataclass
class UserTspRequest:
    path_params: UserTspPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserTspResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tsp_account: Optional[UserTspTspAccount] = dataclasses.field(default=None)
    
