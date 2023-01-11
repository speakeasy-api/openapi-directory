import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetDocumentPropertiesResponseTypeDocumentTypeEnum(str, Enum):
    INVOICE = "Invoice"
    CREDIT_MEMO = "CreditMemo"
    DEBIT_MEMO = "DebitMemo"


@dataclass_json
@dataclasses.dataclass
class GetDocumentPropertiesResponseType:
    custom_file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFileName') }})
    document_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentId') }})
    document_type: Optional[GetDocumentPropertiesResponseTypeDocumentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentType') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
