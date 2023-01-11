import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class DeleteCustomObjectDefinitionByTypePathParams:
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCustomObjectDefinitionByTypeHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCustomObjectDefinitionByTypeRequest:
    headers: DeleteCustomObjectDefinitionByTypeHeaders = dataclasses.field()
    path_params: DeleteCustomObjectDefinitionByTypePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCustomObjectDefinitionByTypeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_custom_object_definition_by_type_200_application_json_uri_string: Optional[str] = dataclasses.field(default=None)
    
