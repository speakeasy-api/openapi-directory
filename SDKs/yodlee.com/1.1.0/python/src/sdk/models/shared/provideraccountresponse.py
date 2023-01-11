import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provideraccount as shared_provideraccount


@dataclass_json
@dataclasses.dataclass
class ProviderAccountResponse:
    provider_account: Optional[list[shared_provideraccount.ProviderAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccount') }})
    
