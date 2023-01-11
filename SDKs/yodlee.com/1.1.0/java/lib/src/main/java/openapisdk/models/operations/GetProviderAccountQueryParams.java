package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProviderAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetProviderAccountQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestId")
    public String requestId;
    public GetProviderAccountQueryParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}