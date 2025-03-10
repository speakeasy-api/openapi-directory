// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type MonthSummariesResponseData struct {
	Months []MonthSummary `json:"months"`
	// The knowledge of the server
	ServerKnowledge int64 `json:"server_knowledge"`
}

// MonthSummariesResponse - The list of budget months
type MonthSummariesResponse struct {
	Data MonthSummariesResponseData `json:"data"`
}
