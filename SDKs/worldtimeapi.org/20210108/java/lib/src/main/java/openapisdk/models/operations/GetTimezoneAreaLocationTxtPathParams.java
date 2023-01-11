package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimezoneAreaLocationTxtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=area")
    public String area;
    public GetTimezoneAreaLocationTxtPathParams withArea(String area) {
        this.area = area;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public GetTimezoneAreaLocationTxtPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}