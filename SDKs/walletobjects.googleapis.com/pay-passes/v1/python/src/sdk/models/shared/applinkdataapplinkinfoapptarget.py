import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uri as shared_uri


@dataclass_json
@dataclasses.dataclass
class AppLinkDataAppLinkInfoAppTarget:
    target_uri: Optional[shared_uri.URI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUri') }})
    
