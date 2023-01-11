import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatecustomobjectcusotmfield as shared_updatecustomobjectcusotmfield

class CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum(str, Enum):
    MANY_TO_ONE = "manyToOne"


@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate:
    enforce_valid_mapping: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceValidMapping') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints:
    r"""CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints
    Specifies contraints to apply to custom object records.
    
    """
    
    create: Optional[CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionRequestRelationship:
    fields: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    cardinality: Optional[CustomObjectDefinitionUpdateActionRequestRelationshipCardinalityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardinality') }})
    record_constraints: Optional[CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordConstraints') }})
    
class CustomObjectDefinitionUpdateActionRequestTypeEnum(str, Enum):
    ADD_FIELD = "addField"
    DELETE_FIELD = "deleteField"
    UPDATE_FIELD = "updateField"
    UPDATE_OBJECT = "updateObject"
    RENAME_FIELD = "renameField"
    ADD_RELATIONSHIP = "addRelationship"
    DELETE_RELATIONSHIP = "deleteRelationship"


@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionRequest:
    namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    type: CustomObjectDefinitionUpdateActionRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[shared_updatecustomobjectcusotmfield.UpdateCustomObjectCusotmField] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    relationship: Optional[CustomObjectDefinitionUpdateActionRequestRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationship') }})
    
