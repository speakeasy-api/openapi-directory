import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorygroupwithcategories as shared_categorygroupwithcategories


@dataclass_json
@dataclasses.dataclass
class CategoriesResponseData:
    category_groups: list[shared_categorygroupwithcategories.CategoryGroupWithCategories] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_groups') }})
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoriesResponse:
    data: CategoriesResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
