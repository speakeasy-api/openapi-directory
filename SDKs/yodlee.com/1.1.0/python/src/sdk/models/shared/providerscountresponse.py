import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import providerscount as shared_providerscount


@dataclass_json
@dataclasses.dataclass
class ProvidersCountResponse:
    provider: Optional[shared_providerscount.ProvidersCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    
