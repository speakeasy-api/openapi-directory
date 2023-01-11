import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagination as shared_pagination
from ..shared import loyaltyclass as shared_loyaltyclass


@dataclass_json
@dataclasses.dataclass
class LoyaltyClassListResponse:
    pagination: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    resources: Optional[list[shared_loyaltyclass.LoyaltyClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
