package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebinarRegistrantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrantId")
    public String registrantId;
    public DeleteWebinarRegistrantPathParams withRegistrantId(String registrantId) {
        this.registrantId = registrantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public DeleteWebinarRegistrantPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}