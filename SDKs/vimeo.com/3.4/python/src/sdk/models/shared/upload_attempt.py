import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import video as shared_video
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class UploadAttempt:
    ticket_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticket_id') }})
    upload_link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload_link') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: shared_user.User = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    clip: Optional[shared_video.Video] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clip') }})
    complete_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete_uri') }})
    form: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    
