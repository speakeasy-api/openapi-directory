import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargetier as shared_chargetier

class UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum(str, Enum):
    NO_CREDIT = "NoCredit"
    CREDIT_BY_SPECIFIC_RATE = "CreditBySpecificRate"

class UsageTieredWithOveragePricingOverridePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    SPECIFIC_PERCENTAGE_VALUE = "SpecificPercentageValue"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"


@dataclass_json
@dataclasses.dataclass
class UsageTieredWithOveragePricingOverride:
    r"""UsageTieredWithOveragePricingOverride
    Pricing information about a usage charge that uses the \"tiered with overage\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed. The charge also has a fixed price per unit consumed beyond the limit of the final tier.
    
    """
    
    number_of_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfPeriods') }})
    overage_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overagePrice') }})
    overage_unused_units_credit_option: Optional[UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageUnusedUnitsCreditOption') }})
    price_change_option: Optional[UsageTieredWithOveragePricingOverridePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    price_increase_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceIncreasePercentage') }})
    tiers: Optional[list[shared_chargetier.ChargeTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    unused_units_credit_rates: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unusedUnitsCreditRates') }})
    
