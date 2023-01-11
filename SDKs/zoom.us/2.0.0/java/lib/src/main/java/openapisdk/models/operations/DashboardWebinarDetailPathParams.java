package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public DashboardWebinarDetailPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}