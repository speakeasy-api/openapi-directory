import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardrowoneitem as shared_cardrowoneitem
from ..shared import cardrowthreeitems as shared_cardrowthreeitems
from ..shared import cardrowtwoitems as shared_cardrowtwoitems


@dataclass_json
@dataclasses.dataclass
class CardRowTemplateInfo:
    one_item: Optional[shared_cardrowoneitem.CardRowOneItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneItem') }})
    three_items: Optional[shared_cardrowthreeitems.CardRowThreeItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threeItems') }})
    two_items: Optional[shared_cardrowtwoitems.CardRowTwoItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twoItems') }})
    
