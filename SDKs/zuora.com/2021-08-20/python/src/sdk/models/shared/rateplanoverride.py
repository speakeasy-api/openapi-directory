import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargeoverride as shared_chargeoverride


@dataclass_json
@dataclasses.dataclass
class RatePlanOverride:
    r"""RatePlanOverride
    Rate plan associated with a subscription.
    
    """
    
    product_rate_plan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanId') }})
    charge_overrides: Optional[list[shared_chargeoverride.ChargeOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeOverrides') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    new_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRatePlanId') }})
    unique_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueToken') }})
    
