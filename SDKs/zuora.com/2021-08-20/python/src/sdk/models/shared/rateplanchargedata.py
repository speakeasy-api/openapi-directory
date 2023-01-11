import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rateplanchargetier as shared_rateplanchargetier


@dataclass_json
@dataclasses.dataclass
class RatePlanChargeData:
    rate_plan_charge: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePlanCharge') }})
    rate_plan_charge_tier: Optional[list[shared_rateplanchargetier.RatePlanChargeTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePlanChargeTier') }})
    
