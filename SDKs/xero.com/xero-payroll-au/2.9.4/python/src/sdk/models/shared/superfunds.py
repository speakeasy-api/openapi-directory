import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import superfund as shared_superfund


@dataclass_json
@dataclasses.dataclass
class SuperFunds:
    super_funds: Optional[list[shared_superfund.SuperFund]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperFunds') }})
    
