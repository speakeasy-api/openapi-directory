import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargeoverrideforevergreen as shared_chargeoverrideforevergreen


@dataclass_json
@dataclasses.dataclass
class RatePlanOverrideForEvergreen:
    r"""RatePlanOverrideForEvergreen
    Rate plan associated with a subscription.
    
    """
    
    product_rate_plan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanId') }})
    charge_overrides: Optional[list[shared_chargeoverrideforevergreen.ChargeOverrideForEvergreen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeOverrides') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    new_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRatePlanId') }})
    unique_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueToken') }})
    
