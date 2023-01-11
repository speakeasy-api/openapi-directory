import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provideraccountdetail as shared_provideraccountdetail


@dataclass_json
@dataclasses.dataclass
class ProviderAccountDetailResponse:
    provider_account: Optional[list[shared_provideraccountdetail.ProviderAccountDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccount') }})
    
