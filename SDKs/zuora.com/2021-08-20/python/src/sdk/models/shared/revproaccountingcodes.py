import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RevproAccountingCodes:
    adjustment_liability_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustmentLiabilityAccount') }})
    adjustment_revenue_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustmentRevenueAccount') }})
    contract_asset_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractAssetAccount') }})
    contract_liability_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractLiabilityAccount') }})
    product_rate_plan_charge_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanChargeId') }})
    recognized_revenue_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recognizedRevenueAccount') }})
    unbilled_receivables_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unbilledReceivablesAccount') }})
    
