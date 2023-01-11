import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getdebitmemoapplicationparttype as shared_getdebitmemoapplicationparttype


@dataclass_json
@dataclasses.dataclass
class GetDebitMemoApplicationPartCollectionType:
    application_parts: Optional[list[shared_getdebitmemoapplicationparttype.GetDebitMemoApplicationPartType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationParts') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
