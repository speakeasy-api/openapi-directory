import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postcustomobjectdefinitionsrequestdefinition as shared_postcustomobjectdefinitionsrequestdefinition


@dataclass_json
@dataclasses.dataclass
class PostCustomObjectDefinitionsRequest:
    definitions: Optional[dict[str, shared_postcustomobjectdefinitionsrequestdefinition.PostCustomObjectDefinitionsRequestDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    
