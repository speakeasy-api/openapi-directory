import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preauthorizedapplicationextension as shared_preauthorizedapplicationextension
from ..shared import preauthorizedapplicationpermission as shared_preauthorizedapplicationpermission


@dataclass_json
@dataclasses.dataclass
class PreAuthorizedApplication:
    r"""PreAuthorizedApplication
    Contains information about pre authorized client application.
    """
    
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    extensions: Optional[list[shared_preauthorizedapplicationextension.PreAuthorizedApplicationExtension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensions') }})
    permissions: Optional[list[shared_preauthorizedapplicationpermission.PreAuthorizedApplicationPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
