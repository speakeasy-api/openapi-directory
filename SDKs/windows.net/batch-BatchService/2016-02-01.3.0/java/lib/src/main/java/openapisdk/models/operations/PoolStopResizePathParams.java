package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolStopResizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolStopResizePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}