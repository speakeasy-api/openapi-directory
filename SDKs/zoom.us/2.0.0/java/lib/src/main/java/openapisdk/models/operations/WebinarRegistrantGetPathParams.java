package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrantId")
    public String registrantId;
    public WebinarRegistrantGetPathParams withRegistrantId(String registrantId) {
        this.registrantId = registrantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarRegistrantGetPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}