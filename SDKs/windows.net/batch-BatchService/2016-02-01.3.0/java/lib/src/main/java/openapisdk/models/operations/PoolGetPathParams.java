package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolGetPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}