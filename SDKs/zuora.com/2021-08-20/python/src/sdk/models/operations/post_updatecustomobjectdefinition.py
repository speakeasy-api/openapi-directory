import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import migrationupdatecustomobjectdefinitionsrequest as shared_migrationupdatecustomobjectdefinitionsrequest
from ..shared import migrationupdatecustomobjectdefinitionsresponse as shared_migrationupdatecustomobjectdefinitionsresponse


@dataclasses.dataclass
class PostUpdateCustomObjectDefinitionHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUpdateCustomObjectDefinitionRequest:
    headers: PostUpdateCustomObjectDefinitionHeaders = dataclasses.field()
    request: shared_migrationupdatecustomobjectdefinitionsrequest.MigrationUpdateCustomObjectDefinitionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUpdateCustomObjectDefinitionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    migration_update_custom_object_definitions_response: Optional[shared_migrationupdatecustomobjectdefinitionsresponse.MigrationUpdateCustomObjectDefinitionsResponse] = dataclasses.field(default=None)
    
