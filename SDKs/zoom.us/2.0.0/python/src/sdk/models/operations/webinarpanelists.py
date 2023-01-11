import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarPanelistsPathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarPanelistsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPanelistsPanelistListPanelists:
    r"""WebinarPanelistsPanelistListPanelists
    Panelist base object.
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    join_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_url') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarPanelistsPanelistList:
    r"""WebinarPanelistsPanelistList
    List of panelists.
    """
    
    panelists: Optional[list[WebinarPanelistsPanelistListPanelists]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class WebinarPanelistsRequest:
    path_params: WebinarPanelistsPathParams = dataclasses.field()
    security: WebinarPanelistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarPanelistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    panelist_list: Optional[WebinarPanelistsPanelistList] = dataclasses.field(default=None)
    
