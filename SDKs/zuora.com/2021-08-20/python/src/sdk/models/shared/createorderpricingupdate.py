import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargemodeldataoverride as shared_chargemodeldataoverride
from ..shared import discountpricingupdate as shared_discountpricingupdate
from ..shared import recurringflatfeepricingupdate as shared_recurringflatfeepricingupdate
from ..shared import recurringperunitpricingupdate as shared_recurringperunitpricingupdate
from ..shared import recurringtieredpricingupdate as shared_recurringtieredpricingupdate
from ..shared import recurringvolumepricingupdate as shared_recurringvolumepricingupdate
from ..shared import usageflatfeepricingupdate as shared_usageflatfeepricingupdate
from ..shared import usageoveragepricingupdate as shared_usageoveragepricingupdate
from ..shared import usageperunitpricingupdate as shared_usageperunitpricingupdate
from ..shared import usagetieredpricingupdate as shared_usagetieredpricingupdate
from ..shared import usagetieredwithoveragepricingupdate as shared_usagetieredwithoveragepricingupdate
from ..shared import usagevolumepricingupdate as shared_usagevolumepricingupdate


@dataclass_json
@dataclasses.dataclass
class CreateOrderPricingUpdate:
    charge_model_data: Optional[shared_chargemodeldataoverride.ChargeModelDataOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeModelData') }})
    discount: Optional[shared_discountpricingupdate.DiscountPricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    recurring_flat_fee: Optional[shared_recurringflatfeepricingupdate.RecurringFlatFeePricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringFlatFee') }})
    recurring_per_unit: Optional[shared_recurringperunitpricingupdate.RecurringPerUnitPricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringPerUnit') }})
    recurring_tiered: Optional[shared_recurringtieredpricingupdate.RecurringTieredPricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringTiered') }})
    recurring_volume: Optional[shared_recurringvolumepricingupdate.RecurringVolumePricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringVolume') }})
    usage_flat_fee: Optional[shared_usageflatfeepricingupdate.UsageFlatFeePricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageFlatFee') }})
    usage_overage: Optional[shared_usageoveragepricingupdate.UsageOveragePricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageOverage') }})
    usage_per_unit: Optional[shared_usageperunitpricingupdate.UsagePerUnitPricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usagePerUnit') }})
    usage_tiered: Optional[shared_usagetieredpricingupdate.UsageTieredPricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTiered') }})
    usage_tiered_with_overage: Optional[shared_usagetieredwithoveragepricingupdate.UsageTieredWithOveragePricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTieredWithOverage') }})
    usage_volume: Optional[shared_usagevolumepricingupdate.UsageVolumePricingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageVolume') }})
    
