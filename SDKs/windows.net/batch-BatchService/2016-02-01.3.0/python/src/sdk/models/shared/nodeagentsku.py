"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import imagereference as shared_imagereference
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class NodeAgentSkuOsTypeEnum(str, Enum):
    r"""The type of operating system compatible with the node agent SKU."""
    LINUX = 'linux'
    WINDOWS = 'windows'
    UNMAPPED = 'unmapped'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NodeAgentSku:
    r"""A node agent SKU supported by the Batch service. The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems."""
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""The node agent SKU id."""  
    os_type: Optional[NodeAgentSkuOsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('osType'), 'exclude': lambda f: f is None }})
    r"""The type of operating system compatible with the node agent SKU."""  
    verified_image_references: Optional[list[shared_imagereference.ImageReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('verifiedImageReferences'), 'exclude': lambda f: f is None }})
    r"""The list of images verified to be compatible with this node agent SKU. This collection is not exhaustive (the node agent may be compatible with other images)."""  
    