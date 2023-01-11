import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import global_header_authorization_oauth_enum as shared_global_header_authorization_oauth_enum
from ..shared import getallcustomobjectdefinitionsinnamespaceresponse as shared_getallcustomobjectdefinitionsinnamespaceresponse


@dataclasses.dataclass
class GetAllCustomObjectDefinitionsInNamespaceQueryParams:
    select: Optional[shared_global_header_authorization_oauth_enum.GlobalHeaderAuthorizationOAuthEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllCustomObjectDefinitionsInNamespaceHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    zuora_version: Optional[date] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllCustomObjectDefinitionsInNamespaceRequest:
    headers: GetAllCustomObjectDefinitionsInNamespaceHeaders = dataclasses.field()
    query_params: GetAllCustomObjectDefinitionsInNamespaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllCustomObjectDefinitionsInNamespaceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_custom_object_definitions_in_namespace_response: Optional[shared_getallcustomobjectdefinitionsinnamespaceresponse.GetAllCustomObjectDefinitionsInNamespaceResponse] = dataclasses.field(default=None)
    
