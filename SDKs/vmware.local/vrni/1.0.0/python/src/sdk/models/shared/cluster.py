import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitytype_enum as shared_entitytype_enum
from ..shared import reference as shared_reference


@dataclass_json
@dataclasses.dataclass
class Cluster:
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[shared_entitytype_enum.EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nsx_manager: Optional[shared_reference.Reference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsx_manager') }})
    num_cpu_cores: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_cpu_cores') }})
    num_datastores: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_datastores') }})
    num_hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_hosts') }})
    total_cpus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_cpus') }})
    total_memory: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_memory') }})
    vcenter_manager: Optional[shared_reference.Reference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcenter_manager') }})
    vendor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor_id') }})
    
