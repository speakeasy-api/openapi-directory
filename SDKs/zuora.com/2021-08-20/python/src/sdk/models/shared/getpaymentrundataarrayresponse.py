import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpaymentrundataelementresponse as shared_getpaymentrundataelementresponse


@dataclass_json
@dataclasses.dataclass
class GetPaymentRunDataArrayResponse:
    data: Optional[list[shared_getpaymentrundataelementresponse.GetPaymentRunDataElementResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
