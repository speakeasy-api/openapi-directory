import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class CustomObjectRecords:
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

    
    def delete_custom_object_record_by_id(self, request: operations.DeleteCustomObjectRecordByIDRequest) -> operations.DeleteCustomObjectRecordByIDResponse:
        r"""Delete a custom object record
        Deletes a custom object record of the given type and ID.
        
        Note that 200 response will be returned under either of the following conditions:
        * The record is identified and successfully deleted
        * The record could not be found
        
        Note that the record is deleted immediately and, therefore, will not be retained upon successful deletion.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/records/default/{object}/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomObjectRecordByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                res.delete_custom_object_record_by_id_200_application_json_uri_string = r.content

        return res

    
    def get_all_records_for_custom_object_type(self, request: operations.GetAllRecordsForCustomObjectTypeRequest) -> operations.GetAllRecordsForCustomObjectTypeResponse:
        r"""List records for a custom object
        Lists all object records of the given type. You can also use the `q` query parameter to filter the output records.
        
        ## Limitations 
        
        This call has the following limitations:
        * When a record is created, there will be a delay before it is available for search. For example, if you create 5 records and perform a query that these 5 records satisfy the query conditions, there will be a delay between when the 5 records are created, and when all the 5 records can be returned in the query result.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/records/default/{object}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllRecordsForCustomObjectTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryCustomObjectRecordsResponse])
                res.query_custom_object_records_response = out

        return res

    
    def get_custom_object_record_by_id(self, request: operations.GetCustomObjectRecordByIDRequest) -> operations.GetCustomObjectRecordByIDResponse:
        r"""Retrieve a custom object record
        Retrieves a record of a given type by ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/records/default/{object}/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomObjectRecordByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.custom_object_record_with_all_fields = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    
    def post_custom_object_records(self, request: operations.PostCustomObjectRecordsRequest) -> operations.PostCustomObjectRecordsResponse:
        r"""Create custom object records
        Creates custom object records with the given type. 
        
        Upon creating records of a custom object type, the 200 response contains a list of records that have been successfully processed and stored.
        
        
        ## Limitations 
        
        This call has the following limitations:
        * The maximum number of records that you can create by one call is 1,000.
        * The storage of empty strings in records is not supported.
        * Null values must be formatted as the following example: 
          ```
          {
            \"records\": [
              {
                \"fieldName__c\": null
              }
            ]
          }
          ```
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/records/default/{object}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomObjectRecordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostCustomObjectRecordsResponse])
                res.post_custom_object_records_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectRecordsErrorResponse])
                res.custom_object_records_error_response = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse401Record])
                res.error_response401_record = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectRecordsThrottledResponse])
                res.custom_object_records_throttled_response = out

        return res

    
    def post_custom_object_records_batch_update_or_delete(self, request: operations.PostCustomObjectRecordsBatchUpdateOrDeleteRequest) -> operations.PostCustomObjectRecordsBatchUpdateOrDeleteResponse:
        r"""Update or delete custom object records
        Makes a batch update or delete of custom object records.
        ## Limitations 
        
        This call has the following limitations:
        * The maximum number of records that you can update by one call is 1,000.
        * The maximum number of records that you can delete by one call is 1,000.
        * The storage of empty strings in records is not supported.
        * Null values must be formatted as the following example: 
          ```
          {
              \"action\": {
                  \"type\": \"update\",
                  \"records\": {
                      \"64edb2a5-2796-4e95-9559-846f8636a01b\": {
                          \"fieldName__c\": null
                    }
                  }
              }
          }
          ```
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/batch/default/{object}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomObjectRecordsBatchUpdateOrDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse])
                res.custom_object_records_batch_update_partial_success_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectRecordsErrorResponse])
                res.custom_object_records_error_response = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse401Record])
                res.error_response401_record = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomObjectRecordsThrottledResponse])
                res.custom_object_records_throttled_response = out

        return res

    
    def put_custom_object_record(self, request: operations.PutCustomObjectRecordRequest) -> operations.PutCustomObjectRecordResponse:
        r"""Update a custom object record
        Updates a record of the given type and ID.
        
        ## Limitations 
        
        * The storage of empty strings in records is not supported.
        * Null values must be formatted as the following example: 
          ```
          {
            \"records\": [
              {
                \"fieldName__c\": null
              }
            ]
          }
          ```
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/records/default/{object}/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomObjectRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.custom_object_record_with_all_fields = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    
    def patch_partial_update_custom_object_record(self, request: operations.PatchPartialUpdateCustomObjectRecordRequest) -> operations.PatchPartialUpdateCustomObjectRecordResponse:
        r"""Partially update a custom object record
        Updates one or many fields of a custom object record. Patch update uses JSON Merge Patch as specified in [RFC 7386](https://tools.ietf.org/html/rfc7386).
        
        ## Limitations 
        
        * The storage of empty strings in records is not supported.
        * Null values must be formatted as the following example: 
          ```
          {
            \"records\": [
              {
                \"fieldName__c\": null
              }
            ]
          }
          ```
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/objects/records/default/{object}/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchPartialUpdateCustomObjectRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.custom_object_record_with_all_fields = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonErrorResponse])
                res.common_error_response = out

        return res

    