import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newchargemetrics as shared_newchargemetrics


@dataclass_json
@dataclasses.dataclass
class ChargeMetricsData:
    charge_metrics: Optional[list[shared_newchargemetrics.NewChargeMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeMetrics') }})
    
