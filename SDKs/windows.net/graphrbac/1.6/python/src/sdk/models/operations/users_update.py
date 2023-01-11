import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import grapherror as shared_grapherror


@dataclasses.dataclass
class UsersUpdatePathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    upn_or_object_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'upnOrObjectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersUpdateQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersUpdateRequests:
    user_update_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_update_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UsersUpdateRequest:
    path_params: UsersUpdatePathParams = dataclasses.field()
    query_params: UsersUpdateQueryParams = dataclasses.field()
    request: UsersUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class UsersUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_error: Optional[shared_grapherror.GraphError] = dataclasses.field(default=None)
    
