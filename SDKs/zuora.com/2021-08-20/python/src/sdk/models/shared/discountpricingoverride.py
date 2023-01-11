import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiscountPricingOverrideApplyDiscountToEnum(str, Enum):
    ONETIME = "ONETIME"
    RECURRING = "RECURRING"
    USAGE = "USAGE"
    ONETIMERECURRING = "ONETIMERECURRING"
    ONETIMEUSAGE = "ONETIMEUSAGE"
    RECURRINGUSAGE = "RECURRINGUSAGE"
    ONETIMERECURRINGUSAGE = "ONETIMERECURRINGUSAGE"

class DiscountPricingOverrideDiscountLevelEnum(str, Enum):
    RATEPLAN = "rateplan"
    SUBSCRIPTION = "subscription"
    ACCOUNT = "account"

class DiscountPricingOverridePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"


@dataclass_json
@dataclasses.dataclass
class DiscountPricingOverride:
    r"""DiscountPricingOverride
    Pricing information about a discount charge.
    
    """
    
    apply_discount_to: Optional[DiscountPricingOverrideApplyDiscountToEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyDiscountTo') }})
    discount_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    discount_level: Optional[DiscountPricingOverrideDiscountLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountLevel') }})
    discount_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    price_change_option: Optional[DiscountPricingOverridePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    
