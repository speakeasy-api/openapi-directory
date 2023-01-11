package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSendUserAccessRequestsRequest {
    public PutSendUserAccessRequestsPathParams pathParams;
    public PutSendUserAccessRequestsRequest withPathParams(PutSendUserAccessRequestsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutSendUserAccessRequestsHeaders headers;
    public PutSendUserAccessRequestsRequest withHeaders(PutSendUserAccessRequestsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSendUserAccessRequestType request;
    public PutSendUserAccessRequestsRequest withRequest(openapisdk.models.shared.PutSendUserAccessRequestType request) {
        this.request = request;
        return this;
    }
}