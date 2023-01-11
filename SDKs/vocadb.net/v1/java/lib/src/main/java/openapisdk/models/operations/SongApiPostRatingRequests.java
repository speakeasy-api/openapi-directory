package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiPostRatingRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public SongApiPostRatingRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SongRatingContract songRatingContract;
    public SongApiPostRatingRequests withSongRatingContract(openapisdk.models.shared.SongRatingContract songRatingContract) {
        this.songRatingContract = songRatingContract;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.SongRatingContract songRatingContract1;
    public SongApiPostRatingRequests withSongRatingContract1(openapisdk.models.shared.SongRatingContract songRatingContract1) {
        this.songRatingContract1 = songRatingContract1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.SongRatingContract songRatingContract2;
    public SongApiPostRatingRequests withSongRatingContract2(openapisdk.models.shared.SongRatingContract songRatingContract2) {
        this.songRatingContract2 = songRatingContract2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public SongApiPostRatingRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}