import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatecustomobjectcusotmfield as shared_updatecustomobjectcusotmfield

class CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum(str, Enum):
    MANY_TO_ONE = "manyToOne"
    ONE_TO_MANY = "oneToMany"


@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate:
    enforce_valid_mapping: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceValidMapping') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints:
    r"""CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints
    Specifies contraints to apply to custom object records.
    
    """
    
    create: Optional[CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionResponseRelationship:
    cardinality: Optional[CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardinality') }})
    fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    record_constraints: Optional[CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordConstraints') }})
    
class CustomObjectDefinitionUpdateActionResponseTypeEnum(str, Enum):
    ADD_FIELD = "addField"
    DELETE_FIELD = "deleteField"
    UPDATE_FIELD = "updateField"
    UPDATE_OBJECT = "updateObject"
    RENAME_FIELD = "renameField"
    ADD_RELATIONSHIP = "addRelationship"
    DELETE_RELATIONSHIP = "deleteRelationship"


@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionUpdateActionResponse:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[shared_updatecustomobjectcusotmfield.UpdateCustomObjectCusotmField] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    relationship: Optional[CustomObjectDefinitionUpdateActionResponseRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationship') }})
    type: Optional[CustomObjectDefinitionUpdateActionResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
