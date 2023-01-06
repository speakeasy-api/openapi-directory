package operations

type DeleteVoicemailPathParams struct {
	VoicemailID string `pathParam:"style=simple,explode=false,name=voicemailId"`
}

type DeleteVoicemailRequest struct {
	PathParams DeleteVoicemailPathParams
}

type DeleteVoicemailResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	DeleteVoicemail204ApplicationJSONAny *interface{}
}
