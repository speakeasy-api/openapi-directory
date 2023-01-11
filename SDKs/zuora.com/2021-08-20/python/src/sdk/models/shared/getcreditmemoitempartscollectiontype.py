import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getcreditmemoitemparttypewithsuccess as shared_getcreditmemoitemparttypewithsuccess


@dataclass_json
@dataclasses.dataclass
class GetCreditMemoItemPartsCollectionType:
    item_parts: Optional[list[shared_getcreditmemoitemparttypewithsuccess.GetCreditMemoItemPartTypewithSuccess]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemParts') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
