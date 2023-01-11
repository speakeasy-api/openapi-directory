package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetSongListsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=childTags")
    public Boolean childTags;
    public UserApiGetSongListsQueryParams withChildTags(Boolean childTags) {
        this.childTags = childTags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public UserApiGetSongListsFieldsEnum fields;
    public UserApiGetSongListsQueryParams withFields(UserApiGetSongListsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public UserApiGetSongListsQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetSongListsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public UserApiGetSongListsNameMatchModeEnum nameMatchMode;
    public UserApiGetSongListsQueryParams withNameMatchMode(UserApiGetSongListsNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public UserApiGetSongListsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public UserApiGetSongListsSortEnum sort;
    public UserApiGetSongListsQueryParams withSort(UserApiGetSongListsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public UserApiGetSongListsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tagId")
    public Integer[] tagId;
    public UserApiGetSongListsQueryParams withTagId(Integer[] tagId) {
        this.tagId = tagId;
        return this;
    }
}