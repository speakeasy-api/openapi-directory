import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getattachmentresponsewithoutsuccesstype as shared_getattachmentresponsewithoutsuccesstype


@dataclass_json
@dataclasses.dataclass
class GetAttachmentsResponseType:
    attachments: Optional[list[shared_getattachmentresponsewithoutsuccesstype.GetAttachmentResponseWithoutSuccessType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
