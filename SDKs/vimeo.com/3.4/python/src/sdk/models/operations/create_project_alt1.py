import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import project as shared_project


@dataclass_json
@dataclasses.dataclass
class CreateProjectAlt1RequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class CreateProjectAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateProjectAlt1Request:
    request: CreateProjectAlt1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProjectAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class CreateProjectAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
