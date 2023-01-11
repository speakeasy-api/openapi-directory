import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserTspCreatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserTspCreateTspAccountsListDialInNumbersTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"
    MEDIA_LINK = "media_link"


@dataclass_json
@dataclasses.dataclass
class UserTspCreateTspAccountsListDialInNumbers:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_label') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[UserTspCreateTspAccountsListDialInNumbersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class UserTspCreateTspAccountsListTspBridgeEnum(str, Enum):
    US_TSP_TB = "US_TSP_TB"
    EU_TSP_TB = "EU_TSP_TB"


@dataclass_json
@dataclasses.dataclass
class UserTspCreateTspAccountsList:
    r"""UserTspCreateTspAccountsList
    List of TSP accounts.
    """
    
    conference_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_code') }, 'multipart_form': { 'field_name': 'conference_code' }})
    leader_pin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leader_pin') }, 'multipart_form': { 'field_name': 'leader_pin' }})
    dial_in_numbers: Optional[list[UserTspCreateTspAccountsListDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dial_in_numbers') }, 'multipart_form': { 'field_name': 'dial_in_numbers', 'json': True }})
    tsp_bridge: Optional[UserTspCreateTspAccountsListTspBridgeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp_bridge') }, 'multipart_form': { 'field_name': 'tsp_bridge' }})
    

@dataclasses.dataclass
class UserTspCreateRequests:
    tsp_accounts_list: Optional[UserTspCreateTspAccountsList] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tsp_accounts_list1: Optional[UserTspCreateTspAccountsList] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserTspCreateRequest:
    path_params: UserTspCreatePathParams = dataclasses.field()
    request: UserTspCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class UserTspCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tsp_accounts_list: Optional[UserTspCreateTspAccountsList] = dataclasses.field(default=None)
    
