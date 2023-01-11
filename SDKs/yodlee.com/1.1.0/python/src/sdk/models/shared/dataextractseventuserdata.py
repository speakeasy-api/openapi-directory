import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataextractseventlinks as shared_dataextractseventlinks
from ..shared import dataextractsuser as shared_dataextractsuser


@dataclass_json
@dataclasses.dataclass
class DataExtractsEventUserData:
    links: Optional[list[shared_dataextractseventlinks.DataExtractsEventLinks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    user: Optional[shared_dataextractsuser.DataExtractsUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
