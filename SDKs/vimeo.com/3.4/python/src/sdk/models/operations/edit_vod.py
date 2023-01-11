import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_page as shared_on_demand_page


@dataclasses.dataclass
class EditVodPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EditVodRequestBodyPreorder:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    publish_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publish_time') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVodRequestBodyPublish:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass_json
@dataclasses.dataclass
class EditVodRequestBody:
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    preorder: Optional[EditVodRequestBodyPreorder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preorder') }})
    publish: Optional[EditVodRequestBodyPublish] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publish') }})
    publish_when_ready: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publish_when_ready') }})
    

@dataclasses.dataclass
class EditVodSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditVodRequest:
    path_params: EditVodPathParams = dataclasses.field()
    security: EditVodSecurity = dataclasses.field()
    request: Optional[EditVodRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.page+json' }})
    

@dataclasses.dataclass
class EditVodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_page: Optional[shared_on_demand_page.OnDemandPage] = dataclasses.field(default=None)
    
