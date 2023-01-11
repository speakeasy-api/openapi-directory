import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Cobrand:
    cobrand_login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cobrandLogin') }})
    cobrand_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cobrandPassword') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    
