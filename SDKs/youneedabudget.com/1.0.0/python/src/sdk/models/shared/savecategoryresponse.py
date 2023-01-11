import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category


@dataclass_json
@dataclasses.dataclass
class SaveCategoryResponseData:
    category: shared_category.Category = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclasses.dataclass
class SaveCategoryResponse:
    data: SaveCategoryResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
