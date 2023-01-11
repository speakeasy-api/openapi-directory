package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PriceBulkUploadsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feedType")
    public PriceBulkUploadsFeedTypeEnum feedType;
    public PriceBulkUploadsQueryParams withFeedType(PriceBulkUploadsFeedTypeEnum feedType) {
        this.feedType = feedType;
        return this;
    }
}