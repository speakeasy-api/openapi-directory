import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectdefinition as shared_customobjectdefinition


@dataclass_json
@dataclasses.dataclass
class GetAllCustomObjectDefinitionsInNamespaceResponse:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    definitions: Optional[dict[str, shared_customobjectdefinition.CustomObjectDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    
