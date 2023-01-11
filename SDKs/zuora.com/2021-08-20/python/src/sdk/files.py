import requests
from sdk.models import operations
from . import utils

class Files:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_files(self, request: operations.GetFilesRequest) -> operations.GetFilesResponse:
        r"""Retrieve a file
        Retrieve files such as export results, invoices, and accounting period reports.
        
        The response content type depends on the type of file that you retrieve.
        For example, if you retrieve an invoice PDF, the value of the `Content-Type`
        header in the response is `application/pdf;charset=UTF-8`.
        
        Other content types include:
        
        - `text/csv` for CSV files
        - `application/msword` for Microsoft Word files
        - `application/vnd.ms-excel` and `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
          for Microsoft Excel files (*.xls* and *.xlsx* respectively)
        - `application/zip` and `application/x-gzip` for ZIP and Gzip files respectively
        - `text/html` for HTML files
        - `text/plain` for text files
        
        The response always contains character encoding information in the `Content-Type` header.
        For example, `Content-Type: application/zip;charset=UTF-8`.
        
        **Note:** The maximum file size is 2,047 MB. If you have a data request that exceeds this limit, Zuora returns the following 403 response: `<security:max-object-size>2047MB</security:max-object-size>`. Submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a> to determine if large file optimization is an option for you.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/files/{file-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    