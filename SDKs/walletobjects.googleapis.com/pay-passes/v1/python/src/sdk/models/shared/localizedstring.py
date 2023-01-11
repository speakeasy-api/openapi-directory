import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import translatedstring as shared_translatedstring


@dataclass_json
@dataclasses.dataclass
class LocalizedString:
    default_value: Optional[shared_translatedstring.TranslatedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    translated_values: Optional[list[shared_translatedstring.TranslatedString]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translatedValues') }})
    
