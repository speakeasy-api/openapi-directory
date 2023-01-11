import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostDecryptionType:
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    signature: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
