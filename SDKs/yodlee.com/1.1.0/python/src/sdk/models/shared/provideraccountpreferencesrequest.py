import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provideraccountpreferences as shared_provideraccountpreferences


@dataclass_json
@dataclasses.dataclass
class ProviderAccountPreferencesRequest:
    preferences: Optional[shared_provideraccountpreferences.ProviderAccountPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    
