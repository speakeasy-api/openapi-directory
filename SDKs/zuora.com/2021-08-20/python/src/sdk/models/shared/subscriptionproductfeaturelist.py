import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionamendsubscriptionproductfeature as shared_actionamendsubscriptionproductfeature


@dataclass_json
@dataclasses.dataclass
class SubscriptionProductFeatureList:
    subscription_product_feature: Optional[list[shared_actionamendsubscriptionproductfeature.ActionAmendSubscriptionProductFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionProductFeature') }})
    
