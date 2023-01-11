import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flightobject as shared_flightobject


@dataclass_json
@dataclasses.dataclass
class FlightObjectAddMessageResponse:
    resource: Optional[shared_flightobject.FlightObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
