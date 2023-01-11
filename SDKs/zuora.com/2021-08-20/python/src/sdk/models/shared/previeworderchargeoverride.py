import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chargemodeldataoverride as shared_chargemodeldataoverride
from ..shared import discountpricingoverride as shared_discountpricingoverride
from ..shared import onetimeflatfeepricingoverride as shared_onetimeflatfeepricingoverride
from ..shared import onetimeperunitpricingoverride as shared_onetimeperunitpricingoverride
from ..shared import onetimetieredpricingoverride as shared_onetimetieredpricingoverride
from ..shared import onetimevolumepricingoverride as shared_onetimevolumepricingoverride
from ..shared import recurringflatfeepricingoverride as shared_recurringflatfeepricingoverride
from ..shared import recurringperunitpricingoverride as shared_recurringperunitpricingoverride
from ..shared import recurringtieredpricingoverride as shared_recurringtieredpricingoverride
from ..shared import recurringvolumepricingoverride as shared_recurringvolumepricingoverride
from ..shared import usageflatfeepricingoverride as shared_usageflatfeepricingoverride
from ..shared import usageoveragepricingoverride as shared_usageoveragepricingoverride
from ..shared import usageperunitpricingoverride as shared_usageperunitpricingoverride
from ..shared import usagetieredpricingoverride as shared_usagetieredpricingoverride
from ..shared import usagetieredwithoveragepricingoverride as shared_usagetieredwithoveragepricingoverride
from ..shared import usagevolumepricingoverride as shared_usagevolumepricingoverride
from ..shared import endconditions as shared_endconditions
from ..shared import previewordertriggerparams as shared_previewordertriggerparams

class PreviewOrderChargeOverrideBillingBillCycleTypeEnum(str, Enum):
    DEFAULT_FROM_CUSTOMER = "DefaultFromCustomer"
    SPECIFIC_DAYOF_MONTH = "SpecificDayofMonth"
    SUBSCRIPTION_START_DAY = "SubscriptionStartDay"
    CHARGE_TRIGGER_DAY = "ChargeTriggerDay"
    SPECIFIC_DAYOF_WEEK = "SpecificDayofWeek"

class PreviewOrderChargeOverrideBillingBillingPeriodEnum(str, Enum):
    MONTH = "Month"
    QUARTER = "Quarter"
    SEMI_ANNUAL = "Semi_Annual"
    ANNUAL = "Annual"
    EIGHTEEN_MONTHS = "Eighteen_Months"
    TWO_YEARS = "Two_Years"
    THREE_YEARS = "Three_Years"
    FIVE_YEARS = "Five_Years"
    SPECIFIC_MONTHS = "Specific_Months"
    SUBSCRIPTION_TERM = "Subscription_Term"
    WEEK = "Week"
    SPECIFIC_WEEKS = "Specific_Weeks"

class PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum(str, Enum):
    ALIGN_TO_CHARGE = "AlignToCharge"
    ALIGN_TO_SUBSCRIPTION_START = "AlignToSubscriptionStart"
    ALIGN_TO_TERM_START = "AlignToTermStart"

class PreviewOrderChargeOverrideBillingBillingTimingEnum(str, Enum):
    IN_ADVANCE = "IN_ADVANCE"
    IN_ARREARS = "IN_ARREARS"

class PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum(str, Enum):
    SUNDAY = "Sunday"
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"


@dataclass_json
@dataclasses.dataclass
class PreviewOrderChargeOverrideBilling:
    r"""PreviewOrderChargeOverrideBilling
    Billing information about the charge.
    
    """
    
    bill_cycle_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billCycleDay') }})
    bill_cycle_type: Optional[PreviewOrderChargeOverrideBillingBillCycleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billCycleType') }})
    billing_period: Optional[PreviewOrderChargeOverrideBillingBillingPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriod') }})
    billing_period_alignment: Optional[PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodAlignment') }})
    billing_timing: Optional[PreviewOrderChargeOverrideBillingBillingTimingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingTiming') }})
    specific_billing_period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificBillingPeriod') }})
    weekly_bill_cycle_day: Optional[PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyBillCycleDay') }})
    

@dataclass_json
@dataclasses.dataclass
class PreviewOrderChargeOverridePricing:
    r"""PreviewOrderChargeOverridePricing
    Pricing information about the charge.
    
    """
    
    charge_model_data: Optional[shared_chargemodeldataoverride.ChargeModelDataOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeModelData') }})
    discount: Optional[shared_discountpricingoverride.DiscountPricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    one_time_flat_fee: Optional[shared_onetimeflatfeepricingoverride.OneTimeFlatFeePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeFlatFee') }})
    one_time_per_unit: Optional[shared_onetimeperunitpricingoverride.OneTimePerUnitPricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimePerUnit') }})
    one_time_tiered: Optional[shared_onetimetieredpricingoverride.OneTimeTieredPricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeTiered') }})
    one_time_volume: Optional[shared_onetimevolumepricingoverride.OneTimeVolumePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeVolume') }})
    recurring_flat_fee: Optional[shared_recurringflatfeepricingoverride.RecurringFlatFeePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringFlatFee') }})
    recurring_per_unit: Optional[shared_recurringperunitpricingoverride.RecurringPerUnitPricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringPerUnit') }})
    recurring_tiered: Optional[shared_recurringtieredpricingoverride.RecurringTieredPricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringTiered') }})
    recurring_volume: Optional[shared_recurringvolumepricingoverride.RecurringVolumePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringVolume') }})
    usage_flat_fee: Optional[shared_usageflatfeepricingoverride.UsageFlatFeePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageFlatFee') }})
    usage_overage: Optional[shared_usageoveragepricingoverride.UsageOveragePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageOverage') }})
    usage_per_unit: Optional[shared_usageperunitpricingoverride.UsagePerUnitPricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usagePerUnit') }})
    usage_tiered: Optional[shared_usagetieredpricingoverride.UsageTieredPricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTiered') }})
    usage_tiered_with_overage: Optional[shared_usagetieredwithoveragepricingoverride.UsageTieredWithOveragePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTieredWithOverage') }})
    usage_volume: Optional[shared_usagevolumepricingoverride.UsageVolumePricingOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageVolume') }})
    
class PreviewOrderChargeOverrideRevRecTriggerConditionEnum(str, Enum):
    CONTRACT_EFFECTIVE_DATE = "Contract Effective Date"
    SERVICE_ACTIVATION_DATE = "Service Activation Date"
    CUSTOMER_ACCEPTANCE_DATE = "Customer Acceptance Date"

class PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum(str, Enum):
    RECOGNIZE_UPON_INVOICING = "Recognize upon invoicing"
    RECOGNIZE_DAILY_OVER_TIME = "Recognize daily over time"


@dataclass_json
@dataclasses.dataclass
class PreviewOrderChargeOverride:
    r"""PreviewOrderChargeOverride
    Charge associated with a rate plan.
    
    """
    
    product_rate_plan_charge_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRatePlanChargeId') }})
    billing: Optional[PreviewOrderChargeOverrideBilling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    charge_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNumber') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[shared_endconditions.EndConditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    pricing: Optional[PreviewOrderChargeOverridePricing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing') }})
    rev_rec_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revRecCode') }})
    rev_rec_trigger_condition: Optional[PreviewOrderChargeOverrideRevRecTriggerConditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revRecTriggerCondition') }})
    revenue_recognition_rule_name: Optional[PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenueRecognitionRuleName') }})
    start_date: Optional[shared_previewordertriggerparams.PreviewOrderTriggerParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    unique_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueToken') }})
    
