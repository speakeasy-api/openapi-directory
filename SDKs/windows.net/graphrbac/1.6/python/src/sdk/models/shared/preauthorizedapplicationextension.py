import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PreAuthorizedApplicationExtension:
    r"""PreAuthorizedApplicationExtension
    Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.
    """
    
    conditions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    
