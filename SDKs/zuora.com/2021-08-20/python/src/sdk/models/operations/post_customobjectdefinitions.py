import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import postcustomobjectdefinitionsrequest as shared_postcustomobjectdefinitionsrequest
from ..shared import commonerrorresponse as shared_commonerrorresponse
from ..shared import getallcustomobjectdefinitionsinnamespaceresponse as shared_getallcustomobjectdefinitionsinnamespaceresponse


@dataclasses.dataclass
class PostCustomObjectDefinitionsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCustomObjectDefinitionsRequest:
    headers: PostCustomObjectDefinitionsHeaders = dataclasses.field()
    request: shared_postcustomobjectdefinitionsrequest.PostCustomObjectDefinitionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCustomObjectDefinitionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    common_error_response: Optional[shared_commonerrorresponse.CommonErrorResponse] = dataclasses.field(default=None)
    get_all_custom_object_definitions_in_namespace_response: Optional[shared_getallcustomobjectdefinitionsinnamespaceresponse.GetAllCustomObjectDefinitionsInNamespaceResponse] = dataclasses.field(default=None)
    
