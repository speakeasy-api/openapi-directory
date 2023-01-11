package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRunTrialBalancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ap-id")
    public String apId;
    public PutRunTrialBalancePathParams withApId(String apId) {
        this.apId = apId;
        return this;
    }
}