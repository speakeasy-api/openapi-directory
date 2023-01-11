import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PreAuthorizedApplicationPermission:
    r"""PreAuthorizedApplicationPermission
    Contains information about the pre-authorized permissions.
    """
    
    access_grants: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessGrants') }})
    direct_access_grant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directAccessGrant') }})
    
