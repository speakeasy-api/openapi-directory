import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TransactionCategoryRequestInput:
    parent_category_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCategoryId') }})
    category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryName') }})
    
