import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import commonerrorresponse as shared_commonerrorresponse
from ..shared import customobjectdefinition as shared_customobjectdefinition


@dataclasses.dataclass
class GetCustomObjectDefinitionByTypePathParams:
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomObjectDefinitionByTypeHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomObjectDefinitionByTypeRequest:
    headers: GetCustomObjectDefinitionByTypeHeaders = dataclasses.field()
    path_params: GetCustomObjectDefinitionByTypePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomObjectDefinitionByTypeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_error_response: Optional[shared_commonerrorresponse.CommonErrorResponse] = dataclasses.field(default=None)
    custom_object_definition: Optional[shared_customobjectdefinition.CustomObjectDefinition] = dataclasses.field(default=None)
    
