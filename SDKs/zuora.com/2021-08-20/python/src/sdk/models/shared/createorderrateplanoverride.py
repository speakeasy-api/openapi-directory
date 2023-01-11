import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createorderchargeoverride as shared_createorderchargeoverride


@dataclass_json
@dataclasses.dataclass
class CreateOrderRatePlanOverride:
    r"""CreateOrderRatePlanOverride
    Information about an order action of type `addProduct`. 
    
    If you want to create a pending order through the \"Add product\" order action, and if the charge's trigger condition is `Specific Date`, you must set a charge number in the `chargeNumber` field for the \"Add product\" order action. In this case, if you do not set it, Zuora will not generate the charge number for you.
    
    See more information about pending orders in [Pending Order and Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Pending_Order_and_Subscription). 
    
    """
    
    product_rate_plan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanId') }})
    charge_overrides: Optional[list[shared_createorderchargeoverride.CreateOrderChargeOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeOverrides') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    unique_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueToken') }})
    
