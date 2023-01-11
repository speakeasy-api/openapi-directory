import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getbillingdocumentsresponsetype as shared_getbillingdocumentsresponsetype


@dataclass_json
@dataclasses.dataclass
class BillingDocumentQueryResponseElementType:
    documents: Optional[list[shared_getbillingdocumentsresponsetype.GetBillingDocumentsResponseType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
