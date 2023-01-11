import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invoicefile as shared_invoicefile


@dataclass_json
@dataclasses.dataclass
class GetInvoiceFilesResponse:
    invoice_files: Optional[list[shared_invoicefile.InvoiceFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceFiles') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
