import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargetier as shared_chargetier

class UsageVolumePricingOverridePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    SPECIFIC_PERCENTAGE_VALUE = "SpecificPercentageValue"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"

class UsageVolumePricingOverrideRatingGroupEnum(str, Enum):
    BY_BILLING_PERIOD = "ByBillingPeriod"
    BY_USAGE_START_DATE = "ByUsageStartDate"
    BY_USAGE_RECORD = "ByUsageRecord"
    BY_USAGE_UPLOAD = "ByUsageUpload"


@dataclass_json
@dataclasses.dataclass
class UsageVolumePricingOverride:
    r"""UsageVolumePricingOverride
    Pricing information about a usage charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are consumed.
    
    """
    
    price_change_option: Optional[UsageVolumePricingOverridePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    price_increase_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceIncreasePercentage') }})
    rating_group: Optional[UsageVolumePricingOverrideRatingGroupEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingGroup') }})
    tiers: Optional[list[shared_chargetier.ChargeTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    
