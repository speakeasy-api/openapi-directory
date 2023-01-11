import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataextractseventdata as shared_dataextractseventdata


@dataclass_json
@dataclasses.dataclass
class DataExtractsEvent:
    data: Optional[shared_dataextractseventdata.DataExtractsEventData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    
