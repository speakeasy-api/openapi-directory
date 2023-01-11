package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllCustomObjectBulkJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetAllCustomObjectBulkJobsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetAllCustomObjectBulkJobsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}