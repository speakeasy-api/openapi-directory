import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import derivednetworth as shared_derivednetworth


@dataclass_json
@dataclasses.dataclass
class DerivedNetworthResponse:
    networth: Optional[list[shared_derivednetworth.DerivedNetworth]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networth') }})
    
