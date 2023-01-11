import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import totalcount as shared_totalcount


@dataclass_json
@dataclasses.dataclass
class ProvidersCount:
    total: Optional[shared_totalcount.TotalCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TOTAL') }})
    
