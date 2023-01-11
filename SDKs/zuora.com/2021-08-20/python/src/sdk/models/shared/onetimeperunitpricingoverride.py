import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OneTimePerUnitPricingOverride:
    r"""OneTimePerUnitPricingOverride
    Pricing information about a one-time charge that uses the \"per unit\" charge model. In this charge model, the charge has a fixed price per unit purchased.
    
    """
    
    list_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
