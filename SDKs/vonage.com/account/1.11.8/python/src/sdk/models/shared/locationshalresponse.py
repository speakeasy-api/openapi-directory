"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import links as shared_links
from ..shared import locationsembeddedobject as shared_locationsembeddedobject
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LocationsHalResponse:
    r"""Success"""
    
    embedded: Optional[shared_locationsembeddedobject.LocationsEmbeddedObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('_embedded'), 'exclude': lambda f: f is None }})
    r"""Collection of location objects"""  
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('_links'), 'exclude': lambda f: f is None }})  
    page: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page'), 'exclude': lambda f: f is None }})  
    page_size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page_size'), 'exclude': lambda f: f is None }})  
    total_items: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_items'), 'exclude': lambda f: f is None }})  
    total_pages: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_pages'), 'exclude': lambda f: f is None }})  
    