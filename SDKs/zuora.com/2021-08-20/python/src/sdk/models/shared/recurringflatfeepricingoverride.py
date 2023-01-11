import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RecurringFlatFeePricingOverrideListPriceBaseEnum(str, Enum):
    PER_BILLING_PERIOD = "Per_Billing_Period"
    PER_MONTH = "Per_Month"
    PER_WEEK = "Per_Week"

class RecurringFlatFeePricingOverridePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    SPECIFIC_PERCENTAGE_VALUE = "SpecificPercentageValue"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"


@dataclass_json
@dataclasses.dataclass
class RecurringFlatFeePricingOverride:
    r"""RecurringFlatFeePricingOverride
    Pricing information about a recurring charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.
    
    """
    
    list_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    list_price_base: Optional[RecurringFlatFeePricingOverrideListPriceBaseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPriceBase') }})
    price_change_option: Optional[RecurringFlatFeePricingOverridePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    price_increase_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceIncreasePercentage') }})
    
