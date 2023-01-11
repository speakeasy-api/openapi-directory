import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPanelistCreatePathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPanelistCreateApplicationJSONPanelists:
    r"""WebinarPanelistCreateApplicationJSONPanelists
    Panelist base object.
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPanelistCreateApplicationJSON:
    r"""WebinarPanelistCreateApplicationJSON
    Webinar panelist.
    """
    
    panelists: Optional[list[WebinarPanelistCreateApplicationJSONPanelists]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPanelistCreateMultipartFormDataPanelists:
    r"""WebinarPanelistCreateMultipartFormDataPanelists
    Panelist base object.
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class WebinarPanelistCreateMultipartFormData1:
    r"""WebinarPanelistCreateMultipartFormData1
    Webinar panelist.
    """
    
    panelists: Optional[list[WebinarPanelistCreateMultipartFormDataPanelists]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'panelists', 'json': True }})
    

@dataclasses.dataclass
class WebinarPanelistCreateRequests:
    object: Optional[WebinarPanelistCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[WebinarPanelistCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarPanelistCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPanelistCreate201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclasses.dataclass
class WebinarPanelistCreateRequest:
    path_params: WebinarPanelistCreatePathParams = dataclasses.field()
    request: WebinarPanelistCreateRequests = dataclasses.field()
    security: WebinarPanelistCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPanelistCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    webinar_panelist_create_201_application_json_object: Optional[WebinarPanelistCreate201ApplicationJSON] = dataclasses.field(default=None)
    
