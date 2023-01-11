import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import providersdataset as shared_providersdataset
from ..shared import field as shared_field
from ..shared import provideraccountpreferences as shared_provideraccountpreferences

class ProviderAccountRequestAggregationSourceEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"

class ProviderAccountRequestDatasetNameEnum(str, Enum):
    BASIC_AGG_DATA = "BASIC_AGG_DATA"
    ADVANCE_AGG_DATA = "ADVANCE_AGG_DATA"
    ACCT_PROFILE = "ACCT_PROFILE"
    DOCUMENT = "DOCUMENT"


@dataclass_json
@dataclasses.dataclass
class ProviderAccountRequestInput:
    field: list[shared_field.FieldInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    aggregation_source: Optional[ProviderAccountRequestAggregationSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationSource') }})
    consent_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    dataset: Optional[list[shared_providersdataset.ProvidersDatasetInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    dataset_name: Optional[list[ProviderAccountRequestDatasetNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetName') }})
    preferences: Optional[shared_provideraccountpreferences.ProviderAccountPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    
