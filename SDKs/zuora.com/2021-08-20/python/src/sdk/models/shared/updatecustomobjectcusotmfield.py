import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectcustomfielddefinitionupdate as shared_customobjectcustomfielddefinitionupdate


@dataclass_json
@dataclasses.dataclass
class UpdateCustomObjectCusotmField:
    r"""UpdateCustomObjectCusotmField
    A reference to a field.
    """
    
    definition: Optional[shared_customobjectcustomfielddefinitionupdate.CustomObjectCustomFieldDefinitionUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    filterable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterable') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    target_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetName') }})
    
