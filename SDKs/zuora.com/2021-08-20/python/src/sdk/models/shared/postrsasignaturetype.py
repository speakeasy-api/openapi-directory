import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostrsaSignatureType:
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    page_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageId') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
