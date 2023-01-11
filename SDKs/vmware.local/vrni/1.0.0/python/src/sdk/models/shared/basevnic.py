import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitytype_enum as shared_entitytype_enum
from ..shared import ipv4address as shared_ipv4address
from ..shared import reference as shared_reference
from ..shared import vlan as shared_vlan


@dataclass_json
@dataclasses.dataclass
class BaseVnic:
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[shared_entitytype_enum.EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    ip_addresses: Optional[list[shared_ipv4address.IPV4Address]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    layer2_network: Optional[shared_reference.Reference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layer2_network') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vlan: Optional[shared_vlan.Vlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    vm: Optional[shared_reference.Reference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    
