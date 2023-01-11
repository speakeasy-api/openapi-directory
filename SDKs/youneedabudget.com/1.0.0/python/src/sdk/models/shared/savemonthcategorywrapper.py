import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savemonthcategory as shared_savemonthcategory


@dataclass_json
@dataclasses.dataclass
class SaveMonthCategoryWrapper:
    category: shared_savemonthcategory.SaveMonthCategory = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    
