import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargetier as shared_chargetier


@dataclass_json
@dataclasses.dataclass
class ChargeModelDataOverrideChargeModelConfiguration:
    custom_field_per_unit_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFieldPerUnitRate') }})
    custom_field_total_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFieldTotalAmount') }})
    formula: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formula') }})
    

@dataclass_json
@dataclasses.dataclass
class ChargeModelDataOverride:
    r"""ChargeModelDataOverride
    Container for charge model configuration data.
    
    **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
    
    """
    
    charge_model_configuration: Optional[ChargeModelDataOverrideChargeModelConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeModelConfiguration') }})
    tiers: Optional[list[shared_chargetier.ChargeTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    
