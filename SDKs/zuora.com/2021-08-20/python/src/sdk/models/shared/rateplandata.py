import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rateplanchargedata as shared_rateplanchargedata


@dataclass_json
@dataclasses.dataclass
class RatePlanDataSubscriptionProductFeatureList:
    subscription_product_feature: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionProductFeature') }})
    

@dataclass_json
@dataclasses.dataclass
class RatePlanData:
    rate_plan: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePlan') }})
    rate_plan_charge_data: Optional[list[shared_rateplanchargedata.RatePlanChargeData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePlanChargeData') }})
    subscription_product_feature_list: Optional[RatePlanDataSubscriptionProductFeatureList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionProductFeatureList') }})
    
