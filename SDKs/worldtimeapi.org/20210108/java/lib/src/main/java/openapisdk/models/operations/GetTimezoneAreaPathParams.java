package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimezoneAreaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=area")
    public String area;
    public GetTimezoneAreaPathParams withArea(String area) {
        this.area = area;
        return this;
    }
}