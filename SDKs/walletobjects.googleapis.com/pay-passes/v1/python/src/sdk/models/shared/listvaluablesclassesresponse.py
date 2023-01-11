import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagination as shared_pagination
from ..shared import valuablesclass as shared_valuablesclass


@dataclass_json
@dataclasses.dataclass
class ListValuablesClassesResponse:
    r"""ListValuablesClassesResponse
    Response containing the list of all valuable classes for an issuer (optionally for given type(s)).
    """
    
    pagination: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    valuables_classes: Optional[list[shared_valuablesclass.ValuablesClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuablesClasses') }})
    
