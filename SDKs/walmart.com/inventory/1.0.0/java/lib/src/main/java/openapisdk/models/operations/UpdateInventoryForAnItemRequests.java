package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInventoryForAnItemRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public UpdateInventoryForAnItemRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateInventoryForAnItemApplicationJson object;
    public UpdateInventoryForAnItemRequests withObject(UpdateInventoryForAnItemApplicationJson object) {
        this.object = object;
        return this;
    }
}