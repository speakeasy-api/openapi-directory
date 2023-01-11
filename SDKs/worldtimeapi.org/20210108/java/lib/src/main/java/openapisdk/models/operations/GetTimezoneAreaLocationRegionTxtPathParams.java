package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimezoneAreaLocationRegionTxtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=area")
    public String area;
    public GetTimezoneAreaLocationRegionTxtPathParams withArea(String area) {
        this.area = area;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public GetTimezoneAreaLocationRegionTxtPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public GetTimezoneAreaLocationRegionTxtPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}