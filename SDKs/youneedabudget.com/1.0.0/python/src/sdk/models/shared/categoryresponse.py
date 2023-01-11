import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category


@dataclass_json
@dataclasses.dataclass
class CategoryResponseData:
    category: shared_category.Category = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResponse:
    data: CategoryResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
