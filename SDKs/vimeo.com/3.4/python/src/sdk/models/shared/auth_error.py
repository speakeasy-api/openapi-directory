import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AuthError:
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    
