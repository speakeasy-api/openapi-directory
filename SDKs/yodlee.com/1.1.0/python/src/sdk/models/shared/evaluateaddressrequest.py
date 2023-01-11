import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evaluateaccountaddress as shared_evaluateaccountaddress


@dataclass_json
@dataclasses.dataclass
class EvaluateAddressRequest:
    address: shared_evaluateaccountaddress.EvaluateAccountAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    
