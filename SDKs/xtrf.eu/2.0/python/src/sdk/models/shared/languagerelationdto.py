"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import languagecombinationdto as shared_languagecombinationdto
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LanguageRelationDto:
    
    language_combinations: Optional[list[shared_languagecombinationdto.LanguageCombinationDto]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('languageCombinations'), 'exclude': lambda f: f is None }})  
    languages: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('languages'), 'exclude': lambda f: f is None }})  
    