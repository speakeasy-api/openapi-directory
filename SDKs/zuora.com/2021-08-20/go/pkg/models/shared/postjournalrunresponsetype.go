package shared

type PostJournalRunResponseType struct {
	JournalRunNumber *string `json:"journalRunNumber,omitempty"`
	Success          *bool   `json:"success,omitempty"`
}
