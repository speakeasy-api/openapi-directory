package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditCredentialsOrRefreshProviderAccountRequest {
    public EditCredentialsOrRefreshProviderAccountQueryParams queryParams;
    public EditCredentialsOrRefreshProviderAccountRequest withQueryParams(EditCredentialsOrRefreshProviderAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProviderAccountRequestInput request;
    public EditCredentialsOrRefreshProviderAccountRequest withRequest(openapisdk.models.shared.ProviderAccountRequestInput request) {
        this.request = request;
        return this;
    }
}