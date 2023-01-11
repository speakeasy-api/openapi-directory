package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRampMetricsByRampNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rampNumber")
    public String rampNumber;
    public GetRampMetricsByRampNumberPathParams withRampNumber(String rampNumber) {
        this.rampNumber = rampNumber;
        return this;
    }
}