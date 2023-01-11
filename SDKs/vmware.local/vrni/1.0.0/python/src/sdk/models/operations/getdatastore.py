import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import datastore as shared_datastore


@dataclasses.dataclass
class GetDatastorePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDatastoreQueryParams:
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDatastoreSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDatastoreRequest:
    path_params: GetDatastorePathParams = dataclasses.field()
    query_params: GetDatastoreQueryParams = dataclasses.field()
    security: GetDatastoreSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDatastoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    datastore: Optional[shared_datastore.Datastore] = dataclasses.field(default=None)
    
