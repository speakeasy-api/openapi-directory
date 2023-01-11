import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category


@dataclass_json
@dataclasses.dataclass
class CategoryGroupWithCategories:
    categories: list[shared_category.Category] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    deleted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    hidden: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
