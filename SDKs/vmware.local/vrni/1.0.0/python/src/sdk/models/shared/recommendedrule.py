import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reference as shared_reference
from ..shared import simpleportrange as shared_simpleportrange

class RecommendedRuleActionEnum(str, Enum):
    ALLOW = "ALLOW"
    DROP = "DROP"


@dataclass_json
@dataclasses.dataclass
class RecommendedRule:
    action: Optional[RecommendedRuleActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destinations: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    port_ranges: Optional[list[shared_simpleportrange.SimplePortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_ranges') }})
    protocols: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    sources: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
