package shared

type PostSequenceSetsResponse struct {
	SequenceSets []GetSequenceSetResponse `json:"sequenceSets,omitempty"`
	Success      *bool                    `json:"success,omitempty"`
}
