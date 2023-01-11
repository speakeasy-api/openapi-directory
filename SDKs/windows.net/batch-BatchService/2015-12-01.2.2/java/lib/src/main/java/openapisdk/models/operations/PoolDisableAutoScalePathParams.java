package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolDisableAutoScalePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolDisableAutoScalePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}