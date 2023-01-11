package openapisdk.models.operations;



public class AssignSipTrunkNumbersRequest {
    public AssignSipTrunkNumbersPathParams pathParams;
    public AssignSipTrunkNumbersRequest withPathParams(AssignSipTrunkNumbersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssignSipTrunkNumbersRequests request;
    public AssignSipTrunkNumbersRequest withRequest(AssignSipTrunkNumbersRequests request) {
        this.request = request;
        return this;
    }
    public AssignSipTrunkNumbersSecurity security;
    public AssignSipTrunkNumbersRequest withSecurity(AssignSipTrunkNumbersSecurity security) {
        this.security = security;
        return this;
    }
}