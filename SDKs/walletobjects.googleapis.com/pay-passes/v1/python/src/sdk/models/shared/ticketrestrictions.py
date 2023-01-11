import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstring as shared_localizedstring


@dataclass_json
@dataclasses.dataclass
class TicketRestrictions:
    other_restrictions: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRestrictions') }})
    route_restrictions: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeRestrictions') }})
    route_restrictions_details: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeRestrictionsDetails') }})
    time_restrictions: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRestrictions') }})
    
