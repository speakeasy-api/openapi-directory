import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customobjectcustomfielddefinition as shared_customobjectcustomfielddefinition

class CustomObjectDefinitionSchemaRelationshipsCardinalityEnum(str, Enum):
    MANY_TO_ONE = "manyToOne"
    ONE_TO_MANY = "oneToMany"


@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate:
    enforce_valid_mapping: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceValidMapping') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionSchemaRelationshipsRecordConstraints:
    r"""CustomObjectDefinitionSchemaRelationshipsRecordConstraints
    Specifies contraints to apply to custom object records.
    
    """
    
    create: Optional[CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionSchemaRelationships:
    cardinality: Optional[CustomObjectDefinitionSchemaRelationshipsCardinalityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardinality') }})
    fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    record_constraints: Optional[CustomObjectDefinitionSchemaRelationshipsRecordConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordConstraints') }})
    
class CustomObjectDefinitionSchemaTypeEnum(str, Enum):
    OBJECT = "object"


@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinitionSchema:
    r"""CustomObjectDefinitionSchema
    The schema of the custom object definition
    """
    
    filterable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterable') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    properties: Optional[dict[str, shared_customobjectcustomfielddefinition.CustomObjectCustomFieldDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    relationships: Optional[list[CustomObjectDefinitionSchemaRelationships]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    required: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: Optional[CustomObjectDefinitionSchemaTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CustomObjectDefinition:
    created_by_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedById') }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    updated_by_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedById') }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schema: Optional[CustomObjectDefinitionSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
