import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGiftCardRequest extends SpeakeasyBase {
    /**
     * The caption of the Giftcard.
     */
    caption: string;
    /**
     * It must be in the format `YYYY-MM-DDThh:mm:ss.fff`.
     */
    expiringDate: string;
    /**
     * The Giftcard balance can be changed.
     */
    multipleCredits?: boolean;
    /**
     * The Giftcard can be used to make new purchases until its value is completely used.
     */
    multipleRedemptions?: boolean;
    /**
     * The client's ID.
     */
    profileId: string;
    /**
     * Represents the relationship between the client and the store.
     */
    relationName: string;
    /**
     * The Giftcard can only be used for a specified client's ID.
     */
    restrictedToOwner?: boolean;
}
