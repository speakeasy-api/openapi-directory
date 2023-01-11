package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionCategoryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCategoryRequest request;
    public UpdateTransactionCategoryRequest withRequest(openapisdk.models.shared.UpdateCategoryRequest request) {
        this.request = request;
        return this;
    }
}