import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getinvoicetaxitemtype as shared_getinvoicetaxitemtype


@dataclass_json
@dataclasses.dataclass
class GetInvoiceTaxationItemsResponse:
    data: Optional[list[shared_getinvoicetaxitemtype.GetInvoiceTaxItemType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
