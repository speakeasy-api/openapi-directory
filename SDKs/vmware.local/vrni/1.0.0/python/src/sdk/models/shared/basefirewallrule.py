import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallaction_enum as shared_firewallaction_enum
from ..shared import reference as shared_reference
from ..shared import entitytype_enum as shared_entitytype_enum
from ..shared import portrange as shared_portrange


@dataclass_json
@dataclasses.dataclass
class BaseFirewallRule:
    action: Optional[shared_firewallaction_enum.FirewallActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destination_any: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_any') }})
    destination_inversion: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_inversion') }})
    destinations: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[shared_entitytype_enum.EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_ranges: Optional[list[shared_portrange.PortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_ranges') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule_id') }})
    section_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section_id') }})
    section_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section_name') }})
    sequence_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence_number') }})
    service_any: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_any') }})
    services: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    source_any: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_any') }})
    source_inversion: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_inversion') }})
    sources: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
