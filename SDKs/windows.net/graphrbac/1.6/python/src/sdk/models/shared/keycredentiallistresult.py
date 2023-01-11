import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class KeyCredentialListResult:
    r"""KeyCredentialListResult
    KeyCredential list operation result.
    """
    
    value: Optional[list[dict[str, dict[str, Any]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
