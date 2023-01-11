import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PreviewOptionsPreviewThruTypeEnum(str, Enum):
    SPECIFIC_DATE = "SpecificDate"
    TERM_END = "TermEnd"
    NUMBER_OF_PERIODS = "NumberOfPeriods"

class PreviewOptionsPreviewTypesEnum(str, Enum):
    CHARGE_METRICS = "ChargeMetrics"
    BILLING_DOCS = "BillingDocs"
    ORDER_DELTA_METRICS = "OrderDeltaMetrics"
    ORDER_METRICS = "OrderMetrics"
    RAMP_METRICS = "RampMetrics"
    RAMP_DELTA_METRICS = "RampDeltaMetrics"


@dataclass_json
@dataclasses.dataclass
class PreviewOptions:
    preview_number_of_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewNumberOfPeriods') }})
    preview_thru_type: Optional[PreviewOptionsPreviewThruTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewThruType') }})
    preview_types: Optional[list[PreviewOptionsPreviewTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewTypes') }})
    specific_preview_thru_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificPreviewThruDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
