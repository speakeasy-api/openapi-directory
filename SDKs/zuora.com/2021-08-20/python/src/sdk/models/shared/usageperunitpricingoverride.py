import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UsagePerUnitPricingOverridePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    SPECIFIC_PERCENTAGE_VALUE = "SpecificPercentageValue"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"

class UsagePerUnitPricingOverrideRatingGroupEnum(str, Enum):
    BY_BILLING_PERIOD = "ByBillingPeriod"
    BY_USAGE_START_DATE = "ByUsageStartDate"
    BY_USAGE_RECORD = "ByUsageRecord"
    BY_USAGE_UPLOAD = "ByUsageUpload"


@dataclass_json
@dataclasses.dataclass
class UsagePerUnitPricingOverride:
    r"""UsagePerUnitPricingOverride
    Pricing information about a usage charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit consumed.
    
    """
    
    list_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    price_change_option: Optional[UsagePerUnitPricingOverridePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    price_increase_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceIncreasePercentage') }})
    rating_group: Optional[UsagePerUnitPricingOverrideRatingGroupEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingGroup') }})
    
