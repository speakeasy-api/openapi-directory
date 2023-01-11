import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateSiteDetailsPathParams:
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'siteId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSiteDetailsApplicationJSON:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_code') }})
    

@dataclasses.dataclass
class UpdateSiteDetailsMultipartFormData:
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    site_code: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_code' }})
    

@dataclasses.dataclass
class UpdateSiteDetailsRequests:
    object: Optional[UpdateSiteDetailsApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateSiteDetailsMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateSiteDetailsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateSiteDetailsRequest:
    path_params: UpdateSiteDetailsPathParams = dataclasses.field()
    security: UpdateSiteDetailsSecurity = dataclasses.field()
    request: Optional[UpdateSiteDetailsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSiteDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_site_details_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
