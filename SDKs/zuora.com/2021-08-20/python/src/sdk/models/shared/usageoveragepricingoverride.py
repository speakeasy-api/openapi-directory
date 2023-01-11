import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum(str, Enum):
    NO_CREDIT = "NoCredit"
    CREDIT_BY_SPECIFIC_RATE = "CreditBySpecificRate"

class UsageOveragePricingOverridePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    SPECIFIC_PERCENTAGE_VALUE = "SpecificPercentageValue"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"


@dataclass_json
@dataclasses.dataclass
class UsageOveragePricingOverride:
    r"""UsageOveragePricingOverride
    Pricing information about a usage charge that uses the \"overage\" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
    
    """
    
    included_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedUnits') }})
    number_of_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfPeriods') }})
    overage_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overagePrice') }})
    overage_unused_units_credit_option: Optional[UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageUnusedUnitsCreditOption') }})
    price_change_option: Optional[UsageOveragePricingOverridePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    price_increase_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceIncreasePercentage') }})
    unused_units_credit_rates: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unusedUnitsCreditRates') }})
    
