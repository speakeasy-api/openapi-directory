package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeToCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public Double category;
    public SubscribeToCategoryPathParams withCategory(Double category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public SubscribeToCategoryPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}