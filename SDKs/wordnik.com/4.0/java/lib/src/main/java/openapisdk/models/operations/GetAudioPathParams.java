package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAudioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetAudioPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}