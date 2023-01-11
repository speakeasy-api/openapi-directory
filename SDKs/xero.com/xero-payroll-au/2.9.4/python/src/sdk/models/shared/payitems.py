import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payitem as shared_payitem


@dataclass_json
@dataclasses.dataclass
class PayItems:
    pay_items: Optional[shared_payitem.PayItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayItems') }})
    
