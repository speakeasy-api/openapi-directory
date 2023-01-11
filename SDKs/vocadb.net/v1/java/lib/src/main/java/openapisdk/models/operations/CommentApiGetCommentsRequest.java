package openapisdk.models.operations;



public class CommentApiGetCommentsRequest {
    public CommentApiGetCommentsPathParams pathParams;
    public CommentApiGetCommentsRequest withPathParams(CommentApiGetCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CommentApiGetCommentsQueryParams queryParams;
    public CommentApiGetCommentsRequest withQueryParams(CommentApiGetCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}