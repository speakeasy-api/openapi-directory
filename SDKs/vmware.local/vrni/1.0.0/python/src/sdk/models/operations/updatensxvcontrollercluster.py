import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import nsxcontrollerdatacollection as shared_nsxcontrollerdatacollection
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class UpdateNsxvControllerClusterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateNsxvControllerClusterSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateNsxvControllerClusterRequest:
    path_params: UpdateNsxvControllerClusterPathParams = dataclasses.field()
    security: UpdateNsxvControllerClusterSecurity = dataclasses.field()
    request: Optional[shared_nsxcontrollerdatacollection.NsxControllerDataCollection] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNsxvControllerClusterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    nsx_controller_data_collection: Optional[shared_nsxcontrollerdatacollection.NsxControllerDataCollection] = dataclasses.field(default=None)
    
