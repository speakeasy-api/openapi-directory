package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePayslipRequest {
    public UpdatePayslipPathParams pathParams;
    public UpdatePayslipRequest withPathParams(UpdatePayslipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePayslipHeaders headers;
    public UpdatePayslipRequest withHeaders(UpdatePayslipHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayslipLines[] request;
    public UpdatePayslipRequest withRequest(openapisdk.models.shared.PayslipLines[] request) {
        this.request = request;
        return this;
    }
    public UpdatePayslipSecurity security;
    public UpdatePayslipRequest withSecurity(UpdatePayslipSecurity security) {
        this.security = security;
        return this;
    }
}