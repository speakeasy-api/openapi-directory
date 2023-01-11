import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import previewresult as shared_previewresult


@dataclass_json
@dataclasses.dataclass
class PostOrderPreviewResponseTypeReasons:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrderPreviewResponseType:
    preview_result: Optional[shared_previewresult.PreviewResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewResult') }})
    process_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processId') }})
    reasons: Optional[list[PostOrderPreviewResponseTypeReasons]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
