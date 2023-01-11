import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resources as shared_resources


@dataclass_json
@dataclasses.dataclass
class JwtInsertResponse:
    resources: Optional[shared_resources.Resources] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    save_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveUri') }})
    
