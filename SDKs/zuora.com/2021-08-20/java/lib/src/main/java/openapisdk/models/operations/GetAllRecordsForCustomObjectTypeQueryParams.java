package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllRecordsForCustomObjectTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetAllRecordsForCustomObjectTypeQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public GetAllRecordsForCustomObjectTypeQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetAllRecordsForCustomObjectTypeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetAllRecordsForCustomObjectTypeQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}