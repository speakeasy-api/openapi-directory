import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipaddressmembershipcriteria as shared_ipaddressmembershipcriteria
from ..shared import searchmembershipcriteria as shared_searchmembershipcriteria

class GroupMembershipCriteriaMembershipTypeEnum(str, Enum):
    SEARCH_MEMBERSHIP_CRITERIA = "SearchMembershipCriteria"
    IP_ADDRESS_MEMBERSHIP_CRITERIA = "IPAddressMembershipCriteria"


@dataclass_json
@dataclasses.dataclass
class GroupMembershipCriteria:
    r"""GroupMembershipCriteria
    EntityType currently restricted to VirtualMachine
    """
    
    ip_address_membership_criteria: Optional[shared_ipaddressmembershipcriteria.IPAddressMembershipCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_membership_criteria') }})
    membership_type: Optional[GroupMembershipCriteriaMembershipTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership_type') }})
    search_membership_criteria: Optional[shared_searchmembershipcriteria.SearchMembershipCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_membership_criteria') }})
    
