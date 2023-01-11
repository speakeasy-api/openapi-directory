import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ImGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class ImGroup200ApplicationJSONTypeEnum(str, Enum):
    NORMAL = "normal"
    SHARED = "shared"
    RESTRICTED = "restricted"


@dataclass_json
@dataclasses.dataclass
class ImGroup200ApplicationJSON:
    r"""ImGroup200ApplicationJSON
    Group object.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    search_by_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_account') }})
    search_by_domain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_domain') }})
    search_by_ma_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_ma_account') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    type: Optional[ImGroup200ApplicationJSONTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class ImGroupRequest:
    path_params: ImGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    im_group_200_application_json_object: Optional[ImGroup200ApplicationJSON] = dataclasses.field(default=None)
    
