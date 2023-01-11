package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCatalogRequest {
    public PostCatalogPathParams pathParams;
    public PostCatalogRequest withPathParams(PostCatalogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCatalogHeaders headers;
    public PostCatalogRequest withHeaders(PostCatalogHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostCatalogType request;
    public PostCatalogRequest withRequest(openapisdk.models.shared.PostCatalogType request) {
        this.request = request;
        return this;
    }
}