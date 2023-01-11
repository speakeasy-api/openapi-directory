import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstrowoption as shared_firstrowoption
from ..shared import fieldselector as shared_fieldselector


@dataclass_json
@dataclasses.dataclass
class ListTemplateOverride:
    first_row_option: Optional[shared_firstrowoption.FirstRowOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstRowOption') }})
    second_row_option: Optional[shared_fieldselector.FieldSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondRowOption') }})
    third_row_option: Optional[shared_fieldselector.FieldSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdRowOption') }})
    
