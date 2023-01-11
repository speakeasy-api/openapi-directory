import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChargePreviewMetricsCmrr:
    discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    discount_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountDelta') }})
    regular: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular') }})
    regular_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularDelta') }})
    

@dataclass_json
@dataclasses.dataclass
class ChargePreviewMetricsTax:
    discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    discount_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountDelta') }})
    regular: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular') }})
    regular_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularDelta') }})
    

@dataclass_json
@dataclasses.dataclass
class ChargePreviewMetricsTcb:
    discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    discount_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountDelta') }})
    regular: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular') }})
    regular_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularDelta') }})
    

@dataclass_json
@dataclasses.dataclass
class ChargePreviewMetricsTcv:
    discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    discount_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountDelta') }})
    regular: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular') }})
    regular_delta: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularDelta') }})
    

@dataclass_json
@dataclasses.dataclass
class ChargePreviewMetrics:
    charge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNumber') }})
    cmrr: Optional[ChargePreviewMetricsCmrr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmrr') }})
    origin_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originRatePlanId') }})
    product_rate_plan_charge_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanChargeId') }})
    product_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanId') }})
    tax: Optional[ChargePreviewMetricsTax] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    tcb: Optional[ChargePreviewMetricsTcb] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcb') }})
    tcv: Optional[ChargePreviewMetricsTcv] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcv') }})
    
