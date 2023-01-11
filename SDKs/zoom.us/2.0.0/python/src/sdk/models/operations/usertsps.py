import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserTsPsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserTsPs200ApplicationJSONTspAccountsListDialInNumbersTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"
    MEDIA_LINK = "media_link"


@dataclass_json
@dataclasses.dataclass
class UserTsPs200ApplicationJSONTspAccountsListDialInNumbers:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_label') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[UserTsPs200ApplicationJSONTspAccountsListDialInNumbersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UserTsPs200ApplicationJSONTspAccountsListTspBridgeEnum(str, Enum):
    US_TSP_TB = "US_TSP_TB"
    EU_TSP_TB = "EU_TSP_TB"


@dataclass_json
@dataclasses.dataclass
class UserTsPs200ApplicationJSONTspAccountsList:
    r"""UserTsPs200ApplicationJSONTspAccountsList
    List of TSP accounts.
    """
    
    conference_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_code') }})
    leader_pin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leader_pin') }})
    dial_in_numbers: Optional[list[UserTsPs200ApplicationJSONTspAccountsListDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial_in_numbers') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    tsp_bridge: Optional[UserTsPs200ApplicationJSONTspAccountsListTspBridgeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_bridge') }})
    

@dataclass_json
@dataclasses.dataclass
class UserTsPs200ApplicationJSON:
    tsp_accounts: Optional[list[UserTsPs200ApplicationJSONTspAccountsList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_accounts') }})
    

@dataclasses.dataclass
class UserTsPsRequest:
    path_params: UserTsPsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserTsPsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_ts_ps_200_application_json_object: Optional[UserTsPs200ApplicationJSON] = dataclasses.field(default=None)
    
