import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TagAPI:
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

    
    def tag_api_delete(self, request: operations.TagAPIDeleteRequest) -> operations.TagAPIDeleteResponse:
        r"""Deletes a tag.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tag_api_delete_comment(self, request: operations.TagAPIDeleteCommentRequest) -> operations.TagAPIDeleteCommentResponse:
        r"""Deletes a comment.
                    Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tag_api_get_by_id(self, request: operations.TagAPIGetByIDRequest) -> operations.TagAPIGetByIDResponse:
        r"""Gets a tag by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out

        return res

    
    def tag_api_get_by_name(self, request: operations.TagAPIGetByNameRequest) -> operations.TagAPIGetByNameResponse:
        r"""DEPRECATED. Gets a tag by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/byName/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetByNameResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out

        return res

    
    def tag_api_get_category_names_list(self, request: operations.TagAPIGetCategoryNamesListRequest) -> operations.TagAPIGetCategoryNamesListResponse:
        r"""Gets a list of tag category names.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags/categoryNames"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetCategoryNamesListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.tag_api_get_category_names_list_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.tag_api_get_category_names_list_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.tag_api_get_category_names_list_200_text_json_strings = out

        return res

    
    def tag_api_get_child_tags(self, request: operations.TagAPIGetChildTagsRequest) -> operations.TagAPIGetChildTagsResponse:
        r"""Gets a list of child tags for a tag.
                    Only direct children will be included.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{tagId}/children", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetChildTagsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[shared.TagForAPIContract]])
                res.tag_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TagForAPIContract]])
                res.tag_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TagForAPIContract]])
                res.tag_for_api_contracts = out

        return res

    
    def tag_api_get_comments(self, request: operations.TagAPIGetCommentsRequest) -> operations.TagAPIGetCommentsResponse:
        r"""Gets a list of comments for a tag.
                    Note: pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{tagId}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def tag_api_get_list(self, request: operations.TagAPIGetListRequest) -> operations.TagAPIGetListResponse:
        r"""Find tags.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultTagForAPIContract])
                res.partial_find_result_tag_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultTagForAPIContract])
                res.partial_find_result_tag_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultTagForAPIContract])
                res.partial_find_result_tag_for_api_contract_ = out

        return res

    
    def tag_api_get_names(self, request: operations.TagAPIGetNamesRequest) -> operations.TagAPIGetNamesResponse:
        r"""Find tag names by a part of name.
                    
                    Matching is done anywhere from the name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.tag_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.tag_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.tag_api_get_names_200_text_json_strings = out

        return res

    
    def tag_api_get_top_tags(self, request: operations.TagAPIGetTopTagsRequest) -> operations.TagAPIGetTopTagsResponse:
        r"""Gets the most common tags in a category.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags/top"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIGetTopTagsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[shared.TagBaseContract]])
                res.tag_base_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TagBaseContract]])
                res.tag_base_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TagBaseContract]])
                res.tag_base_contracts = out

        return res

    
    def tag_api_post_new_tag(self, request: operations.TagAPIPostNewTagRequest) -> operations.TagAPIPostNewTagResponse:
        r"""Creates a new tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIPostNewTagResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.TagBaseContract])
                res.tag_base_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagBaseContract])
                res.tag_base_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagBaseContract])
                res.tag_base_contract = out
        elif r.status_code == 400:
            pass

        return res

    
    def tag_api_post_report(self, request: operations.TagAPIPostReportRequest) -> operations.TagAPIPostReportResponse:
        r"""Creates a new report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/tags/{tagId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TagAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    