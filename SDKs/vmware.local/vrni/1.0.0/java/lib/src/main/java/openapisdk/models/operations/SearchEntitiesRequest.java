package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchEntitiesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchRequest request;
    public SearchEntitiesRequest withRequest(openapisdk.models.shared.SearchRequest request) {
        this.request = request;
        return this;
    }
    public SearchEntitiesSecurity security;
    public SearchEntitiesRequest withSecurity(SearchEntitiesSecurity security) {
        this.security = security;
        return this;
    }
}