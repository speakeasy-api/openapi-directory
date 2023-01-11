import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detailcategory as shared_detailcategory
from ..shared import transaction as shared_transaction
from ..shared import transaction as shared_transaction

class TransactionCategoryClassificationEnum(str, Enum):
    PERSONAL = "PERSONAL"
    BUSINESS = "BUSINESS"


@dataclass_json
@dataclasses.dataclass
class TransactionCategory:
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    classification: Optional[TransactionCategoryClassificationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    default_category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCategoryName') }})
    default_high_level_category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultHighLevelCategoryName') }})
    detail_category: Optional[list[shared_detailcategory.DetailCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCategory') }})
    high_level_category_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highLevelCategoryId') }})
    high_level_category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highLevelCategoryName') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source: Optional[shared_transaction.TransactionCategorySourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: Optional[shared_transaction.TransactionCategoryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
