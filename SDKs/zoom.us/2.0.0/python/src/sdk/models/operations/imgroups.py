import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImGroupsImGroupListGroupsTypeEnum(str, Enum):
    NORMAL = "normal"
    SHARED = "shared"
    RESTRICTED = "restricted"


@dataclass_json
@dataclasses.dataclass
class ImGroupsImGroupListGroups:
    r"""ImGroupsImGroupListGroups
    Group object.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    search_by_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_account') }})
    search_by_domain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_domain') }})
    search_by_ma_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_ma_account') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    type: Optional[ImGroupsImGroupListGroupsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ImGroupsImGroupList:
    r"""ImGroupsImGroupList
    List of IM Groups.
    """
    
    groups: Optional[list[ImGroupsImGroupListGroups]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ImGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    im_group_list: Optional[ImGroupsImGroupList] = dataclasses.field(default=None)
    
