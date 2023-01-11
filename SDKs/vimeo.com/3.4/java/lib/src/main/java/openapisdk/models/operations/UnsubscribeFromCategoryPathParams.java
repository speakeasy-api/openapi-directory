package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeFromCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public UnsubscribeFromCategoryPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public UnsubscribeFromCategoryPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}