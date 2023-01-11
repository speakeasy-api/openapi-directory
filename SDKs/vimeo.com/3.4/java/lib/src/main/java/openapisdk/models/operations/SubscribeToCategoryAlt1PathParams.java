package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeToCategoryAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public Double category;
    public SubscribeToCategoryAlt1PathParams withCategory(Double category) {
        this.category = category;
        return this;
    }
}