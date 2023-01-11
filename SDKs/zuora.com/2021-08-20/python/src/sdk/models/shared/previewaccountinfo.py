import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import previewcontactinfo as shared_previewcontactinfo
from ..shared import taxinfo as shared_taxinfo


@dataclass_json
@dataclasses.dataclass
class PreviewAccountInfo:
    r"""PreviewAccountInfo
    Information about the account that will own the order.
    
    """
    
    bill_cycle_day: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billCycleDay') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    sold_to_contact: Optional[shared_previewcontactinfo.PreviewContactInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldToContact') }})
    tax_info: Optional[shared_taxinfo.TaxInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxInfo') }})
    
