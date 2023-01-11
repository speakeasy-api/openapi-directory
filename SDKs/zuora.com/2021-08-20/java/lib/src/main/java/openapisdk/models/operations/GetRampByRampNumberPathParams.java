package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRampByRampNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rampNumber")
    public String rampNumber;
    public GetRampByRampNumberPathParams withRampNumber(String rampNumber) {
        this.rampNumber = rampNumber;
        return this;
    }
}