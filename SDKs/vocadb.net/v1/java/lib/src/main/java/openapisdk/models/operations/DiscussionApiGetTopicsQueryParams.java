package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiGetTopicsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public DiscussionApiGetTopicsFieldsEnum fields;
    public DiscussionApiGetTopicsQueryParams withFields(DiscussionApiGetTopicsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=folderId")
    public Integer folderId;
    public DiscussionApiGetTopicsQueryParams withFolderId(Integer folderId) {
        this.folderId = folderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public DiscussionApiGetTopicsQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public DiscussionApiGetTopicsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public DiscussionApiGetTopicsSortEnum sort;
    public DiscussionApiGetTopicsQueryParams withSort(DiscussionApiGetTopicsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public DiscussionApiGetTopicsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}