import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CommentAPI:
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

    
    def comment_api_delete_comment(self, request: operations.CommentAPIDeleteCommentRequest) -> operations.CommentAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/comments/{entryType}-comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CommentAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def comment_api_get_comments(self, request: operations.CommentAPIGetCommentsRequest) -> operations.CommentAPIGetCommentsResponse:
        r"""Gets a list of comments for an entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/comments/{entryType}-comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CommentAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out

        return res

    