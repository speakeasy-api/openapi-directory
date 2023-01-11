import dataclasses
from typing import Any,Optional
from ..shared import directoryobjectlistresult as shared_directoryobjectlistresult


@dataclasses.dataclass
class ObjectsGetObjectsByObjectIdsPathParams:
    tenant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ObjectsGetObjectsByObjectIdsQueryParams:
    api_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ObjectsGetObjectsByObjectIdsRequests:
    get_objects_parameters: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    get_objects_parameters1: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class ObjectsGetObjectsByObjectIdsRequest:
    path_params: ObjectsGetObjectsByObjectIdsPathParams = dataclasses.field()
    query_params: ObjectsGetObjectsByObjectIdsQueryParams = dataclasses.field()
    request: ObjectsGetObjectsByObjectIdsRequests = dataclasses.field()
    

@dataclasses.dataclass
class ObjectsGetObjectsByObjectIdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    directory_object_list_result: Optional[shared_directoryobjectlistresult.DirectoryObjectListResult] = dataclasses.field(default=None)
    
