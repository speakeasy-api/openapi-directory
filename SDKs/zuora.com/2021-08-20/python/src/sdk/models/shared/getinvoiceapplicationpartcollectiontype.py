import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getinvoiceapplicationparttype as shared_getinvoiceapplicationparttype


@dataclass_json
@dataclasses.dataclass
class GetInvoiceApplicationPartCollectionType:
    application_parts: Optional[list[shared_getinvoiceapplicationparttype.GetInvoiceApplicationPartType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationParts') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
