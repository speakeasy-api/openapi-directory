import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segment as shared_segment


@dataclass_json
@dataclasses.dataclass
class Itinerary:
    segments: list[shared_segment.Segment] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    base_fare_usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseFareUSD') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ticketing_carrier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketingCarrier') }})
    
