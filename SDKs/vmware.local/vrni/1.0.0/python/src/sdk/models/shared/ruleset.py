import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reference as shared_reference

class RuleSetRuleSetTypeEnum(str, Enum):
    NSX_STANDARD = "NSX_STANDARD"
    NSX_REDIRECT = "NSX_REDIRECT"
    AWS_STANDARD = "AWS_STANDARD"


@dataclass_json
@dataclasses.dataclass
class RuleSet:
    firewall: Optional[shared_reference.Reference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    rule_set_type: Optional[RuleSetRuleSetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule_set_type') }})
    rules: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
