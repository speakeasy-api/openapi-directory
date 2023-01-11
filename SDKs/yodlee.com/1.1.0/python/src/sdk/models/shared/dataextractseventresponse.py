import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataextractsevent as shared_dataextractsevent


@dataclass_json
@dataclasses.dataclass
class DataExtractsEventResponse:
    event: Optional[shared_dataextractsevent.DataExtractsEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
