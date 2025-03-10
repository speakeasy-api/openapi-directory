"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class NodeReimageParameterNodeReimageOptionEnum(str, Enum):
    r"""When to reimage the compute node and what to do with currently running tasks. The default value is requeue."""
    REQUEUE = 'requeue'
    TERMINATE = 'terminate'
    TASKCOMPLETION = 'taskcompletion'
    RETAINEDDATA = 'retaineddata'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NodeReimageParameter:
    r"""Parameters for a ComputeNodeOperations.Reimage request."""
    
    node_reimage_option: Optional[NodeReimageParameterNodeReimageOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nodeReimageOption'), 'exclude': lambda f: f is None }})
    r"""When to reimage the compute node and what to do with currently running tasks. The default value is requeue."""  
    