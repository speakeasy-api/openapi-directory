package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolEnableAutoScalePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolEnableAutoScalePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}