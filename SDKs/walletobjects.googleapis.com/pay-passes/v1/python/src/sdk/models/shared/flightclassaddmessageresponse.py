import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flightclass as shared_flightclass


@dataclass_json
@dataclasses.dataclass
class FlightClassAddMessageResponse:
    resource: Optional[shared_flightclass.FlightClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
