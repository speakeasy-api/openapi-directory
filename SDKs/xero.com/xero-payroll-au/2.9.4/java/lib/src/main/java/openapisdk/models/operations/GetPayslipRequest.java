package openapisdk.models.operations;



public class GetPayslipRequest {
    public GetPayslipPathParams pathParams;
    public GetPayslipRequest withPathParams(GetPayslipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPayslipHeaders headers;
    public GetPayslipRequest withHeaders(GetPayslipHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPayslipSecurity security;
    public GetPayslipRequest withSecurity(GetPayslipSecurity security) {
        this.security = security;
        return this;
    }
}