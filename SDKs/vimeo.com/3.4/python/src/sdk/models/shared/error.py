import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Error:
    developer_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('developer_message') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_code: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
