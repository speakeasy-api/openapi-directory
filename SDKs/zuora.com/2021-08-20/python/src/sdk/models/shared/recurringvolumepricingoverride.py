import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargetier as shared_chargetier

class RecurringVolumePricingOverrideListPriceBaseEnum(str, Enum):
    PER_BILLING_PERIOD = "Per_Billing_Period"
    PER_MONTH = "Per_Month"
    PER_WEEK = "Per_Week"

class RecurringVolumePricingOverridePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    SPECIFIC_PERCENTAGE_VALUE = "SpecificPercentageValue"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"


@dataclass_json
@dataclasses.dataclass
class RecurringVolumePricingOverride:
    r"""RecurringVolumePricingOverride
    Pricing information about a recurring charge that uses the \"volume pricing\" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
    
    """
    
    list_price_base: Optional[RecurringVolumePricingOverrideListPriceBaseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPriceBase') }})
    price_change_option: Optional[RecurringVolumePricingOverridePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    price_increase_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceIncreasePercentage') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    tiers: Optional[list[shared_chargetier.ChargeTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    
