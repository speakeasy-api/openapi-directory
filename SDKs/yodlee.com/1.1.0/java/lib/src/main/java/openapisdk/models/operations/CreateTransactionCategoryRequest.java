package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTransactionCategoryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransactionCategoryRequestInput request;
    public CreateTransactionCategoryRequest withRequest(openapisdk.models.shared.TransactionCategoryRequestInput request) {
        this.request = request;
        return this;
    }
}