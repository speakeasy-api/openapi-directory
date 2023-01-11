package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntityConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetEntityConnectionsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.GlobalRequestPageSizeEntityConnectionEnum type;
    public GetEntityConnectionsQueryParams withType(openapisdk.models.shared.GlobalRequestPageSizeEntityConnectionEnum type) {
        this.type = type;
        return this;
    }
}