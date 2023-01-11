import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getcustomexchangeratesdatatype as shared_getcustomexchangeratesdatatype


@dataclass_json
@dataclasses.dataclass
class GetCustomExchangeRatesType:
    inverse: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inverse') }})
    rates: Optional[list[shared_getcustomexchangeratesdatatype.GetCustomExchangeRatesDataType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
