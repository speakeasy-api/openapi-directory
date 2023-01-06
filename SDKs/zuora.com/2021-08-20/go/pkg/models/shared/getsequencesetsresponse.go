package shared

type GetSequenceSetsResponse struct {
	SequenceSets []GetSequenceSetResponse `json:"sequenceSets,omitempty"`
	Success      *bool                    `json:"success,omitempty"`
}
