package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLeaveApplicationRequest {
    public UpdateLeaveApplicationPathParams pathParams;
    public UpdateLeaveApplicationRequest withPathParams(UpdateLeaveApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateLeaveApplicationHeaders headers;
    public UpdateLeaveApplicationRequest withHeaders(UpdateLeaveApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LeaveApplicationInput[] request;
    public UpdateLeaveApplicationRequest withRequest(openapisdk.models.shared.LeaveApplicationInput[] request) {
        this.request = request;
        return this;
    }
    public UpdateLeaveApplicationSecurity security;
    public UpdateLeaveApplicationRequest withSecurity(UpdateLeaveApplicationSecurity security) {
        this.security = security;
        return this;
    }
}