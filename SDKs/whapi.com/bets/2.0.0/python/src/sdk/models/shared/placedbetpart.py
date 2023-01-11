import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import priceformatted as shared_priceformatted


@dataclass_json
@dataclasses.dataclass
class PlacedBetPart:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDescription') }})
    event_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    price_den: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    price_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    result: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    start_date_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime') }})
    each_way_den: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayDen') }})
    each_way_num: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayNum') }})
    each_way_places: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayPlaces') }})
    event_market_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventMarketDescription') }})
    event_type_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypeDescription') }})
    handicap: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handicap') }})
    price_formatted: Optional[shared_priceformatted.PriceFormatted] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceFormatted') }})
    rule4_deductions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule4Deductions') }})
    selection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    
