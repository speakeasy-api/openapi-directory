import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enduserroute as shared_enduserroute


@dataclass_json
@dataclasses.dataclass
class EndUserRouteEmbeddedObject:
    data: Optional[shared_enduserroute.EndUserRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
