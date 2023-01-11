import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OAuth2PermissionGrantListResult:
    r"""OAuth2PermissionGrantListResult
    Server response for get oauth2 permissions grants
    """
    
    odata_next_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('odata.nextLink') }})
    value: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
