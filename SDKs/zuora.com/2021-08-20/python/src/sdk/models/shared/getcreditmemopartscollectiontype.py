import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getcreditmemoparttypewithsuccess as shared_getcreditmemoparttypewithsuccess


@dataclass_json
@dataclasses.dataclass
class GetCreditMemoPartsCollectionType:
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    parts: Optional[list[shared_getcreditmemoparttypewithsuccess.GetCreditMemoPartTypewithSuccess]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
