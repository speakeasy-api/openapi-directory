import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeslicednetmetricsforevergreen as shared_timeslicednetmetricsforevergreen
from ..shared import timeslicedmetricsforevergreen as shared_timeslicedmetricsforevergreen
from ..shared import timeslicedtcbnetmetricsforevergreen as shared_timeslicedtcbnetmetricsforevergreen


@dataclass_json
@dataclasses.dataclass
class OrderMetricsForEvergreen:
    charge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNumber') }})
    mrr: Optional[list[shared_timeslicednetmetricsforevergreen.TimeSlicedNetMetricsForEvergreen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mrr') }})
    origin_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originRatePlanId') }})
    product_rate_plan_charge_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanChargeId') }})
    product_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanId') }})
    quantity: Optional[list[shared_timeslicedmetricsforevergreen.TimeSlicedMetricsForEvergreen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    tcb: Optional[list[shared_timeslicedtcbnetmetricsforevergreen.TimeSlicedTcbNetMetricsForEvergreen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcb') }})
    tcv: Optional[list[shared_timeslicednetmetricsforevergreen.TimeSlicedNetMetricsForEvergreen]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcv') }})
    
