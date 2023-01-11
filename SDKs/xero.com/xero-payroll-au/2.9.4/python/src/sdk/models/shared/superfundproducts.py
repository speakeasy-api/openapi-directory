import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import superfundproduct as shared_superfundproduct


@dataclass_json
@dataclasses.dataclass
class SuperFundProducts:
    super_fund_products: Optional[list[shared_superfundproduct.SuperFundProduct]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperFundProducts') }})
    
