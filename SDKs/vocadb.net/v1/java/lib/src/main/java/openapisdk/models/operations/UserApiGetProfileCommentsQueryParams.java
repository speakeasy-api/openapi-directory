package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetProfileCommentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public UserApiGetProfileCommentsQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetProfileCommentsQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public UserApiGetProfileCommentsQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}