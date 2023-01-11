import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DomainListResult:
    r"""DomainListResult
    Server response for Get tenant domains API call.
    """
    
    value: Optional[list[dict[str, dict[str, Any]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
