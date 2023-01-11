import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleset as shared_ruleset
from ..shared import reference as shared_reference
from ..shared import entitytype_enum as shared_entitytype_enum


@dataclass_json
@dataclasses.dataclass
class BaseSecurityGroup:
    direct_destination_rules: Optional[list[shared_ruleset.RuleSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_destination_rules') }})
    direct_members: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_members') }})
    direct_source_rules: Optional[list[shared_ruleset.RuleSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_source_rules') }})
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[shared_entitytype_enum.EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    excluded_members: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excluded_members') }})
    indirect_destination_rules: Optional[list[shared_ruleset.RuleSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indirect_destination_rules') }})
    indirect_source_rules: Optional[list[shared_ruleset.RuleSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indirect_source_rules') }})
    members: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parents: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    translated_vm_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translated_vm_count') }})
    vendor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor_id') }})
    
