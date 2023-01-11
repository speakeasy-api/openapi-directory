package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLeaveApplicationRequest {
    public CreateLeaveApplicationHeaders headers;
    public CreateLeaveApplicationRequest withHeaders(CreateLeaveApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LeaveApplicationInput[] request;
    public CreateLeaveApplicationRequest withRequest(openapisdk.models.shared.LeaveApplicationInput[] request) {
        this.request = request;
        return this;
    }
    public CreateLeaveApplicationSecurity security;
    public CreateLeaveApplicationRequest withSecurity(CreateLeaveApplicationSecurity security) {
        this.security = security;
        return this;
    }
}