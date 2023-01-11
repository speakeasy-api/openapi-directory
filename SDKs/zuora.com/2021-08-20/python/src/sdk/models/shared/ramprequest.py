import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rampchargerequest as shared_rampchargerequest
from ..shared import rampintervalrequest as shared_rampintervalrequest


@dataclass_json
@dataclasses.dataclass
class RampRequest:
    r"""RampRequest
    Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.
    
    """
    
    charges: Optional[list[shared_rampchargerequest.RampChargeRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charges') }})
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    intervals: Optional[list[shared_rampintervalrequest.RampIntervalRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervals') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
