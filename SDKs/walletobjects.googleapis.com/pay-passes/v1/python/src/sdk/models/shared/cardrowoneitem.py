import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import templateitem as shared_templateitem


@dataclass_json
@dataclasses.dataclass
class CardRowOneItem:
    item: Optional[shared_templateitem.TemplateItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    
