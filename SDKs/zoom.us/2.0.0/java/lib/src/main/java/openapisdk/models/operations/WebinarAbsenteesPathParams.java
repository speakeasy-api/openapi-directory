package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarAbsenteesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WebinarUUID")
    public String webinarUUID;
    public WebinarAbsenteesPathParams withWebinarUuid(String webinarUUID) {
        this.webinarUUID = webinarUUID;
        return this;
    }
}