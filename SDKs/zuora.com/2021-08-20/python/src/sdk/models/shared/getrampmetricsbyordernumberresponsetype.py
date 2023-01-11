import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderrampmetrics as shared_orderrampmetrics


@dataclass_json
@dataclasses.dataclass
class GetRampMetricsByOrderNumberResponseTypeReasons:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRampMetricsByOrderNumberResponseType:
    process_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processId') }})
    ramp_metrics: Optional[list[shared_orderrampmetrics.OrderRampMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rampMetrics') }})
    reasons: Optional[list[GetRampMetricsByOrderNumberResponseTypeReasons]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
