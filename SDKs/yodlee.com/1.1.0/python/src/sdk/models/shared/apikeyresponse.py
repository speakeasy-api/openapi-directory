import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apikeyoutput as shared_apikeyoutput


@dataclass_json
@dataclasses.dataclass
class APIKeyResponse:
    api_key: Optional[list[shared_apikeyoutput.APIKeyOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    
