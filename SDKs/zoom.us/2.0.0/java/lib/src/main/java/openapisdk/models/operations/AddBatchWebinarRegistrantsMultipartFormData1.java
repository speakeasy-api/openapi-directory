package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBatchWebinarRegistrantsMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=auto_approve")
    public Boolean autoApprove;
    public AddBatchWebinarRegistrantsMultipartFormData1 withAutoApprove(Boolean autoApprove) {
        this.autoApprove = autoApprove;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=registrants,json")
    public AddBatchWebinarRegistrantsMultipartFormDataRegistrants[] registrants;
    public AddBatchWebinarRegistrantsMultipartFormData1 withRegistrants(AddBatchWebinarRegistrantsMultipartFormDataRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
}