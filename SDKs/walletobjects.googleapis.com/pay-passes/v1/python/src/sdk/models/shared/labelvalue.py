import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstring as shared_localizedstring


@dataclass_json
@dataclasses.dataclass
class LabelValue:
    r"""LabelValue
    A pair of text strings to be displayed in the details view. Note we no longer display LabelValue/LabelValueRow as a table, instead a list of items.
    """
    
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    localized_label: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedLabel') }})
    localized_value: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedValue') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
