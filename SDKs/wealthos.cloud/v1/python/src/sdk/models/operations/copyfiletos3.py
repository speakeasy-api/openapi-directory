import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CopyFileToS3Headers:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CopyFileToS3Security:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CopyFileToS3Request:
    headers: CopyFileToS3Headers = dataclasses.field()
    security: CopyFileToS3Security = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CopyFileToS3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    copy_file_to_s3_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    copy_file_to_s3_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    copy_file_to_s3_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    copy_file_to_s3_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    copy_file_to_s3_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    copy_file_to_s3_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    copy_file_to_s3_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
