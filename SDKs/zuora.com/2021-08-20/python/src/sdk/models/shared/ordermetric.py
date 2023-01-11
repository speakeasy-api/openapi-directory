import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeslicedelpnetmetrics as shared_timeslicedelpnetmetrics
from ..shared import timeslicednetmetrics as shared_timeslicednetmetrics
from ..shared import timeslicedmetrics as shared_timeslicedmetrics
from ..shared import timeslicedtcbnetmetrics as shared_timeslicedtcbnetmetrics


@dataclass_json
@dataclasses.dataclass
class OrderMetric:
    r"""OrderMetric
    The set of order metrics for an order action.
    """
    
    charge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNumber') }})
    elp: Optional[list[shared_timeslicedelpnetmetrics.TimeSlicedElpNetMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elp') }})
    mrr: Optional[list[shared_timeslicednetmetrics.TimeSlicedNetMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mrr') }})
    origin_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originRatePlanId') }})
    product_rate_plan_charge_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanChargeId') }})
    product_rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanId') }})
    quantity: Optional[list[shared_timeslicedmetrics.TimeSlicedMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    tcb: Optional[list[shared_timeslicedtcbnetmetrics.TimeSlicedTcbNetMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcb') }})
    tcv: Optional[list[shared_timeslicednetmetrics.TimeSlicedNetMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcv') }})
    
