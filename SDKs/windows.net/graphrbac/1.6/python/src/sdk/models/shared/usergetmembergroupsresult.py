import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UserGetMemberGroupsResult:
    r"""UserGetMemberGroupsResult
    Server response for GetMemberGroups API call.
    """
    
    value: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
