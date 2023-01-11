import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getemailhistoryvotype as shared_getemailhistoryvotype


@dataclass_json
@dataclasses.dataclass
class GetEmailHistoryVOsType:
    email_histories: Optional[list[shared_getemailhistoryvotype.GetEmailHistoryVoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailHistories') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
