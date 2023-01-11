import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import document as shared_document


@dataclass_json
@dataclasses.dataclass
class DocumentResponse:
    document: Optional[list[shared_document.Document]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    
