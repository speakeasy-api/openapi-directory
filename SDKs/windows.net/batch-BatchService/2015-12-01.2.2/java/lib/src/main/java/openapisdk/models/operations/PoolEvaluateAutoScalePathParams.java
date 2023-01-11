package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolEvaluateAutoScalePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolEvaluateAutoScalePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}