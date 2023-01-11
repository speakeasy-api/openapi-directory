import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getapaymentgatwayresponse as shared_getapaymentgatwayresponse


@dataclass_json
@dataclasses.dataclass
class GetPaymentGatwaysResponse:
    paymentgateways: Optional[list[shared_getapaymentgatwayresponse.GetaPaymentGatwayResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentgateways') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
