import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Domain:
    allow_hd: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_hd') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
