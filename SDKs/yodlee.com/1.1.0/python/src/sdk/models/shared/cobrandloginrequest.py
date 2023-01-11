import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cobrand as shared_cobrand


@dataclass_json
@dataclasses.dataclass
class CobrandLoginRequest:
    cobrand: shared_cobrand.Cobrand = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cobrand') }})
    
