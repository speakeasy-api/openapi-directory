import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAdminSettingsRequestBody:
    fixed_delay: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedDelay') }})
    

@dataclasses.dataclass
class PostAdminSettingsRequest:
    request: PostAdminSettingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAdminSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
