import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OneTimeFlatFeePricingOverride:
    r"""OneTimeFlatFeePricingOverride
    Pricing information about a one-time charge that uses the \"flat fee\" charge model. In this charge model, the charge has a fixed price.
    
    """
    
    list_price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPrice') }})
    
