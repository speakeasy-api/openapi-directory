package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdminRequestsRequestIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=requestId")
    public String requestId;
    public GetAdminRequestsRequestIdPathParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}