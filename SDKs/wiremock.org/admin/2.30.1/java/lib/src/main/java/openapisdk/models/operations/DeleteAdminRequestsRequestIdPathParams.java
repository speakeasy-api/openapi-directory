package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAdminRequestsRequestIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=requestId")
    public String requestId;
    public DeleteAdminRequestsRequestIdPathParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}