import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import previeworderchargeoverride as shared_previeworderchargeoverride


@dataclass_json
@dataclasses.dataclass
class PreviewOrderRatePlanOverride:
    r"""PreviewOrderRatePlanOverride
    Rate plan associated with a subscription.
    
    """
    
    product_rate_plan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanId') }})
    charge_overrides: Optional[list[shared_previeworderchargeoverride.PreviewOrderChargeOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeOverrides') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    unique_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueToken') }})
    
