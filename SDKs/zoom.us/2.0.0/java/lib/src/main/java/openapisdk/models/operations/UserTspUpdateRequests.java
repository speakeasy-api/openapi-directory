package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTspUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserTspUpdateTspAccount tspAccount;
    public UserTspUpdateRequests withTspAccount(UserTspUpdateTspAccount tspAccount) {
        this.tspAccount = tspAccount;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserTspUpdateTspAccount tspAccount1;
    public UserTspUpdateRequests withTspAccount1(UserTspUpdateTspAccount tspAccount1) {
        this.tspAccount1 = tspAccount1;
        return this;
    }
}