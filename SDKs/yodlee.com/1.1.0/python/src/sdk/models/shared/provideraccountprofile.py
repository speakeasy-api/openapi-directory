import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profile as shared_profile


@dataclass_json
@dataclasses.dataclass
class ProviderAccountProfile:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    profile: Optional[list[shared_profile.Profile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    
