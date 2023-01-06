package shared

type PostJournalEntryResponseType struct {
	JournalEntryNumber *string `json:"journalEntryNumber,omitempty"`
	Success            *bool   `json:"success,omitempty"`
}
