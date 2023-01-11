import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postcustomobjectdefinitionfielddefinitionrequest as shared_postcustomobjectdefinitionfielddefinitionrequest

class PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum(str, Enum):
    MANY_TO_ONE = "manyToOne"


@dataclass_json
@dataclasses.dataclass
class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate:
    enforce_valid_mapping: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceValidMapping') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints:
    r"""PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints
    Specifies contraints to apply to custom object records.
    
    """
    
    create: Optional[PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCustomObjectDefinitionsRequestDefinitionRelationships:
    fields: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    cardinality: Optional[PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardinality') }})
    record_constraints: Optional[PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordConstraints') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCustomObjectDefinitionsRequestDefinition:
    filterable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterable') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    properties: Optional[dict[str, shared_postcustomobjectdefinitionfielddefinitionrequest.PostCustomObjectDefinitionFieldDefinitionRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    relationships: Optional[list[PostCustomObjectDefinitionsRequestDefinitionRelationships]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    required: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    
