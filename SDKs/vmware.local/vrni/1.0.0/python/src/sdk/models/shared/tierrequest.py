import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupmembershipcriteria as shared_groupmembershipcriteria


@dataclass_json
@dataclasses.dataclass
class TierRequest:
    group_membership_criteria: Optional[list[shared_groupmembershipcriteria.GroupMembershipCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_membership_criteria') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
