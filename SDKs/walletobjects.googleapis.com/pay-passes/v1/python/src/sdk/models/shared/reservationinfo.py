import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import frequentflyerinfo as shared_frequentflyerinfo


@dataclass_json
@dataclasses.dataclass
class ReservationInfo:
    confirmation_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationCode') }})
    eticket_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eticketNumber') }})
    frequent_flyer_info: Optional[shared_frequentflyerinfo.FrequentFlyerInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequentFlyerInfo') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
