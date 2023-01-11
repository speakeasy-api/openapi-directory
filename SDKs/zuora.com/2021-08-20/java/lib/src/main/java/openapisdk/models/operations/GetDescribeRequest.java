package openapisdk.models.operations;



public class GetDescribeRequest {
    public GetDescribePathParams pathParams;
    public GetDescribeRequest withPathParams(GetDescribePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDescribeHeaders headers;
    public GetDescribeRequest withHeaders(GetDescribeHeaders headers) {
        this.headers = headers;
        return this;
    }
}