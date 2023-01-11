package openapisdk.models.operations;



public class CreateBatchPollsRequest {
    public CreateBatchPollsPathParams pathParams;
    public CreateBatchPollsRequest withPathParams(CreateBatchPollsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateBatchPollsRequests request;
    public CreateBatchPollsRequest withRequest(CreateBatchPollsRequests request) {
        this.request = request;
        return this;
    }
}