package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimezoneAreaTxtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=area")
    public String area;
    public GetTimezoneAreaTxtPathParams withArea(String area) {
        this.area = area;
        return this;
    }
}