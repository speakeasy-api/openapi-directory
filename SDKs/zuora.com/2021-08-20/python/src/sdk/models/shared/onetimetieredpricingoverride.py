import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargetier as shared_chargetier


@dataclass_json
@dataclasses.dataclass
class OneTimeTieredPricingOverride:
    r"""OneTimeTieredPricingOverride
    Pricing information about a one-time charge that uses the \"tiered pricing\" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
    
    """
    
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    tiers: Optional[list[shared_chargetier.ChargeTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    
