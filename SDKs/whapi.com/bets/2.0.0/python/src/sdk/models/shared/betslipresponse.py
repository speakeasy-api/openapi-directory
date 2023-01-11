import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import betslipbet as shared_betslipbet


@dataclass_json
@dataclasses.dataclass
class BetSlipResponse:
    betslip: Optional[list[shared_betslipbet.Betslipbet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betslip') }})
    
