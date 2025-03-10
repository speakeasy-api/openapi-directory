"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UsageStatistics:
    r"""Statistics related to pool usage information."""
    
    dedicated_core_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dedicatedCoreTime') }})
    r"""Gets or sets the aggregated wall-clock time of the dedicated compute node cores being part of the pool."""  
    last_update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""Gets or sets the time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime."""  
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""Gets or sets the start time of the time range covered by the statistics."""  
    