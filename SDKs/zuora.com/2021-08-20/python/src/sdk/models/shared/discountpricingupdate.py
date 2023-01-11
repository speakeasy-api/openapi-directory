import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiscountPricingUpdateApplyDiscountToEnum(str, Enum):
    ONETIME = "ONETIME"
    RECURRING = "RECURRING"
    USAGE = "USAGE"
    ONETIMERECURRING = "ONETIMERECURRING"
    ONETIMEUSAGE = "ONETIMEUSAGE"
    RECURRINGUSAGE = "RECURRINGUSAGE"
    ONETIMERECURRINGUSAGE = "ONETIMERECURRINGUSAGE"

class DiscountPricingUpdateDiscountLevelEnum(str, Enum):
    RATEPLAN = "rateplan"
    SUBSCRIPTION = "subscription"
    ACCOUNT = "account"

class DiscountPricingUpdatePriceChangeOptionEnum(str, Enum):
    NO_CHANGE = "NoChange"
    USE_LATEST_PRODUCT_CATALOG_PRICING = "UseLatestProductCatalogPricing"


@dataclass_json
@dataclasses.dataclass
class DiscountPricingUpdate:
    apply_discount_to: Optional[DiscountPricingUpdateApplyDiscountToEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyDiscountTo') }})
    discount_level: Optional[DiscountPricingUpdateDiscountLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountLevel') }})
    discount_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    price_change_option: Optional[DiscountPricingUpdatePriceChangeOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeOption') }})
    
