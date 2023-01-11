import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectdefinitionupdateactionrequest as shared_customobjectdefinitionupdateactionrequest


@dataclass_json
@dataclasses.dataclass
class MigrationUpdateCustomObjectDefinitionsRequest:
    actions: list[shared_customobjectdefinitionupdateactionrequest.CustomObjectDefinitionUpdateActionRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    
