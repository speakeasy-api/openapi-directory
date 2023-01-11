import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DiscussionAPI:
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

    
    def discussion_api_delete_comment(self, request: operations.DiscussionAPIDeleteCommentRequest) -> operations.DiscussionAPIDeleteCommentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def discussion_api_delete_topic(self, request: operations.DiscussionAPIDeleteTopicRequest) -> operations.DiscussionAPIDeleteTopicResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/topics/{topicId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIDeleteTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def discussion_api_get_folders(self, request: operations.DiscussionAPIGetFoldersRequest) -> operations.DiscussionAPIGetFoldersResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/discussions/folders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetFoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.DiscussionFolderContract]])
                res.discussion_folder_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.DiscussionFolderContract]])
                res.discussion_folder_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.DiscussionFolderContract]])
                res.discussion_folder_contracts = out

        return res

    
    def discussion_api_get_topic(self, request: operations.DiscussionAPIGetTopicRequest) -> operations.DiscussionAPIGetTopicResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/topics/{topicId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscussionTopicContract])
                res.discussion_topic_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscussionTopicContract])
                res.discussion_topic_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscussionTopicContract])
                res.discussion_topic_contract = out

        return res

    
    def discussion_api_get_topics(self, request: operations.DiscussionAPIGetTopicsRequest) -> operations.DiscussionAPIGetTopicsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/discussions/topics"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultDiscussionTopicContract])
                res.partial_find_result_discussion_topic_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultDiscussionTopicContract])
                res.partial_find_result_discussion_topic_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultDiscussionTopicContract])
                res.partial_find_result_discussion_topic_contract_ = out

        return res

    
    def discussion_api_get_topics_for_folder(self, request: operations.DiscussionAPIGetTopicsForFolderRequest) -> operations.DiscussionAPIGetTopicsForFolderResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/discussions/folders/{folderId}/topics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscussionAPIGetTopicsForFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.DiscussionTopicContract]])
                res.discussion_topic_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.DiscussionTopicContract]])
                res.discussion_topic_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.DiscussionTopicContract]])
                res.discussion_topic_contracts = out

        return res

    