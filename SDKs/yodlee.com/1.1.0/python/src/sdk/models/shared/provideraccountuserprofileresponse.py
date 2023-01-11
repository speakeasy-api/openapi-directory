import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provideraccountprofile as shared_provideraccountprofile


@dataclass_json
@dataclasses.dataclass
class ProviderAccountUserProfileResponse:
    provider_account: Optional[list[shared_provideraccountprofile.ProviderAccountProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccount') }})
    
