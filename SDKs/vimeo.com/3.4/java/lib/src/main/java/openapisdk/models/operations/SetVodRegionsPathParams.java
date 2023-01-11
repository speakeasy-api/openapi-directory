package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetVodRegionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public SetVodRegionsPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}