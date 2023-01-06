package shared

type GetJournalEntriesInJournalRunType struct {
	JournalEntries []map[string]interface{} `json:"journalEntries,omitempty"`
	NextPage       *string                  `json:"nextPage,omitempty"`
	Success        *bool                    `json:"success,omitempty"`
}
