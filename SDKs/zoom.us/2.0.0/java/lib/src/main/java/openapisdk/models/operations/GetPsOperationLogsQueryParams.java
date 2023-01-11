package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPsOperationLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category_type")
    public String categoryType;
    public GetPsOperationLogsQueryParams withCategoryType(String categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetPsOperationLogsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public GetPsOperationLogsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetPsOperationLogsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public GetPsOperationLogsQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}