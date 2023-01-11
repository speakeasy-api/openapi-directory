import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import valuablesclassescounttypecount as shared_valuablesclassescounttypecount


@dataclass_json
@dataclasses.dataclass
class ValuablesClassesCount:
    r"""ValuablesClassesCount
    Contains the count of ValuablesClasses belonging to an issuer grouped by their Type.
    """
    
    total_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    type_count: Optional[list[shared_valuablesclassescounttypecount.ValuablesClassesCountTypeCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCount') }})
    
