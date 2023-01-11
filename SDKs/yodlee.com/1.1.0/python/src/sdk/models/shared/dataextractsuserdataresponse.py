import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataextractsuserdata as shared_dataextractsuserdata


@dataclass_json
@dataclasses.dataclass
class DataExtractsUserDataResponse:
    user_data: Optional[list[shared_dataextractsuserdata.DataExtractsUserData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    
