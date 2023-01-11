package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMonthCategoryRequest {
    public UpdateMonthCategoryPathParams pathParams;
    public UpdateMonthCategoryRequest withPathParams(UpdateMonthCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SaveMonthCategoryWrapper request;
    public UpdateMonthCategoryRequest withRequest(openapisdk.models.shared.SaveMonthCategoryWrapper request) {
        this.request = request;
        return this;
    }
}