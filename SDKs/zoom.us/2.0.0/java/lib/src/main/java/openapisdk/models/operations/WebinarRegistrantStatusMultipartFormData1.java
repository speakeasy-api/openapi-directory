package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantStatusMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=action")
    public WebinarRegistrantStatusMultipartFormDataActionEnum action;
    public WebinarRegistrantStatusMultipartFormData1 withAction(WebinarRegistrantStatusMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=registrants,json")
    public WebinarRegistrantStatusMultipartFormDataRegistrants[] registrants;
    public WebinarRegistrantStatusMultipartFormData1 withRegistrants(WebinarRegistrantStatusMultipartFormDataRegistrants[] registrants) {
        this.registrants = registrants;
        return this;
    }
}