import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemoveProduct:
    r"""RemoveProduct
    Information about an order action of type `RemoveProduct`.
    
    """
    
    rate_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratePlanId') }})
    unique_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueToken') }})
    
