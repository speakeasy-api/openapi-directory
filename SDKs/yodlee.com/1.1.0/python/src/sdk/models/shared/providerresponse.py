import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import providers as shared_providers


@dataclass_json
@dataclasses.dataclass
class ProviderResponse:
    provider: Optional[list[shared_providers.Providers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    
