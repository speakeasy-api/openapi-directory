package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdminRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetAdminRequestsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public GetAdminRequestsQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}