import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firsthref as shared_firsthref
from ..shared import lasthref as shared_lasthref
from ..shared import nexthref as shared_nexthref
from ..shared import prevhref as shared_prevhref
from ..shared import selfhref as shared_selfhref


@dataclass_json
@dataclasses.dataclass
class Links:
    first: Optional[shared_firsthref.FirstHref] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[shared_lasthref.LastHref] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[shared_nexthref.NextHref] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: Optional[shared_prevhref.PrevHref] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    self: Optional[shared_selfhref.SelfHref] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
